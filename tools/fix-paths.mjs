// Vite rewrites base-relative URLs in index.html and bundled assets, but NOT
// root-absolute runtime strings ("/images/…") in the page source, nor
// url(/fonts/…) public refs in CSS. Under the GitHub Pages project sub-path
// those would resolve at the domain root and 404, so rewrite them to the
// configured base after the bundle is emitted. Idempotent.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const base = (process.env.A2M_BASE ?? '/a2m-honorary-country').replace(/\/+$/, '')
const dist = new URL('../dist', import.meta.url).pathname
// Minified esbuild output wraps runtime strings in backticks, CSS url() refs
// in parens or quotes — cover all three delimiters.
const pattern = new RegExp('(["\'(`(])\\/(images|fonts)\\/', 'g')

let touched = 0
;(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) {
      walk(p)
      continue
    }
    if (!/\.[jt]?s$|\.css$/.test(name)) continue
    const src = readFileSync(p, 'utf8')
    const out = src.replace(pattern, `$1${base}/$2/`)
    if (out !== src) {
      writeFileSync(p, out)
      touched++
      console.log(`rewrote asset paths in ${p.replace(dist, 'dist')}`)
    }
  }
})(dist)
console.log(`fix-paths: ${touched} file(s) updated (base ${base})`)

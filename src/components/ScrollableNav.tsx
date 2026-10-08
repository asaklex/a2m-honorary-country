import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ScrollableNav({ ariaLabel, children }: { ariaLabel: string; children: ReactNode }) {
  const navRef = useRef<HTMLElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  const update = () => {
    const el = navRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 2)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2)
  }

  useEffect(() => {
    const el = navRef.current
    if (!el) return
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    Array.from(el.children).forEach((child) => observer.observe(child))
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollByPage = (direction: 1 | -1) => {
    const el = navRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  const edgeClass =
    'absolute inset-y-0 z-10 flex w-10 items-center justify-center text-taupe transition-colors hover:text-anthracite focus-visible:outline-2 focus-visible:outline-emerald-cta'

  return (
    <div className="relative min-w-0 flex-1">
      <nav
        ref={navRef}
        aria-label={ariaLabel}
        onScroll={update}
        className="flex items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </nav>
      {canLeft && (
        <button
          type="button"
          aria-label={`Scroll ${ariaLabel} left`}
          onClick={() => scrollByPage(-1)}
          className={`${edgeClass} left-0 bg-gradient-to-r from-ivory/95 via-ivory/80 to-transparent`}
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>
      )}
      {canRight && (
        <button
          type="button"
          aria-label={`Scroll ${ariaLabel} right`}
          onClick={() => scrollByPage(1)}
          className={`${edgeClass} right-0 bg-gradient-to-l from-ivory/95 via-ivory/80 to-transparent`}
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

// "On this page" section navigation: a sticky desktop pill bar plus a mobile
// floating button that expands the section list. The active pill follows a
// scroll-spy IntersectionObserver, matching the reference behaviour.
import { useEffect, useRef, useState } from 'react'
import { List } from 'lucide-react'
import ScrollableNav from './ScrollableNav'

type Item = { id: string; label: string }

export default function OnThisPageNav({ items }: { items: Item[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  const jump = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'smooth' })
    window.history.replaceState(null, '', `#${id}`)
  }

  const pillClass = (active: boolean) =>
    'whitespace-nowrap rounded-sm px-3 py-1.5 font-medium transition-colors ' +
    (active ? 'bg-mist text-emerald-deep' : 'text-muted hover:bg-anthracite/5 hover:text-anthracite')

  const activeLabel = items.find((item) => item.id === activeId)?.label ?? items[0]?.label ?? ''

  return (
    <>
      {/* Desktop sticky bar */}
      <div className="sticky top-20 z-30 hidden border-hairline border-b bg-ivory/95 backdrop-blur lg:top-[155px] lg:block">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)] px-4 sm:px-8 lg:px-16 flex items-center gap-3">
          <span className="shrink-0 font-semibold text-[10px] text-taupe uppercase tracking-[0.18em]">On this page :</span>
          <ScrollableNav ariaLabel="On this page">
            {items.map((item) => (
                <a
                  href={`#${item.id}`}
                  key={item.id}
                  data-nav-id={item.id}
                  aria-current={item.id === activeId ? 'true' : undefined}
                  className={pillClass(item.id === activeId)}
                  onClick={(e) => jump(e, item.id)}
                >
                  {item.label}
                </a>
            ))}
          </ScrollableNav>
        </div>
      </div>

      {/* Mobile floating button + expandable list */}
      <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2 sm:right-6 sm:bottom-6 lg:hidden print:hidden" ref={useRef<HTMLDivElement>(null)}>
        {open && (
          <nav
            aria-label="On this page"
            className="animate-fade-in flex max-h-[50vh] w-56 flex-col gap-1 overflow-y-auto rounded-sm border border-hairline bg-card p-2 shadow-card-hover"
          >
            {items.map((item) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                data-nav-id={item.id}
                aria-current={item.id === activeId ? 'true' : undefined}
                className={pillClass(item.id === activeId)}
                onClick={(e) => jump(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
        <button
          type="button"
          aria-expanded={open}
          aria-label="On this page"
          className="inline-flex h-12 items-center gap-2 rounded-sm bg-emerald-cta px-4 text-white shadow-emerald transition-colors hover:bg-emerald-deep focus-visible:outline-2 focus-visible:outline-emerald-cta focus-visible:outline-offset-2"
          onClick={() => setOpen((current) => !current)}
        >
          <List className="size-5" aria-hidden="true" />
          <span className="hidden max-w-[170px] truncate font-semibold text-[12px] uppercase tracking-[0.06em] sm:inline">{activeLabel}</span>
        </button>
      </div>
    </>
  )
}

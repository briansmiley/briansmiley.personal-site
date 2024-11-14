import { Link } from "@remix-run/react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
export interface Project {
  title: string
  thumbnail: string
  blurb: string
  url: string
}
interface EmblaProjectCarouselProps {
  projects: Project[]
  className?: string
}

export function EmblaProjectCarousel({
  projects,
  className = "",
}: EmblaProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: true,
  })
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <div
      className={`${className} embla flex h-[60%] items-center justify-between gap-2`}
    >
      <button
        className="embla__prev rounded-full bg-slate-200 bg-opacity-50 p-1.5 transition-all duration-300 hover:bg-slate-300"
        onClick={scrollPrev}
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <div className="embla__viewport h-full overflow-hidden" ref={emblaRef}>
        <div className="embla_container flex h-full justify-between">
          {projects.map((project) => (
            <div
              className="embla__slide ml-5 min-w-0 shrink-0 grow-0"
              key={project.title}
            >
              <Link to={project.url} rel="noopener noreferrer" target="_blank">
                <div className="group relative h-full">
                  <div className="invisible absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-full bg-indigo-950 bg-opacity-70 text-center text-white opacity-0 transition-opacity duration-1000 @container group-hover:visible group-hover:opacity-100">
                    <p className="text-sm font-semibold underline @[150px]:text-lg">
                      {project.title}
                    </p>
                    <p className="text-xs @[150px]:text-sm">{project.blurb}</p>
                  </div>
                  <img
                    className="h-full rounded-[0px] transition-all duration-1000 group-hover:scale-90 group-hover:rounded-[999px]"
                    src={project.thumbnail}
                    alt={project.title}
                  ></img>
                </div>
              </Link>
            </div>
          ))}
          {/* placeholder div to make a gap at end of loop */}
          {/* <div></div> */}
        </div>
      </div>
      <button
        className="embla__next rounded-full bg-slate-200 bg-opacity-50 p-1.5 transition-all duration-300 hover:bg-slate-300"
        onClick={scrollNext}
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}

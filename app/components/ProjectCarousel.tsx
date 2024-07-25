import { Link } from "@remix-run/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
export interface Project {
  title: string;
  thumbnail: string;
  blurb: string;
  url: string;
}
interface EmblaProjectCarouselProps {
  projects: Project[];
  className?: string;
}

export function EmblaProjectCarousel({
  projects,
  className = ""
}: EmblaProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div
      className={`${className} embla flex justify-between items-center h-[60%] gap-2 `}
    >
      <button
        className="embla__prev bg-slate-200 bg-opacity-50 hover:bg-slate-300 rounded-full p-1.5 transition-all duration-300"
        onClick={scrollPrev}
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <div className="embla__viewport overflow-hidden h-full " ref={emblaRef}>
        <div className="embla_container flex h-full justify-between ">
          {projects.map(project => (
            <div
              className="embla__slide ml-5 grow-0 shrink-0 min-w-0"
              key={project.title}
            >
              <Link to={project.url}>
                <div className="relative h-full group">
                  <div className="absolute z-10 inset-0 w-full h-full bg-indigo-950 rounded-full bg-opacity-70 flex items-center justify-center text-white text-center opacity-0  group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-1000">
                    <p className="text-xs sm:text-base md:text-lg">
                      <p className="underline text-l font-semibold">
                        {project.title}
                      </p>
                      <p className="text-sm">{project.blurb}</p>
                    </p>
                  </div>
                  <img
                    className="group-hover:scale-90 group-hover:rounded-[999px] h-full w-full object-contain rounded-[0px] transition-all duration-1000"
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
        className="embla__next bg-slate-200 bg-opacity-50 hover:bg-slate-300 rounded-full p-1.5 transition-all duration-300"
        onClick={scrollNext}
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

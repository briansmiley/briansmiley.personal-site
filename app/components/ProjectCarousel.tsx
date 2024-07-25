import { Link } from "@remix-run/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "./ui/carousel";
import { Card, CardContent, CardHeader } from "./ui/card";
export interface Project {
  title: string;
  thumbnail: string;
  blurb: string;
  url: string;
}
interface ProjectCarouselProps {
  projects: Project[];
  className?: string;
}
export default function ProjectCarousel({
  projects,
  className
}: ProjectCarouselProps) {
  return (
    <Carousel className={`${className} w-[75%] p-2`}>
      <CarouselContent>
        {projects.map((project, idx) => (
          <CarouselItem className="basis-3/5" key={idx}>
            <div className="p-1">
              <Link to={project.url}>
                <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 border-none text-slate-200 shadow-lg">
                  <CardHeader className="flex items-center justify-center py-2 text-xs sm:text-base md:text-lg lg:text-xl transition-all duration-300">
                    <span className="font-mono">
                      <a href={project.url}>{project.title}</a>
                    </span>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-full group">
                      <div className="absolute z-10 inset-0 w-full h-full bg-indigo-950 rounded-full bg-opacity-70 flex items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <p className="text-xs sm:text-base md:text-lg">
                          {project.blurb}
                        </p>
                      </div>
                      <img
                        className="group-hover:scale-90 group-hover:rounded-[999px] rounded-[0px] transition-all duration-1000"
                        src={project.thumbnail}
                        alt={project.title}
                      ></img>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-slate-500 hover:bg-slate-600 animate-all duration-300 text-white border-none" />
      <CarouselNext className="bg-slate-500 hover:bg-slate-600 animate-all duration-300 text-white border-none" />
    </Carousel>
  );
}

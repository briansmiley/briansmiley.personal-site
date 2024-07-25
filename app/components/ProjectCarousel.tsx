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
                    <span>
                      <a href={project.url}>{project.title}</a>
                    </span>
                  </CardHeader>
                  <CardContent>
                    <img src={project.thumbnail} alt={project.title}></img>
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

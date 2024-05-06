import GetProjects from "@/actions/GetProjects";
import { ProjectsCardType } from "@/lib/types";
import Image from "next/image";

const ProjectsPage = async () => {
  const data: ProjectsCardType[] = await GetProjects();

  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Projects</h1>
      <p className="leading-7 text-muted-foreground ">Check out my projects</p>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 ">
        {data.map((item) => {
          return (
            <a
              key={item._id}
              href={item.link}
              className="group block"
              target="_blank"
            >
              <div className="relative aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
                  src={item.imageUrl}
                  alt="Image"
                  fill
                />
              </div>
              <div className="mt-4">
                <h2 className="font-medium text-lg hover:underline">
                  {item.title}
                </h2>
                <p className="mt-1 text-muted-foreground line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tagItem, index) => {
                    if (tagItem == "" || tagItem == null || !tagItem)
                      return null;
                    return (
                      <span
                        className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                        key={index}
                      >
                        {tagItem}
                      </span>
                    );
                  })}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsPage;

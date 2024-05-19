import projects from "../../../data/projects";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

export default function Projects() {
  const ProjectCard = ({ project }: { project: ProjectItem }) => (
    <article className="rounded-lg border p-4 shadow-sm transition hover:shadow-lg sm:p-6 border-gray-800 bg-gray-900 shadow-gray-700/25">
      <div>
        <h3 className="mt-0.5 text-base font-medium text-white">
          {project.title}
        </h3>
      </div>
      <p className="mt-5 line-clamp-3 text-sm/relaxed text-gray-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );

  return (
    <section className="mx-auto mt-20 max-w-screen-xl px-4 pt-8" id="projects" >
      <h2 className="text-2xl font-bold text-center">My Projects</h2>

      {/* make a 3 col grid for articles */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

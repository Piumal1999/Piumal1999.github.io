import experience from "../../../data/experience";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export default function Experience() {
  const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
    <article className="rounded-lg border p-4 shadow-sm transition hover:shadow-lg sm:p-6 border-gray-800 bg-gray-900 shadow-gray-700/25">
      <div className="flex justify-between">
        <div>
          <h3 className="mt-0.5 text-base font-medium text-white">
            {item.title}
          </h3>
          <h2 className="mt-0.5 text-sm font-light text-white">
            {item.organization}
          </h2>
          <span className="block mt-1 text-xs text-gray-400">
            {item.period}
          </span>
        </div>
        {/* <a href="#" className="ml-3">
          <img
            alt=""
            src=""
            className="size-14 rounded-lg object-cover"
          />
        </a> */}
      </div>
      <p className="mt-5 line-clamp-3 text-sm/relaxed text-gray-400">
        {item.description}
      </p>
    </article>
  );

  return (
    <section className="mx-auto max-w-screen-xl px-4 pt-8" id="experience">
      <h2 className="text-2xl font-bold text-center">Experience</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-10">
        {experience.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

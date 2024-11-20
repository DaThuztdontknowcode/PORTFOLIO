import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={300}
                height={300}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>

            {/* Project Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies Used */}
              <div>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Visit Website Button */}
              <div className="mt-4">
                <a
                  href={project.website} // Link to the project website
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 mt-4 text-white bg-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-700 transition duration-300"
                >
                  Visit My Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

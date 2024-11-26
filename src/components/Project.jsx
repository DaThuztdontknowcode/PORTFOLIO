import { useState, useEffect } from "react";
import { PROJECTS } from "../constants"; // Replace with your actual project data

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // 2. Hàm xử lý cuộn nền khi modal mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // 3. Hàm xem chi tiết dự án
  const handleViewDetails = (project) => {
    if (selectedProject === project) {
      setIsOpen(!isOpen);
    } else {
      setSelectedProject(project);
      setIsOpen(true);
    }
  };

  // 4. Phần nội dung chính
  return (
    <div className="relative">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="project-card mb-8 flex flex-wrap lg:justify-center p-6  rounded-lg shadow-md hover:shadow-lg  transition transform relative z-10"
          >
            {/* Nội dung mỗi dự án */}
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
              <div className="mt-4">
                <button
                  onClick={() => handleViewDetails(project)}
                  className="inline-block px-6 py-2 mt-4 text-white bg-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-700 transition duration-300"
                >
                  {isOpen && selectedProject === project ? "Close" : "View Details"}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Overlay */}
        {/* Overlay khi mở modal */}
        {isOpen && selectedProject && (
          <div className="fixed inset-0 bg-black opacity-50 z-20"></div>
        )}

        {/* Project Details Modal */}
        {/* Modal hiển thị chi tiết dự án */}
        {isOpen && selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-30">
            <div className="relative bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-xl overflow-hidden">
              {/* Drag Bar */}
              <div className="cursor-move bg-gray-100 p-2 rounded-t-lg flex justify-between items-center">
                <h4 className="text-lg font-bold text-gray-700"></h4>
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-gray-700 hover:text-gray-900"
                >
                  &times;
                </button>
              </div>

              {/* Modal Content */}
              {/* Nội dung Modal */}
              <h2 className="text-2xl font-semibold text-black mt-4">
                {selectedProject.title}
              </h2>
              <div className="h-[300px] overflow-y-scroll p-2">
                <p className="text-neutral-600 mt-2">{selectedProject.description}</p>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="mt-4 rounded w-full object-cover"
                />
                {selectedProject.dtb && (
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold text-black">
                      {selectedProject.dtb}
                    </h4>
                    <p className="text-neutral-500">{selectedProject.dtbdescr}</p>
                    <img
                      src={selectedProject.dtbimage}
                      alt={selectedProject.dtb}
                      className="mt-4 rounded w-full object-cover"
                    />
                  </div>
                )}
                <div className="mt-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={selectedProject.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-white bg-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-700 transition duration-300"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

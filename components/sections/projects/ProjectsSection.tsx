"use client";

import W95Icon from "@/components/W95Icon";
import projects from "@/data/projects";
import { useCallback, useEffect, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";

const normalTextClassname =
  "text-white text-2xl tracking-wider p-1 w-full text-center border-dotted border-transparent border-2 h-16";
const selectedTextClassname = `${normalTextClassname} bg-[#000080] !border-yellow-500`;

const ProjectsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [opened, setOpened] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setSelected((prev) => {
          if (prev === null) return projects[0].id;
          const index = projects.findIndex((project) => project.id === prev);
          const nextIndex = (index + 1) % projects.length;
          return projects[nextIndex].id;
        });
      } else if (e.key === "ArrowLeft") {
        setSelected((prev) => {
          if (prev === null) return projects[projects.length - 1].id;
          const index = projects.findIndex((project) => project.id === prev);
          const nextIndex = (index - 1 + projects.length) % projects.length;
          return projects[nextIndex].id;
        });
      } else if (e.key === "Enter") {
        setOpened(selected);
      }
    },
    [setSelected, selected]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target instanceof HTMLDivElement) {
        setSelected(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleKeyDown]);

  const onProjectClick = (value: number) => {
    if (selected === value) {
      return setOpened(value);
    }

    setSelected(value);
  };

  const close = () => setOpened(null);

  return (
    <div className="h-full w-full relative">
      <ProjectModal id={opened} close={close} />
      <div className="flex gap-16 p-6 flex-wrap justify-start items-start">
        {projects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer flex flex-col items-center h-fit max-w-32"
            onClick={() => onProjectClick(project.id)}
          >
            <div
              className={`flex w-full items-center justify-center rendering-pixelated ${
                selected === project.id ? "hovered-file" : ""
              }`}
            >
              <W95Icon id="4" size={128} />
            </div>
            <h1
              className={
                selected === project?.id
                  ? selectedTextClassname
                  : normalTextClassname
              }
            >
              {project.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

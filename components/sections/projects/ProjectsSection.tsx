"use client";

import W95Icon from "@/components/W95Icon";
import projects from "@/data/projects";
import {
  Dispatch,
  Key,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ProjectModal from "./ProjectModal";

const normalTextClassname =
  "text-white text-xl tracking-wider p-1 w-full text-center border-dotted border-transparent border-2";
const selectedTextClassname = `${normalTextClassname} bg-[#000080] !border-yellow-500`;

interface IProps {
  opened: number[];
  setOpened: Dispatch<SetStateAction<number[]>>;
  navItems?: number[];
  setNavItems?: Dispatch<SetStateAction<number[]>>;
}

const ProjectsSection = ({
  opened,
  navItems,
  setOpened,
  setNavItems,
}: IProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (opened) return;

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
        if (selected) {
          setOpened((prev) => [...prev, selected]);
        }
      }
    },
    [setSelected, setOpened, selected, opened]
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
      setNavItems?.((prev) => {
        if (prev.includes(value)) return prev;
        return [...prev, value];
      });
      return setOpened((prev) => {
        if (prev.includes(value)) return prev;
        return [...prev, value];
      });
    }

    setSelected(value);
  };

  const hide = (id: number) => {
    setOpened((prev) => prev.filter((item) => item !== id));
  };

  const close = (id: number) => {
    setNavItems?.((prev) => prev.filter((item) => item !== id));
    hide(id);
  };

  return (
    <div className="h-full w-full pb-[44px]">
      {projects.map((project) => (
        <div
          key={project.id}
          className={opened.includes(project.id) ? "block" : "hidden"}
        >
          <ProjectModal
            id={project.id}
            hide={hide}
            close={close}
            isOpen={opened.includes(project.id)}
            key={navItems!.includes(project.id) as unknown as Key}
          />
        </div>
      ))}
      <div className="flex gap-8 p-6 flex-wrap justify-start items-start">
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
              <W95Icon id="4" size={64} />
            </div>
            <div className="h-16">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

import projects from "@/data/projects";
import { useEffect, useRef } from "react";
import { Button, Window, WindowContent, WindowHeader } from "react95";

interface IProps {
  id: number | null;
  close: () => void;
}

const ProjectModal = ({ id, close }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        containerRef.current.contains(e.target as Node) &&
        !windowRef.current?.contains(e.target as Node)
      ) {
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (containerRef.current) {
      containerRef.current.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (containerRef.current) {
        containerRef.current.removeEventListener("click", handleClickOutside);
      }
    };
  }, [close, id]);

  if (!id) return null;

  const selectedProject = projects.find((project) => project.id === id);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[999]"
      ref={containerRef}
    >
      <Window className="min-h-96 min-w-96" ref={windowRef}>
        <WindowHeader
          // @ts-ignore some hacky workaround for component issues
          shadow="true"
        >
          <div className="flex justify-between">
            <span>{selectedProject?.name}.exe</span>
            <Button size="sm" square onClick={close}>
              X
            </Button>
          </div>
        </WindowHeader>
        <WindowContent
          // @ts-ignore some hacky workaround for component issues
          active="true"
        >
          <p>{selectedProject?.description}</p>
          <ul>
            {selectedProject?.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </WindowContent>
      </Window>
    </div>
  );
};

export default ProjectModal;

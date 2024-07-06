import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Button, Frame, Window, WindowContent, WindowHeader } from "react95";

interface IProps {
  id: number;
  isOpen: boolean;
  close: (id: number) => void;
  hide: (id: number) => void;
}

const ProjectModal = ({ id, isOpen, close, hide }: IProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const selectedProject = projects.find((project) => project.id === id);

  // event listener to focus on the window when clicked
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (windowRef.current?.contains(e.target as Node)) {
        setIsFocused(true);
      } else {
        setIsFocused(false);
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsFocused(true);
    }
  }, [isOpen]);
  const zIndex = isFocused ? "z-[6]" : "z-[5]";

  return (
    <Draggable handle="#drag-handle">
      <Window
        className={`h-fit w-[912px] max-w-[90%] !absolute left-0 right-0 top-0 bottom-0 m-auto ${zIndex}`}
        ref={windowRef}
      >
        <WindowHeader
          // @ts-ignore some hacky workaround for component issues
          shadow="true"
          className="!h-fit"
        >
          <div className="flex justify-between items-center">
            <div className="w-full cursor-grab" id="drag-handle">
              {selectedProject?.name}.exe
            </div>
            <div className="flex gap-1 h-fit">
              <Button
                size="sm"
                square
                onClick={() => hide(id)}
                className="relative"
              >
                <div className="bg-black w-[50%] h-[2px] absolute bottom-[10px]" />
              </Button>
              <Button size="sm" square onClick={() => close(id)}>
                X
              </Button>
            </div>
          </div>
        </WindowHeader>
        <WindowContent
          // @ts-ignore some hacky workaround for component issues
          active="true"
          className="text-lg flex gap-5 flex-col"
        >
          <div>
            <div className="flex w-full justify-end gap-3">
              {selectedProject?.links?.github && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-2 text-blue-800"
                  href={selectedProject?.links?.github}
                >
                  Github
                </a>
              )}
              {selectedProject?.links?.website && (
                <a
                  className="font-bold underline underline-offset-2 text-blue-800"
                  href={selectedProject?.links?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              )}
            </div>
            <Frame variant="well" className="w-full p-2">
              <p className="font-bold">Technologies used: </p>
              <p>{selectedProject?.technologies.join(", ")}</p>
            </Frame>
          </div>
          <p>{selectedProject?.description}</p>
          {selectedProject?.image && (
            <div className="flex items-center justify-center">
              <Frame variant="outside" className="w-fit p-1">
                <Image
                  src={selectedProject?.image}
                  alt={selectedProject!.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", maxHeight: "384px" }} // optional
                />
              </Frame>
            </div>
          )}
          {selectedProject?.iframe && (
            <div className="flex items-center justify-center w-full">
              <Frame variant="outside" className="w-full p-1">
                <iframe src={selectedProject?.iframe} className="w-full h-96" />
              </Frame>
            </div>
          )}
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default ProjectModal;

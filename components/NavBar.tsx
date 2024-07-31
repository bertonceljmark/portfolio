"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  ScrollView,
  Toolbar,
} from "react95";
import W95Icon from "./W95Icon";
import projects from "@/data/projects";

interface IProps {
  navItems: number[];
  opened: number[];
  setOpened: Dispatch<SetStateAction<number[]>>;
  scrollToBottom: () => void;
}

const NavBar = ({ navItems, opened, setOpened, scrollToBottom }: IProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target instanceof HTMLButtonElement) {
        return;
      }

      setMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () =>
      document.removeEventListener("click", () => setMenuOpen(false));
  }, []);

  const navProjects = navItems.map((item) =>
    projects.find((project) => project.id === item)
  );

  const toggleOpen = (id: number) => {
    setOpened((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);

      return [...prev, id];
    });
  };

  return (
    <AppBar className="z-10 bottom-0 !top-auto !absolute">
      <Toolbar className="max-w-full">
        <div className="flex gap-3 max-w-full">
          <div className="relative flex-shrink-0">
            <Button
              className="flex gap-1"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Image
                src="/icons/w95start.png"
                alt="start"
                width={24}
                height={24}
              />
              <span className="font-bold">Start</span>
            </Button>
            {menuOpen && (
              <MenuList className="!absolute left-0 bottom-full">
                <MenuListItem onClick={scrollToBottom}>
                  Get in touch
                </MenuListItem>
              </MenuList>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto flex-shrink hide-scrollbar">
            {navProjects.map((item) => (
              <Button
                key={item!.id}
                className="flex gap-2"
                onClick={() => toggleOpen(item!.id as number)}
                active={opened.includes(item!.id)}
              >
                <W95Icon id={opened.includes(item!.id) ? "5" : "4"} size={20} />
                <span className="font-bold truncate">{item?.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

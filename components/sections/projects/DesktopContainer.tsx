import NavBar from "@/components/NavBar";
import { useState } from "react";
import ProjectsSection from "./ProjectsSection";

const DesktopContainer = () => {
  const [opened, setOpened] = useState<number[]>([]);
  const [navItems, setNavItems] = useState<number[]>([]);

  return (
    <>
      <ProjectsSection
        opened={opened}
        navItems={navItems}
        setOpened={setOpened}
        setNavItems={setNavItems}
      />
      <NavBar navItems={navItems} opened={opened} setOpened={setOpened} />
    </>
  );
};

export default DesktopContainer;

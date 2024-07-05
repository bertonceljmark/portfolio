"use client";
import NavBar from "@/components/NavBar";
import ScrollIndicator from "@/components/ScrollIndicator";
import Section, { ISectionOptional } from "@/components/Section";
import HeroSection from "@/components/sections/hero/HeroSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import { useEffect, useRef, useState } from "react";

interface ISectionItem {
  component: () => JSX.Element;
  props: ISectionOptional;
}

const sections: ISectionItem[] = [
  {
    component: HeroSection,
    props: { backgroundPath: "/backgrounds/clouds.jpg", addTexture: true },
  },
  { component: ProjectsSection, props: { backgroundColor: "teal" } },
  { component: HeroSection, props: { backgroundColor: "teal" } },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const sectionsCleanup = sectionRefs.current;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newIndex = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          setActiveIndex(newIndex);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      if (observer) {
        sectionsCleanup.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, [setActiveIndex]);

  const sectionsNum = sections.length;

  return (
    <>
      <NavBar />
      <main className="flex flex-col snap-y snap-mandatory overflow-y-scroll h-dvh hide-scrollbar">
        <ScrollIndicator activeIndex={activeIndex} sectionsNum={sectionsNum} />
        {sections.map(({ component: Component, props }, index) => (
          <Section
            key={index}
            {...props}
            sectionRefs={sectionRefs}
            index={index}
          >
            <Component />
          </Section>
        ))}
      </main>
    </>
  );
}

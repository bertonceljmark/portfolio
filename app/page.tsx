"use client";
import NavBar from "@/components/NavBar";
import ScrollIndicator from "@/components/ScrollIndicator";
import Section, { ISectionOptional } from "@/components/Section";
import ContactSection from "@/components/sections/contact/ContactSection";
import ExpirienceSection from "@/components/sections/experience/ExperienceSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import DesktopContainer from "@/components/sections/projects/DesktopContainer";
import scrollToBottom from "@/helpers/scrollToBottom";
import { useEffect, useRef, useState } from "react";

interface ISectionItem {
  component: (props: any) => JSX.Element;
  props: ISectionOptional;
  componentProps?: Record<string, unknown>;
}

const sections: ISectionItem[] = [
  {
    component: HeroSection,
    props: { backgroundPath: "/backgrounds/clouds.jpg", addTexture: true },
  },
  { component: DesktopContainer, props: { backgroundColor: "teal" } },
  { component: ExpirienceSection, props: { backgroundColor: "black" } },
  {
    component: ContactSection,
    props: { backgroundPath: "/backgrounds/nyan.gif" },
  },
];

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
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
      <main className="flex flex-col snap-y snap-mandatory overflow-y-scroll h-dvh hide-scrollbar duration-500">
        <ScrollIndicator activeIndex={activeIndex} sectionsNum={sectionsNum} />
        {sections.map(({ component: Component, props }, index) => (
          <Section
            key={index}
            {...props}
            sectionRefs={sectionRefs}
            index={index}
          >
            <Component
              scrollToBottom={() => scrollToBottom(contactRef)}
              contactRef={contactRef}
            />
          </Section>
        ))}
      </main>
    </>
  );
}

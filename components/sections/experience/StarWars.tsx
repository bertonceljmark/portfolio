"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const StarWars = () => {
  const intro = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(intro, { once: true });
  const contentContainer = useRef<HTMLDivElement>(null);

  const animationSequence = useCallback(() => {
    if (!intro.current || !title.current || !content.current || !isInView) {
      return;
    }

    return [
      [intro.current, { opacity: 1 }, { duration: 4.5 }],
      [intro.current, { opacity: 0 }, { duration: 1.5, delay: 3 }],
      [title.current, { opacity: 1 }, { duration: 0.5 }],
      [title.current, { scale: 0.05, opacity: 0 }, { duration: 8, delay: 3 }],
    ];
  }, [isInView]);

  const animationContentSequence = useCallback(() => {
    if (!content.current || !isInView) {
      return;
    }

    return [[content.current, { top: "0dvh" }, { delay: 12.5, duration: 10 }]];
  }, [isInView]);

  useEffect(() => {
    const sequence = animationSequence();

    if (sequence) {
      const animation = animate(sequence as any[]);
      const animationContent = animate(animationContentSequence() as any[]);

      animation.play();
      animationContent.play();
    }
  }, [animationSequence, animationContentSequence]);

  useEffect(() => {
    // A silly little workorund for 3d scrolling issue on mobile
    function disableTransforms() {
      if (contentContainer.current) {
        contentContainer.current.style.transform = "translateX(-50%)";
        contentContainer.current.style.width = "90vw";
      }
    }

    function enableTransforms() {
      if (contentContainer.current) {
        contentContainer.current.style.transform =
          "translateX(-50%) perspective(600px) rotateX(20deg)";
        contentContainer.current.style.width = "110vw";
      }
    }

    contentContainer?.current?.addEventListener(
      "touchstart",
      disableTransforms
    );
    contentContainer?.current?.addEventListener("touchend", enableTransforms);
    contentContainer?.current?.addEventListener(
      "touchcancel",
      enableTransforms
    );
    contentContainer?.current?.addEventListener(
      "touchcancel",
      enableTransforms
    );
    contentContainer?.current?.addEventListener("touchmove", disableTransforms);

    return () => {
      document.removeEventListener("touchstart", disableTransforms);
      document.removeEventListener("touchend", enableTransforms);
    };
  }, [isInView]);
  return (
    <div
      ref={container}
      className="h-full w-full text-[#FDD404] star-wars-font font-bold text-sm xl:text-4xl relative"
    >
      <section
        ref={intro}
        className="opacity-0 absolute left-0 right-0 top-0 bottom-0 m-auto h-fit w-fit text-[rgb(75,_213,_238)]"
      >
        <p className="text-center">
          A long time ago, in a galaxy far,
          <br /> far away....
        </p>
      </section>
      <section
        ref={title}
        className="opacity-0 absolute left-0 right-0 top-0 bottom-0 m-auto max-w-[80vw] w-[912px] h-auto"
      >
        <Image
          src="/img/employment-wars.png"
          style={{ objectFit: "contain" }}
          fill
          sizes="100vw"
          alt="employment wars"
        />
      </section>
      <section
        className="left-0 right-0 top-0 bottom-[100dvh] relative m-auto h-[200dvh] w-[110%] overflow-y-scroll overflow-x-hidden crawl z-50 hide-scrollbar text-[150%] md:leading-[150%] md:text-[300%]"
        ref={contentContainer}
      >
        <div
          className="left-0 right-0 top-[210dvh] absolute mx-auto text-justify crawl-content pt-96 flex flex-col gap-24"
          ref={content}
        >
          <div>
            <h1 className="text-center">Episode X</h1>
            <h2 className="episode-title md:text-[250%] leading-[1] transform-[scale(1,_1.5)] text-center">
              WORK EXPERIENCE
            </h2>
          </div>
          <div className="h-fit leading-[1.33] overflow-hidden flex flex-col gap-12">
            <p>1. Inovakom - Technical support (2019-2022)</p>
            <p>
              Inovakom is a company that works with smart intercom systems and
              IP telephony. My responsibilities included designing and managing
              intercom systems, working with network equipment, managing company
              website and providing technical support to customers.
            </p>
            <p>
              While not being directly related to web development, it taught me
              many lessons, such as the importance of documentation, cooperation
              with team members and external partners, the ability to do
              independant research, and the ability to quickly learn new
              technologies.
            </p>
          </div>
          <div className="h-fit leading-[1.33] overflow-hidden flex flex-col gap-12">
            <p>2. Httpool - Frontend developer (2022-2024)</p>
            <p>
              Httpool (part of Aleph Group) is a digital marketing company that
              provides advertising solutions. I worked on the development of
              tool WiseBlue, which is used for managing advertising campaigns on
              Twitter. My responsibilities included developing new features,
              fixing bugs, and maintaining the codebase. I loved working with
              the team and learning from experienced developers.
            </p>
            <p>
              My greatest achievement while working here was getting rid of vast
              majority of the bugs (as a part of frontend duo), that were caused
              by years of tech dept. My other contributions include migrating
              frontend to new backend system, implamenting new design for the
              whole platform and implamenting Typescript to the project.
            </p>
            <p>
              Technologies used: React, Redux, Typescript, Jest, Git, GraphQL,
              PHP(Symphony), Docker, Jira, Confluence, Bitbucket, Slack, Figma.
            </p>
          </div>
          <div className="leading-[1.33] h-fit overflow-hidden flex flex-col gap-12">
            <p>3. Emazing - Full stack developer (2024-)</p>
            <p>
              Emazing is a company that provides patient management for various
              private health institutions. My primary responsibility is to work
              on Patient Relationship Manager (PRM) platform, which is used by
              internal callers and health workers to manage patient data,
              appointments, leads and provide statistics.
            </p>
            <p>
              I represent one man development team for the company. I work on
              both frontend and backend, and I am responsible for the whole
              development process, from design (some of it) to deployment. My
              other responsibilities include working with external parteners,
              providing technical support to internal users, working on websites
              and maintaining the codebase and database.
            </p>
            <p>
              Besides working on PRM, I am also being dedicated to other
              projects. Most of the other projects are built with low code tools
              (Retool, Webflow). While not being the biggest fan of low code, I
              see the value in it, and I am always trying to find a way to apply
              my knowledge and skills to it.
            </p>
            <p>
              My greates achievements while working here were migrating to new
              VOiP provider, optimising page load of some pages by as much as
              50%, implamenting internal caller statistics, implamenting
              Facebook Leadgen API, implamenting Checkup SMS system.
            </p>
            <p>
              Technologies used: Vue, Node.js, Express, Git, Github, PostgreSQL,
              Prisma, Google Analytics, Google Tag Manager, Google Ad Manager,
              Facebook Event Manager, Facebook API, Webflow, Retool, Figma.
            </p>
          </div>
          <p className="mb-96">The saga continues...</p>
        </div>
      </section>
    </div>
  );
};

export default StarWars;

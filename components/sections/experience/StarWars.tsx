import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";

const StarWars = () => {
  const intro = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const animationSequence = () => {
    if (!intro.current || !title.current || !content.current) return;

    return [
      [intro.current, { opacity: 1 }, { duration: 4.5 }],
      [intro.current, { opacity: 0 }, { duration: 1.5 }],
      [title.current, { opacity: 1 }, { duration: 0.5 }],
      [title.current, { scale: 0.05 }, { duration: 8 }],
      [title.current, { opacity: 0 }, { duration: 1.5 }],
    ];
  };

  useEffect(() => {
    const sequence = animationSequence();

    if (sequence) {
      const animation = animate(sequence as any[]);

      animation.play();
    }
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      className="h-full w-full text-[#FDD404] star-wars-font font-bold text-sm xl:text-4xl relative"
    >
      <section
        ref={intro}
        className="opacity-0 absolute left-0 right-0 top-0 bottom-0 m-auto h-fit w-fit text-[rgb(75,_213,_238)]"
      >
        <p>
          A long time ago, in a galaxy far,
          <br /> far away....
        </p>
      </section>
      <section
        ref={title}
        className="opacity-0 absolute left-0 right-0 top-0 bottom-0 m-auto h-fit w-fit"
      >
        <Image
          src="/icons/w95start.png"
          alt="Windows 95 logo"
          width={32}
          height={32}
        />
      </section>
      <section className="left-0 right-0 top-0 bottom-[100%] m-auto h-[200%] w-[120%] relative overflow-y-scroll overflow-x-hidden crawl z-50 hide-scrollbar">
        <div
          className="left-0 right-0 top-0 mx-auto absolute text-justify crawl-content"
          ref={content}
        >
          <h1 className="mt-[100%] text-center">Episode X</h1>
          <h2 className="episode-title text-[250%] leading-[1] mb-28 transform-[scale(1,_1.5)] text-center">
            WORK EXPERIENCE
          </h2>
          <p className="mb-24 leading-[1.33]">
            <p className="mb-12">1. Inovakom - Technical support (2019-2022)</p>
            <p className="mb-12">
              Inovakom is a company that works with smart intercom systems and
              IP telephony. My responsibilities included designing and managing
              intercom systems, working with network equipment, managing company
              website and providing technical support to customers.
            </p>
            <p className="mb-12">
              While not being directly related to web development, it taught me
              many lessons, such as the importance of documentation, cooperation
              with team members and external partners, the ability to do
              independant research, and the ability to quickly learn new
              technologies.
            </p>
          </p>
          <p className="mb-24 leading-[1.33]">
            <p className="mb-12">2. Httpool - Frontend developer (2022-2024)</p>
            <p className="mb-12">
              Httpool (part of Aleph Group) is a digital marketing company that
              provides advertising solutions. I worked on the development of
              tool WiseBlue, which is used for managing advertising campaigns on
              Twitter. My responsibilities included developing new features,
              fixing bugs, and maintaining the codebase. I loved working with
              the team and learning from experienced developers.
            </p>
            <p className="mb-12">
              My greatest achievement while working here was getting rid of vast
              majority of the bugs (as a part of frontend duo), that were caused
              by years of tech dept. My other contributions include migrating
              frontend to new backend system, implamenting new design for the
              whole platform and implamenting Typescript to the project.
            </p>
            <p className="mb-12">
              Technologies used: React, Redux, Typescript, Jest, Git, GraphQL,
              PHP(Symphony), Docker, Jira, Confluence, Bitbucket, Slack, Figma.
            </p>
          </p>
          <p className="mb-24 leading-[1.33]">
            <p className="mb-12">3. Emazing - Full stack developer (2024-)</p>
            <p className="mb-12">
              Emazing is a company that provides patient management for various
              private health institutions. My primary responsibility is to work
              on Patient Relationship Manager (PRM) platform, which is used by
              internal callers and health workers to manage patient data,
              appointments, leads and provide statistics.
            </p>
            <p className="mb-12">
              I represent one man development team for the company. I work on
              both frontend and backend, and I am responsible for the whole
              development process, from design (some of it) to deployment. My
              other responsibilities include working with external parteners,
              providing technical support to internal users, working on websites
              and maintaining the codebase and database.
            </p>
            <p className="mb-12">
              Besides working on PRM, I am also being dedicated to other
              projects. Most of the other projects are built with low code tools
              (Retool, Webflow). While not being the biggest fan of low code, I
              see the value in it, and I am always trying to find a way to apply
              my knowledge and skills to it.
            </p>
            <p className="mb-12">
              My greates achievements while working here were migrating to new
              VOiP provider, optimising page load of some pages by as much as
              50%, implamenting internal caller statistics, implamenting
              Facebook Leadgen API, implamenting Checkup SMS system.
            </p>
            <p className="mb-12">
              Technologies used: Vue, Node.js, Express, Git, Github, PostgreSQL,
              Prisma, Google Analytics, Google Tag Manager, Google Ad Manager,
              Facebook Event Manager, Facebook API, Webflow, Retool, Figma.
            </p>
          </p>
          <p className="mb-96">The saga continues...</p>
        </div>
      </section>
    </motion.div>
  );
};

export default StarWars;

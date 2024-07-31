"use client";
import { useState } from "react";
import { Button, Monitor, Window, WindowContent, WindowHeader } from "react95";
import Typewriter, { TypewriterClass } from "typewriter-effect";

const HeroSection = ({ scrollToBottom }: { scrollToBottom: () => void }) => {
  const [errorOpen, setErrorOpen] = useState(false);

  const write = (typewriter: TypewriterClass, idx: number) => {
    typewriter
      .pauseFor(1500 * idx)
      .typeString("Hello World! ")
      .pauseFor(1500)
      .typeString("Hello World! ")
      .pauseFor(1500)
      .typeString("Hello Wrold")
      .deleteChars(5)
      .typeString("World! ")
      .pauseFor(1500)
      .typeString("Hello World!")
      .pauseFor(1500)
      .callFunction(() => setErrorOpen(true))
      .pause()
      .start();
  };

  const messageIdx = [0, 1, 2, 3, 4, 5];

  return (
    <div className="flex items-center flex-col-reverse scale-110 xl:flex-row gap-5 lg:gap-10 lg:scale-[200%]">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-6xl font-bold">Hi, I&apos;m Mark</h1>
        <p className="text-3xl">I build cool web stuff</p>
        <Button className="mt-2" onClick={scrollToBottom} size="sm">
          Contact me
        </Button>
      </div>
      <div className="relative">
        {errorOpen && (
          <Window
            // @ts-ignore some hacky workaround for component issues
            shadow="true"
            className="scale-[40%] w-64 !absolute z-50 left-0 -translate-x-8 translate-y-3 top-0 bottom-0 !h-fit"
          >
            <WindowHeader
              // @ts-ignore some hacky workaround for component issues
              active="true"
              className="flex items-center justify-between"
            >
              <span>Error</span>
            </WindowHeader>
            <WindowContent>Error 666: Task failed succesfully</WindowContent>
          </Window>
        )}
        <Monitor backgroundStyles={{ backgroundColor: "black" }}>
          <div className="max-h-[98%] pl-2 overflow-hidden">
            <div className="text-xl font-bold text-[#0FFF50]">
              <Typewriter
                onInit={(typewriter) => write(typewriter, messageIdx[0])}
                options={{ autoStart: true }}
              />
            </div>
          </div>
        </Monitor>
      </div>
    </div>
  );
};

export default HeroSection;

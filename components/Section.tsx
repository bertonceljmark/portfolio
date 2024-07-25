import {
  CSSProperties,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
} from "react";

export interface ISectionOptional {
  backgroundPath?: string;
  backgroundColor?: keyof typeof colorVariants;
  addTexture?: boolean;
}

interface ISection {
  children: ReactNode;
  sectionRefs: MutableRefObject<HTMLDivElement[]>;
  index: number;
}

const colorVariants = {
  teal: "bg-teal-700",
  red: "bg-red-700",
  black: "bg-black",
};

const Section = ({
  children,
  backgroundPath,
  backgroundColor,
  addTexture,
  sectionRefs,
  index,
}: ISection & ISectionOptional) => {
  const backgroundStyle: CSSProperties = backgroundPath
    ? { backgroundImage: `url('${backgroundPath}')`, backgroundSize: "cover" }
    : {};

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRefs.current[index] = sectionRef.current;
    }
  }, [sectionRefs, index]);

  return (
    <section
      className={`${
        backgroundColor ? colorVariants[backgroundColor] : ""
      } relative min-h-dvh w-full overflow-hidden flex items-center justify-center snap-always snap-start bg-right`}
      style={backgroundStyle}
      ref={sectionRef}
    >
      {addTexture && (
        <div className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none custom-blend-mode" />
      )}
      {children}
    </section>
  );
};

export default Section;

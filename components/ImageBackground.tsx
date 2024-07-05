import Image from "next/image";

const ImageBackground = ({ path }: { path: string }) => {
  console.log(path);
  return (
    <Image
      src={path}
      layout="fill"
      objectFit="cover"
      alt="background"
      className="absolute top-0 left-0 z-[-1] rendering-pixelated"
    />
  );
};

export default ImageBackground;

interface IProps {
  activeIndex: number;
  sectionsNum: number;
}

const styles = {
  active:
    "flex items-center justify-around mr-2 w-5 h-5 bg-orange-100 relative box-border p-0.5 text-base border-2 border-solid border-gray-500 border-t-white border-r-white border-b-gray-500 leading-6",
  inactive:
    "flex items-center justify-around mr-2 w-4 h-4 relative box-border p-0.5 text-base border-2 border-solid border-gray-500 border-t-white border-r-white border-b-gray-500 leading-6",
};
const ScrollIndicator = ({ activeIndex, sectionsNum }: IProps) => {
  return (
    <div className="fixed bottom-0 right-6 top-0 justify-center items-center flex-col gap-4 z-10 hidden md:flex">
      {Array.from({ length: sectionsNum }, (_, i) => (
        <div
          key={i}
          className={`w-2 h-2 mx-1 ${
            activeIndex === i ? styles.active : styles.inactive
          }`}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;

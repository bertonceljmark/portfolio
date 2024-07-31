import { RefObject } from "react";

//scrolls to the bottom of the ref
const scrollToBottom = (ref?: RefObject<HTMLElement>) => {
  if (ref?.current) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }
};

export default scrollToBottom;

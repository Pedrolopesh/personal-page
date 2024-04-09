import { useEffect, useState } from "react";
import { IPropsHeader } from "./headerOptions";

const useHeaderOptions = ({ props }: IPropsHeader) => {
  const [showHeader, setShowHeader] = useState(props?.showHeaderProps ?? false);
  const [alreadyTriggered, setAlreadyTriggered] = useState(false);

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    if (window.screen.width < 700) {
      if (scrollPos >= 600) {
        setShowHeader(true);
        setAlreadyTriggered(true);
      }
    } else if (window.screen.width > 700 && window.screen.width < 1200) {
      if (scrollPos >= 400) {
        setShowHeader(true);
        setAlreadyTriggered(true);
      }
    } else {
      if (scrollPos >= 730) {
        setShowHeader(true);
        setAlreadyTriggered(true);
      }
    }

    if (!scrollPos && props?.hideOnScrollTop && props?.startHidenHeader) {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    const handleScrollWithRAF = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollWithRAF);

    return () => {
      window.removeEventListener("scroll", handleScrollWithRAF);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    showHeader,
    alreadyTriggered,
  };
};

export default useHeaderOptions;

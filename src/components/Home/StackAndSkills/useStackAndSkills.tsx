import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";
import { stacksAndSkills } from "../../../utils/stacks";

const useStackAndSkills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showStacksQuantity, setShowStacksQuantity] = useState(7);
  const router = useRouter();

  const redirectToStackPage = () => {
    router.push("/Stacks");
  };

  useEffect(() => {
    if (window) {
      const windowWidth = window.innerWidth;

      if (windowWidth < 800) {
        setShowStacksQuantity(7);
      } else {
        setShowStacksQuantity(14);
      }
    }
  }, []);

  const internStacksAndSkills = stacksAndSkills({ iconSize: 40 });

  return {
    setIsHovered,
    isHovered,
    showStacksQuantity,
    redirectToStackPage,
    internStacksAndSkills,
  };
};

export default useStackAndSkills;

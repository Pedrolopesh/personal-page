import { stacksAndSkills } from "../../../utils/stacks";

const useStacksAndSkills = () => {
  const internStacksAndSkills = stacksAndSkills({ iconSize: 40 });

  return {
    internStacksAndSkills,
  };
};

export default useStacksAndSkills;

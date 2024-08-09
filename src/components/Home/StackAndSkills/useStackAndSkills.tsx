import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaJava,
  FaSass,
  FaCss3Alt,
  FaAndroid,
  FaDocker,
} from "react-icons/fa";
import { GrGraphQl, GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiCypress,
  SiGithubactions,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiSelenium,
  SiSonarcloud,
  SiSpring,
  SiStyledcomponents,
  SiTypescript,
  SiVtex,
  SiVuedotjs,
  SiWebpack,
} from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { useState } from "react";

const useStackAndSkills = () => {
  const [isHovered, setIsHovered] = useState(false);

  const iconSize = 60;

  const stacksAndSkills = [
    {
      name: "React",
      icon: <FaReact size={iconSize} color="#fff" />,
      bgColor: "#00D8FF",
    },
    {
      name: "Node JS",
      icon: <FaNodeJs size={iconSize} color="#fff" />,
      bgColor: "#669C4F",
    },
    {
      name: "MySQL",
      icon: <GrMysql size={iconSize} color="#fff" />,
      bgColor: "#004E63",
    },
    {
      name: "Mongo DB",
      icon: <SiMongodb size={iconSize} color="#fff" />,
      bgColor: "#499D4A",
    },
    {
      name: "Vue JS",
      icon: <SiVuedotjs size={iconSize} color="#fff" />,
      bgColor: "#41B883",
    },
    {
      name: "Angular JS",
      icon: <FaAngular size={iconSize} color="#fff" />,
      bgColor: "#C3002F",
    },
    {
      name: "Docker",
      icon: <FaDocker size={iconSize} color="#fff" />,
      bgColor: "#2496ED",
    },
    {
      name: "VTEX",
      icon: <SiVtex size={iconSize} color="#fff" />,
      bgColor: "#EC4E6E",
    },
    {
      name: "SonarCloud",
      icon: <SiSonarcloud size={iconSize} color="#fff" />,
      bgColor: "#F3702A",
    },
    {
      name: "Nest JS",
      icon: <SiNestjs size={iconSize} color="#fff" />,
      bgColor: "#E0234E",
    },
    {
      name: "Android",
      icon: <FaAndroid size={iconSize} color="#fff" />,
      bgColor: "#34A853",
    },
    {
      name: "Spring Boot",
      icon: <SiSpring size={iconSize} color="#fff" />,
      bgColor: "#79AB4D",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={iconSize} color="#fff" />,
      bgColor: "#1572B6",
    },
    {
      name: "GraphQL",
      icon: <GrGraphQl size={iconSize} color="#fff" />,
      bgColor: "#E535AB",
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript size={iconSize} color="#fff" />,
      bgColor: "#D8C01C",
    },
    {
      name: "Github Actions",
      icon: <SiGithubactions size={iconSize} color="#fff" />,
      bgColor: "#272727",
    },
    {
      name: "Firebase",
      icon: <RiFirebaseFill size={iconSize} color="#fff" />,
      bgColor: "#FFA000",
    },
    {
      name: "Cypress",
      icon: <SiCypress size={iconSize} color="#fff" />,
      bgColor: "#69D99B",
    },
    {
      name: "Jest",
      icon: <SiJest size={iconSize} color="#fff" />,
      bgColor: "#99425B",
    },
    {
      name: "Next JS",
      icon: <SiNextdotjs size={iconSize} color="#fff" />,
      bgColor: "#272727",
    },
    {
      name: "Java",
      icon: <FaJava size={iconSize} color="#fff" />,
      bgColor: "#5382A1",
    },
    {
      name: "Selenium",
      icon: <SiSelenium size={iconSize} color="#fff" />,
      bgColor: "#2CB134",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={iconSize} color="#fff" />,
      bgColor: "#007ACC",
    },
    {
      name: "Prisma",
      icon: <SiPrisma size={iconSize} color="#fff" />,
      bgColor: "#1B3B52",
    },
    {
      name: "Redux",
      icon: <SiRedux size={iconSize} color="#fff" />,
      bgColor: "#764ABC",
    },
    {
      name: "SASS",
      icon: <FaSass size={iconSize} color="#fff" />,
      bgColor: "#CD6799",
    },
    {
      name: "Material UI",
      icon: <FaReact size={iconSize} color="#fff" />,
      bgColor: "#1C7FB6",
    },
    {
      name: "styled",
      icon: <SiStyledcomponents size={iconSize} color="#fff" />,
      bgColor: "#CF5FA6",
    },
    {
      name: "Web Pack",
      icon: <SiWebpack size={iconSize} color="#fff" />,
      bgColor: "#1C78C0",
    },
  ];

  return {
    stacksAndSkills,
    setIsHovered,
    isHovered,
  };
};

export default useStackAndSkills;

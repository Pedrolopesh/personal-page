import React, { useEffect } from "react";
import { useRouter } from "next/router";
import HeadPages from "../components/HeadPages";
import ChangeLang from "../components/ChangeLang";
import Footer from "../components/Home/Footer";
import HeaderOptions from "../components/HeaderOptions";
import StackAndSkills from "../components/Stacks/StacksAndSkills";
import BannerStacks from "../components/Stacks/BannerStacks";

const DesignPage = () => {
  const router = useRouter();
  const handlePath = (currentPath: string) => {
    localStorage.setItem("sourceRoute", currentPath);
  };

  const setbodyBg = () => {
    const body = document.querySelector("body");
    body.classList.add("darken_blue_bg");
  };

  useEffect(() => {
    setbodyBg();
    handlePath(router.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HeadPages />
      <HeaderOptions
        props={{
          startHidenHeader: true,
          hideOnScrollTop: true,
        }}
      />
      <BannerStacks />
      <ChangeLang />
      <StackAndSkills />
      <Footer thanksForVisit={false} />
    </div>
  );
};

export default DesignPage;

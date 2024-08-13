import style from "./style.module.css";
import CustomDivider from "../../CustomDivider";
const BannerStacks = () => {
  return (
    <div>
      <div className={style.ContainerBannerStacks}>
        <img src="/img/bg-stacks.png" alt="banner stack" />
        <div className={style.titleBannerStack}>
          <p>Tecnologias e abordagens</p>
        </div>
      </div>
      <CustomDivider />
    </div>
  );
};

export default BannerStacks;

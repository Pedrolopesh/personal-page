import style from "./style.module.css";
import CustomDivider from "../../CustomDivider";
import { t } from "i18next";
const BannerStacks = () => {
  return (
    <div>
      <div className={style.ContainerBannerStacks}>
        <div className={style.titleBannerStack}>
          <p>{t("stacks_page.title_banner")}</p>
        </div>
      </div>
      <CustomDivider />
    </div>
  );
};

export default BannerStacks;

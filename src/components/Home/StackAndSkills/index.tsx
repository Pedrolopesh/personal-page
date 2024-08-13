import useStackAndSkills from "./useStackAndSkills";
import style from "./style.module.css";
import { t } from "i18next";

const StackAndSkills = () => {
  const {
    internStacksAndSkills,
    setIsHovered,
    isHovered,
    showStacksQuantity,
    redirectToStackPage,
  } = useStackAndSkills();

  return (
    <div className={style.ContainerSectionStacks}>
      <div className={style.containerStackTexts}>
        <h2>{t("home_stacks_skills.title")}</h2>
        <p>{t("home_stacks_skills.description")}</p>
      </div>

      <div className={style.ContainerStacksAndSkills}>
        {internStacksAndSkills.map((stack, index) => {
          if (index < showStacksQuantity) {
            return (
              <div
                className={style.BlockStack}
                key={index}
                style={{
                  backgroundColor: `${stack.bgColor}`,
                  boxShadow: isHovered
                    ? `box-shadow: -5px 5px 10px #ffffff;`
                    : ``,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {stack.icon}
                <h2>{stack.name}</h2>
              </div>
            );
          }
        })}
      </div>
      <div className={style.hidingStacks}>
        <button onClick={redirectToStackPage}>ver mais</button>
      </div>
    </div>
  );
};

export default StackAndSkills;

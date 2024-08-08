import { useCallback, useEffect, useMemo } from "react";
import style from "./style.module.css";
import useProjectWorks from "./useProjectWorks";
import { t } from "i18next";

export type CardWorkProps = {
  card: {
    image: string;
    title: string;
    description: string;
    url: string;
  };
  index: number;
};

const ProjectsAndWorks = () => {
  const {
    projectAndWorks,
    redirectTo,
    selectedSection,
    setSelectedSection,
    setShowAnimation,
    showAnimation,
    setTotalProjectOptions,
    totalProjectOptions,
  } = useProjectWorks();

  const selectedSectionIndex = projectAndWorks.findIndex(
    (section) => section.name === selectedSection.name
  );

  useEffect(() => {
    let position =
      totalProjectOptions === projectAndWorks.length
        ? 1
        : totalProjectOptions + 1;
    setTimeout(() => {
      setSelectedSection({
        name: projectAndWorks[position - 1].name,
        position,
      });
      setTotalProjectOptions(position);
    }, 6000);
  }, [totalProjectOptions]);

  return (
    <div className={style.containerWorkAndProjects}>
      <h1>{t("project_clients")}</h1>
      <div className={style.containerWorkLinks}>
        {projectAndWorks.map((section, index) => (
          <div key={index}>
            <button
              onClick={() =>
                setSelectedSection({
                  name: section.name,
                  position: index + 1,
                })
              }
            >
              <p>{section.name}</p>
            </button>
            <span
              className={`${
                selectedSectionIndex === index
                  ? style.showSelectionLink
                  : style.hideSelectionLink
              } ${style.selectionLink}`}
            ></span>
          </div>
        ))}
      </div>
      <div className={style.containerCards}>
        <>
          {projectAndWorks[selectedSectionIndex]?.projects.map(
            (card, index) => {
              return (
                <div
                  key={index}
                  className={`${style.ContainerProjectCards}`}
                  onMouseOver={() => {
                    setShowAnimation(index);
                  }}
                  onMouseLeave={() => {
                    setShowAnimation(-1);
                  }}
                >
                  <div
                    className={style.CardItemProjects}
                    // onClick={() => { setShowAnimation(index) }}
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    onClick={() => {
                      redirectTo(card.url);
                    }}
                    key={index}
                  >
                    <img
                      className={
                        showAnimation === index
                          ? style.showImageEffect
                          : style.hideImageEffect
                      }
                      src={card.image}
                      alt=""
                    />

                    <div
                      className={
                        showAnimation === index
                          ? style.containerShowDescriptions
                          : style.containerHideDescriptions
                      }
                    >
                      <div
                        className={
                          showAnimation === index
                            ? style.showTextContainer
                            : style.hideTextContainer
                        }
                      >
                        <div>
                          <h3
                            className={
                              showAnimation === index
                                ? style.showTitle
                                : style.hideTitle
                            }
                          >
                            {t(card.title)}
                          </h3>

                          <p
                            className={
                              showAnimation === index
                                ? style.showDescription
                                : style.hideDescription
                            }
                          >
                            {t(card.description)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <h3>{card.title}</h3> */}
                    {/* <p>{card.description}</p> */}
                  </div>
                </div>
              );
            }
          )}
        </>
      </div>
    </div>
  );
};

export default ProjectsAndWorks;

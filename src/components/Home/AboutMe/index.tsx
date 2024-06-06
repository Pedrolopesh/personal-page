import { useTranslation } from "react-i18next";
import style from "./style.module.css";
import { useRouter } from "next/router";

const AbaoutMe = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const companys = [
    { img: "/img/company_1.png" },
    { img: "/img/company_2.png" },
    { img: "/img/company_3.png" },
    { img: "/img/company_4.png" },
    { img: "/img/company_5.png" },
  ];

  const redirectToProjects = () => {
    router.push("/Project");
  };
  const redirectToEmail = () => {
    const emailElement = document.getElementById("emailMe");
    if (emailElement) {
      emailElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.containerAboutMeBg}>
      <div className={style.containerAboutMe}>
        <div className={style.containerCompanys}>
          {companys.map((item, index) => {
            return (
              <div key={index}>
                <img
                  className={style.imageCompany}
                  src={item.img}
                  alt="Companys"
                />
              </div>
            );
          })}
        </div>
        <div className={style.containerTextComanys}>
          <p>Copyright ©️ todos os direitos reservados a todas as marcas</p>
          <p>Parcerias anteriores e empresas que passei</p>
        </div>

        <div className={style.containerFirstTextAboutMe}>
          <div>
            <img
              src="./img/logo-gradient-blue.png"
              alt="pedrolopes logo"
              className={style.aboutMeIcon}
            />
          </div>

          <div className={style.containerRightAboutMe}>
            <div>
              <h3>{t("home_about_me.about_me_title")}</h3>
              <p>{t("home_about_me.bout_me_description")}</p>
            </div>
          </div>
        </div>

        <div className={style.containerLeftAboutMe}>
          <div className={style.containerTextLeftAboutMe}>
            <h3>{t("home_about_me.contact_me_title")}</h3>
            <p>{t("home_about_me.contact_me_text")}</p>
          </div>

          <div className={style.containerAboutMeActions}>
            <div className={style.buttonActions}>
              <button onClick={redirectToEmail}>
                {t("button_about_me_hire")}
              </button>
              <button onClick={redirectToProjects}>
                {t("button_about_me_know_more")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbaoutMe;

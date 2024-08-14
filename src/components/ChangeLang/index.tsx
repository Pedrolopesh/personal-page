import { IoLanguageOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import i18next from "i18next";
import Style from "./style.module.css";

const ChangeLang = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);

  const changeLangFunc = (newLang: string) => {
    i18next.changeLanguage(newLang);
    setVisibleDropdown(!visibleDropdown);
    const htmlSelection = document.querySelector("html");
    htmlSelection.lang = newLang === "pt" ? "pt-br" : "en";
  };

  useEffect(() => {
    const language = navigator.language;
    if (language) {
      changeLangFunc(language === "pt-BR" ? "pt" : "en");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button
        className={`${Style.ButtonChangeLang}`}
        onClick={() => {
          setVisibleDropdown(!visibleDropdown);
        }}
      >
        <IoLanguageOutline />
      </button>
      <div
        className={`${
          visibleDropdown ? Style.hideDropdown : Style.showDropdown
        } ${Style.DropDownContainer}`}
      >
        <span
          className={Style.DropDownOption}
          onClick={() => {
            changeLangFunc("pt");
          }}
          style={{ display: "block" }}
        >
          Português
        </span>
        <span
          className={Style.DropDownOption}
          onClick={() => {
            changeLangFunc("en");
          }}
          style={{ display: "block" }}
        >
          Inglês
        </span>
      </div>
    </div>
  );
};

export default ChangeLang;

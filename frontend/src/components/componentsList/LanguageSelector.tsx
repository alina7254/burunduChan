import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.scss";
import { cdnBaseUrl, environment, projectToken } from "../../i18n";

interface FlagIconProps {
  countryCode: string;
}

function FlagIcon({ countryCode = "" }: FlagIconProps) {
  if (countryCode === "en") {
    countryCode = "gb";
  }

  return (
    <span
      className={`inline-block mr-2 fi fi-${countryCode} ${styles.fiCircle}`}
    />
  );
}

interface Language {
  key: string;
  name: string;
}

const LANGUAGE_SELECTOR_ID = "language-selector";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = languages.find(
    (language) => language.key === i18n.language
  );

  const handleLanguageChange = async (language: Language) => {
    await i18n.changeLanguage(language.key);
    setIsOpen(false);
  };

  useEffect(() => {
    const setupLanguages = async () => {
      try {
        const appLanguages = await fetch(
          `${cdnBaseUrl}/${projectToken}/${environment}/_languages`
        ).then((response) => response.json());
        console.log("Loaded languages:", appLanguages);
        setLanguages(appLanguages);
      } catch (error) {
        console.error("Error loading languages:", error);
      }
    };
    setupLanguages();
  }, []);

  useEffect(() => {
    const handleWindowClick = (event: any) => {
      const target = event.target.closest("button");
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
      console.log("Dropdown closed");
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  if (!selectedLanguage) {
    console.log("Selected language not found");
    return null;
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("Dropdown toggled", !isOpen);
        }}
        type="button"
        className="inline-flex items-center justify-center w-full rounded-md border border-white shadow-sm px-4 py-2 bg-gray-200 text-sm font-medium text-gray-700"
        id={LANGUAGE_SELECTOR_ID}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FlagIcon countryCode={selectedLanguage.key} />
        {selectedLanguage.name}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.key}
                onClick={() => handleLanguageChange(language)}
                className={`block px-4 py-2 text-sm text-left w-full ${
                  selectedLanguage.key === language.key
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700"
                } hover:bg-gray-100`}
                role="menuitem"
              >
                <FlagIcon countryCode={language.key} />
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

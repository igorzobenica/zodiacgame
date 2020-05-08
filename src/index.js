import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/zipher.ttf";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import { getLanguageFromPath } from "./helpers/getLanguageFromPath";
import i18next from "i18next";
import Cookies from 'js-cookie';
import common_es from "./translations/es/common.json";
import common_es_mx from "./translations/es/mx/common.json";
import common_en from "./translations/en/common.json";
import common_nl from "./translations/nl/common.json";

const language = Cookies.get('language');

i18next.use(detector).init({
  interpolation: { escapeValue: false },
  fallbackLng: getLanguageFromPath() || language || 'en',
  lng: getLanguageFromPath() || language || "en",
  defaultNS: 'common',
  resources: {
    en: {
      common: common_en
    },
    es: {
      common: common_es
    },
    mx: {
      common: common_es_mx
    },
    nl: {
      common: common_nl
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

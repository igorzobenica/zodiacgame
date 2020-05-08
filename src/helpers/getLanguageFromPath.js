import { EN, ES, MX, NL } from "../constants";

export const getLanguageFromPath = () => {
  const path = window.location.pathname.split('/')[1];
  switch (path) {
    case EN:
    case ES:
    case MX:
    case NL:
      return path;
    default:
      return null;
  }
}

export const getLanguageFromPathId = () => {
  const path = getLanguageFromPath();
  switch (path) {
    case EN:
      return 1;
    case ES:
    case MX:
      return 7;
    default:
      return 1;
  }
}
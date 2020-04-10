export const getLanguageFromPath = () => {
  const path = window.location.pathname.split('/')[1];
  switch (path) {
    case 'en':
    case 'es':
      return path;
    default:
      return null;
  }
}

export const getLanguageFromPathId = () => {
  const path = getLanguageFromPath();
  switch (path) {
    case 'en':
      return 1;
    case 'es':
      return 7;
    default:
      return 1;
  }
}
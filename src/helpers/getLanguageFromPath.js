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
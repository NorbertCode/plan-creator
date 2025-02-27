import languageConfig from '../config/languageConfig';

const language = navigator.language.slice(0, 2);
const fallbackLanguage = "en";

export function getText(key) {
    if (languageConfig[language] === undefined) {
        return languageConfig[fallbackLanguage][key];
    }
    return languageConfig[language][key];
}
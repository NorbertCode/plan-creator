import languageConfig from '../config/languageConfig';

const language = typeof window !== "undefined" ? navigator.language.slice(0, 2) : undefined;
const fallbackLanguage = "en";

export function getText(key) {
    if (languageConfig[language] === undefined) {
        return languageConfig[fallbackLanguage][key];
    }
    return languageConfig[language][key];
}
import languageConfig from '../config/languageConfig';

const language = navigator.language.slice(0, 2);

export function getText(key) {
    return languageConfig[language][key];
}
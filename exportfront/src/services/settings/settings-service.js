export class SettingsService {

    static swapLanguage() {
        let lang = localStorage.getItem('language');
        if (lang) {
            if (lang == "en") {
                lang = "ru";
            }
            else {
                lang = "en";
            }
        }
        else {
            lang = "ru";
        }
        localStorage.setItem("language", lang);
        window.location.reload('');
    }

    static getLanguage() {
        let lang = localStorage.getItem('language');
        if (lang) {
            if (lang !== "en") {
                return "ru";
            }
            else {
                return "en";
            }
        }
        else {
            localStorage.setItem("language", "ru");
            return "ru";
        }
    }
}
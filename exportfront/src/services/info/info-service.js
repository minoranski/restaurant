import axios from "axios";
import { API_URL } from "../../utils/constants";

export class InfoService {
    static getEmployees() {
        return axios.get(`${API_URL}/info/employees/`);
    }

    static getRestaraunts() {
        return axios.get(`${API_URL}/info/restaraunts/`);
    }

    static getAds() {
        return axios.get(`${API_URL}/info/news/`);
    }
}
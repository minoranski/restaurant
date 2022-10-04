import axios from "axios";
import { API_URL } from "../../utils/constants";

export class MenuService {
    static getCategories() {
        return axios.get(`${API_URL}/menu/categories/`);
    }

    static getCategoryDishes(categoryId) {
        return axios.get(`${API_URL}/menu/categories/${categoryId}/dishes/`);
    }
}
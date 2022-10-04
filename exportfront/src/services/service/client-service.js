import axios from "axios";
import { API_URL } from "../../utils/constants";
import { AuthService } from "../auth/auth-service";


export class ClientService {
    static getReviews() {
        return axios.get(`${API_URL}/service/reviews`);
    }

    static sendReview(text, rating) {
        return axios.post(`${API_URL}/service/reviews`, {
            text: text,
            rating: rating
        }, {
            headers: AuthService.authHeader()
        });
    }

    static createOrder(dishes, time, client_address, client_phone) {
        return axios.post(`${API_URL}/service/order`,
            {
                dishes: dishes,
                time: time,
                client_address: client_address,
                client_phone: client_phone
              }, {
                headers: AuthService.authHeader()
            }
        );
    }
}
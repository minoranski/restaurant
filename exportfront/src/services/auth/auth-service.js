import axios from "axios";
import { API_URL } from "../../utils/constants";

// const headers = {
//     'Content-Type': 'application/json',
// }

export class AuthService {

    static login(username,password) {
        return axios.post(`${API_URL}/auth/token/login/`,
        {
            username: username,
            password: password
        });
    }

    static logout() {
        return axios.post(`${API_URL}/auth/token/logout/`,{},{
            headers: AuthService.authHeader()
        })
        .then(v=>{
           localStorage.removeItem("user-token"); 
        });
    };

    static register(username,password,email) {
        return axios.post(`${API_URL}/auth/users/`,
        {
            username: username,
            password: password,
            email: email
        });
    }

    static authToken() {
        return localStorage.getItem('user-token');
    }

    static authHeader() {
        const token = AuthService.authToken();
        return { "Authorization": `Token ${token?.replaceAll('"', '')}` };
    }

    static isAuthorized(){
        let token = AuthService.authToken();
        if (token == null) return false;
        return true;
    }
}
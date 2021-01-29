import config from '../config';
import TokenService from './token-service';

const learningApiService = {
    getLanguageHead(){
        return fetch(`${config.API_ENDPOINT}/language/head`, {
            method: 'GET',
            headers: {authorization: `Bearer ${TokenService.getAuthToken()}`}
        }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)): res.json())
    },
    makeGuess(guess){
        return fetch(`${config.API_ENDPOINT}/language/guess`, {
            method: 'POST',
            headers: {authorization: `Bearer ${TokenService.getAuthToken()}`},
            body: JSON.stringify({ guess })
        }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
    }
}

export default learningApiService;
import APIRequest from '../utils/config/axios.config';

export function getJock() {
    return APIRequest.get('https://api.chucknorris.io/jokes/random', {
        
    }); 
}
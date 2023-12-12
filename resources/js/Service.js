import axios from "axios";
export default class Service {
    _http = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        headers: {'X-Custom-Header': 'foobar'}
    });
    emitter;
    pathName = ''

    constructor(emitter) {

        this._http.interceptors.request.use((config) => {
            return config;
        }, (error) => {
            emitter.emit('error', error)
            console.error('Error during request:', error);
            return Promise.reject(error);
        });
        this._http.interceptors.response.use((response) => {
            if(response.status === 200){
                emitter.emit('success', response.data?.message)
            }
            return response;
        }, (error) => {
            if (emitter) {
                switch (error?.response?.status) {
                    case 422:
                        emitter.emit('warn', error?.response?.data?.message ?? error.message)
                        break;
                    default:
                        emitter.emit('error', error?.response?.data?.message ?? error.message)
                        break;
                }

            }
            console.error('Error during response:', error);
            return Promise.resolve(error);
        });
    }
}

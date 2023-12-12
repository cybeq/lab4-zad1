import Service from "@/Service.js";

export default class AuthService extends Service {
    constructor(emitter) {
        super(emitter);
        this.pathName = 'validate'
    }
    async validate(params){
        return this._http.post(`${this.pathName}`, params)
    }

}

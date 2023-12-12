import Service from "@/Service.js";

export default class GameService extends Service {
    constructor(emitter) {
        super(emitter);
        this.pathName = 'shoot'
    }
    async shoot(params){
        return this._http.post(`${this.pathName}`, params)
    }

}

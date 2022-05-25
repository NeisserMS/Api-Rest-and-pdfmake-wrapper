import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DigimonService{

    private API_SERVER = "https://digimon-api.vercel.app/api/digimon";

    constructor(public htpp: HttpClient){}

    public getDigimones():Observable<any>
    {
        return this.htpp.get(this.API_SERVER);
    }

}
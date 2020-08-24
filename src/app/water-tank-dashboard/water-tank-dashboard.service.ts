import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WaterTank } from './models/water-tank.interface'

@Injectable()
export class WaterTankDashboardService {

    TANKS_API: string = '/waterTanks'

    constructor (private http : HttpClient) {
    }

    getTanks() : Observable<WaterTank[]> {
        return this.http.get<WaterTank[]>(this.TANKS_API)
    }

    updateTank(tank: WaterTank) : Observable<WaterTank> {
        return this.http.put<WaterTank>(`${this.TANKS_API}/${tank.id}`, tank);
    }

    getTank(id: number) : Observable<WaterTank> {
        return this.http.get<WaterTank>(`${this.TANKS_API}/${id}`);
    }    
}
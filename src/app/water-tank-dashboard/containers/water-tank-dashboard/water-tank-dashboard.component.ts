import { Component } from '@angular/core'
import { WaterTank } from '../../models/water-tank.interface'

@Component({
    selector:'tank-dash',
    templateUrl: './water-tank-dashboard.component.html',
    styleUrls: ['water-tank-dashboard.component.scss']
})
export class WaterTankDashboard {

    tanks: WaterTank[] = [
        {
            name: 'Tank 1',
            id: 1,
            diameter: 3.3,
            height: 3.1,
            percentage: 80,
            available: 23020
        },
        {
            name: 'Tank 2',
            id: 2,
            diameter: 3.3,
            height: 3.1,
            percentage: 33,
            available: 7490
        }
    ];

    onEdit(event: any) : void {
        console.log(event);
    }
}

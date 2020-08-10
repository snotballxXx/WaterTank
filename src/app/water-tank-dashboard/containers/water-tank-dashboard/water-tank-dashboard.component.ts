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
            level: 80,
            capacity: 22000
        },
        {
            name: 'Tank 2',
            id: 2,
            level: 70,
            capacity: 22000
        }
    ];

    onEdit(event: any) : void {
        console.log(event);
    }
}

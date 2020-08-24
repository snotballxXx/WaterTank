import { Component, OnInit } from '@angular/core'
import { WaterTank } from '../../models/water-tank.interface'
import { WaterTankDashboardService } from '../../water-tank-dashboard.service'

@Component({
    selector:'tank-dash',
    templateUrl: './water-tank-dashboard.component.html',
    styleUrls: ['water-tank-dashboard.component.scss']
})
export class WaterTankDashboard implements OnInit {

    tanks: WaterTank[];

    constructor(private waterTankDashboardService : WaterTankDashboardService) {
    }

    ngOnInit() {
        this.waterTankDashboardService.getTanks()
            .subscribe((data: WaterTank[]) => {
                this.tanks = data;
            });
            
    }

    onEdit(event: WaterTank) : void {
        console.log(event);
        this.waterTankDashboardService.updateTank(event)
            .subscribe();
    }
}

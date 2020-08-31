import { Component, OnInit, Output } from "@angular/core";
import { WaterTankDashboardService } from '../../water-tank-dashboard.service'
import { WaterTank } from '../../models/water-tank.interface';


@Component({
    selector: 'tank-viewer',
    styleUrls: ['./water-tank-viewer.component.scss'],
    templateUrl: './water-tank-viewer.component.html'
})
export class WaterTankViewer implements OnInit {

    @Output()
    waterTank: WaterTank;

    constructor(private waterTankService: WaterTankDashboardService) {
    }

    ngOnInit() {
        this.waterTankService.getTank(1)
        .subscribe((data: WaterTank) => {
            this.waterTank = data;
        });
    }

    onSubmit(tank: WaterTank) {
        this.waterTankService.updateTank(tank)
        .subscribe((data: WaterTank) => {
            this.waterTank = Object.assign(this.waterTank, data);
            console.log('WaterTank', this.waterTank);
        });
    }
}
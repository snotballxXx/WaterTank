import { Component, Input } from '@angular/core'
import { WaterTank } from '../../models/water-tank.interface'


@Component({
    selector:'water-tank-form',
    styleUrls: ['./water-tank-form.component.scss'],
    templateUrl: './water-tank-form.component.html'
    
})
export class WaterTankForm {
    @Input()
    detail: WaterTank;


}
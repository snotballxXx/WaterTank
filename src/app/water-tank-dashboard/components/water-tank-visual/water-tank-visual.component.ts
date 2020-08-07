import { Component, Input } from '@angular/core'
import { WaterTank } from '../../models/water-tank.interface'

@Component({
    selector: 'tank-ui',
    templateUrl: './water-tank-visual.component.html',
    styleUrls: ['./water-tank-visual.component.scss']
})
export class WaterTankVisual {
    @Input()
    tank: WaterTank;
}
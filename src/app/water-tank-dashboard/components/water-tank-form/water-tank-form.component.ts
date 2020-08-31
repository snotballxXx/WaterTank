import { Component, Input, Output, EventEmitter } from '@angular/core'
import { WaterTank } from '../../models/water-tank.interface'


@Component({
    selector:'water-tank-form',
    styleUrls: ['./water-tank-form.component.scss'],
    templateUrl: './water-tank-form.component.html'
    
})
export class WaterTankForm {
    @Input()
    detail: WaterTank;

    @Output()
    onSubmit: EventEmitter<WaterTank> = new EventEmitter<WaterTank>();

    formSubmitted(tank: WaterTank, valid: boolean) {
        if (valid) {
            this.onSubmit.emit(tank);
        }
    }
}
import { Component, Input } from '@angular/core'
import { WaterTank } from '../../models/water-tank.interface'

@Component({
    selector: 'total-water',
    template: 
       `<div>
            Total Available Water: {{ total() }} litres
        </div>`
})
export class TotalAvailableWater {
    @Input()
    tanks: WaterTank[];

    total() : number {
        let total = 0;
        for (let i = 0; i < this.tanks.length;i++)
            total += this.tanks[i].available;
        return total;
    }
}
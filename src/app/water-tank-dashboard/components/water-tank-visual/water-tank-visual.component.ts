import { Component, Input, Output, EventEmitter } from '@angular/core'
import { WaterTank } from '../../models/water-tank.interface'


@Component({
    selector: 'tank-ui',
    templateUrl: './water-tank-visual.component.html',
    styleUrls: ['./water-tank-visual.component.scss']
})
export class WaterTankVisual {
    @Input()
    tank: WaterTank;

    @Output()
    edit: EventEmitter<any> = new EventEmitter<any>();

    editing: boolean = false;

    onToggleEdit() : void {
        this.editing = !this.editing;

        if (!this.editing) {
            this.edit.emit(this.tank.name);
        }
    }

    onNameChange(value: string) : void {
        this.tank.name = value;
    }
}
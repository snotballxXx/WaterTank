import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { WaterTank } from '../../models/water-tank.interface'


@Component({
    selector: 'tank-ui',
    templateUrl: './water-tank-visual.component.html',
    styleUrls: ['./water-tank-visual.component.scss']
})
export class WaterTankVisual implements OnInit {
    @Input()
    tank: WaterTank;

    @Output()
    edit: EventEmitter<any> = new EventEmitter<any>();

    editing: boolean = false;

    ngOnInit() {
    }

    onToggleEdit() : void {
        this.editing = !this.editing;

        if (!this.editing) {
            this.edit.emit(this.tank);
        }
    }

    onNameChange(value: string) : void {
        this.tank.name = value;
    }

    onDiameterChange(value: string) : void {
        this.tank.diameter = parseFloat(value);
    }

    onHeightChange(value: string) : void {
        this.tank.height = parseFloat(value);
    }
}
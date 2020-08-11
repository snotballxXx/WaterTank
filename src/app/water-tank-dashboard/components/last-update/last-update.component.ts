import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'last-update',
    template: `<div>
        Last Update: {{ time | date: 'HH:mm.ss dd MMMM y' }}
    </div>` 
})
export class LastUpdate implements OnInit {

    time: number;

    ngOnInit() {
        this.time = Date.now();
    }
}
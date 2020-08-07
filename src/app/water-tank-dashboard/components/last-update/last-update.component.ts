import { Component } from '@angular/core'

@Component({
    selector: 'last-update',
    template: `<div>
        Last Update: {{ lastUpdate() | date: 'HH:mm.ss dd MMMM y' }}
    </div>` 
})
export class LastUpdate {

    lastUpdate() : Number {
        return Date.now();
    }
}
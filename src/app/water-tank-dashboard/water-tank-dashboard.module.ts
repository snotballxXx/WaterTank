import { NgModule } from '@angular/core'
import { CommonModule } from  '@angular/common'

import { WaterTankDashboard } from './containers/water-tank-dashboard/water-tank-dashboard.component'
import { WaterTankVisual } from './components/water-tank-visual/water-tank-visual.component'
import { LastUpdate } from './components/last-update/last-update.component'
import { TotalAvailableWater } from './components/total-available/total-available.component'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        WaterTankDashboard
    ],
    declarations: [
        WaterTankDashboard,
        WaterTankVisual,
        LastUpdate,
        TotalAvailableWater
    ]
})
export class WaterTankDashboardModule{

}
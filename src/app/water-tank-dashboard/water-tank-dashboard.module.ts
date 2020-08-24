import { NgModule } from '@angular/core'
import { CommonModule } from  '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { WaterTankDashboard } from './containers/water-tank-dashboard/water-tank-dashboard.component'
import { WaterTankVisual } from './components/water-tank-visual/water-tank-visual.component'
import { LastUpdate } from './components/last-update/last-update.component'
import { TotalAvailableWater } from './components/total-available/total-available.component'
import { WaterTankDashboardService } from './water-tank-dashboard.service'
import { WaterTankViewer } from './containers/water-tank-viewer/water-tank-viewer.component'
import { WaterTankForm } from './components/water-tank-form/water-tank-form.component'
import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        WaterTankDashboard, 
        WaterTankViewer
    ],
    declarations: [
        WaterTankDashboard,
        WaterTankViewer,
        WaterTankVisual,
        LastUpdate,
        TotalAvailableWater,
        WaterTankForm
    ],
    providers: [
        WaterTankDashboardService
    ]
})
export class WaterTankDashboardModule{

}
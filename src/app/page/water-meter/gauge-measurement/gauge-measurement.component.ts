import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManagerService } from '@availa/agube-rest-api';
import { DetailComponent } from '../detail/detail.component';
import { WaterMeterPersistantService } from '../water-meter-persistant.service';
import { WaterMeterManager } from '../water-meter.manager';

@Component({
    selector: 'app-gauge-measurement',
    templateUrl: './gauge-measurement.component.html',
    styleUrls: ['./gauge-measurement.component.scss'],
})
export class GaugeMeasurementComponent extends DetailComponent implements OnInit {
    public maxDailyConsumption: number | undefined;

    constructor(
        protected override svcWaterMeterManager: WaterMeterManager,
        public override dialog: MatDialog,
        protected override svcPersistance: WaterMeterPersistantService,
        protected svcManager: ManagerService,
    ) {
        super(svcWaterMeterManager, dialog, svcPersistance);
    }

    override ngOnInit(): void {
        this.svcManager
        .getManagerConfiguration()
        .subscribe((response) => (this.maxDailyConsumption = +response.max_daily_consumption));
        this.svcPersistance.get().subscribe((res) => {
            super.ngOnInit();
            super.waterMeterId = res?.id;
        });
    }
}

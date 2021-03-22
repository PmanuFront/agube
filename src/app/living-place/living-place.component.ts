import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface LivingPlace {
  id: string;
  address: string;
  water_meter: string;
  resident_name: string;
  phone: string;
}

@Component({
  selector: 'app-living-place',
  templateUrl: './living-place.component.html',
  styleUrls: ['./living-place.component.scss'],
})
export class LivingPlaceComponent implements OnInit {
  public livingPlace: LivingPlace;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  public selectItem(livingPlace: LivingPlace): void {
    this.livingPlace = livingPlace;
  }

  public goToControlPanel(): void {
    this.router.navigate(['/control-panel']);
  }
}

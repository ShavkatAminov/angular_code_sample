import {Component, Input} from '@angular/core';

export interface IMapMiniCard {
  label: string,
  value: string,
}

@Component({
  selector: 'map-mini-card',
  templateUrl: './map.mini.card.component.html',
  styleUrls: ['./map.mini.card.component.css']
})
export class MapMiniCardComponent {
  @Input()  mapMiniCard:IMapMiniCard = {
    label: "",
    value: "",
  }
}

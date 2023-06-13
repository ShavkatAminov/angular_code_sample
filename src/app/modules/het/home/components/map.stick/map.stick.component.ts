import {Component, Input} from '@angular/core';

@Component({
  selector: 'map-stick',
  templateUrl: './map.stick.component.html',
  styleUrls: ['./map.stick.component.css']
})
export class MapStickComponent {
  @Input() label:string = ""
  @Input() value:string = ""
  @Input() miniStick:boolean = false
}

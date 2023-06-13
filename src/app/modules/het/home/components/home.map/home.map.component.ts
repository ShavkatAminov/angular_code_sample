import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
// @ts-ignore
import uGeo from '@shared/helpers/utils/uz-geo.json'

@Component({
    selector: 'app-home.map',
    templateUrl: './home.map.component.html',
    styleUrls: ['./home.map.component.scss']
})
export class HomeMapComponent implements AfterViewInit {


    private map;

    private async initMap(): Promise<void> {
        this.map = L.map('map', {
            fullscreenControl: {
                pseudoFullscreen: !0
            },
            attributionControl: false,
        }).fitBounds([[37, 55], [46, 74]]);
        this.map.setMaxBounds([[37, 55], [46, 74]])

        L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
            minZoom: 6,
            maxZoom: 19
        }).addTo(this.map);
        const imgOptions = {
            iconUrl: 'https://www2.deloitte.com/content/dam/Deloitte/au/Images/promo_images/au-er-lightening-icon-1x1.jpg',
            iconSize: [50, 50]
        }
        const customIcon = L.icon(imgOptions)

        const markerOptions = {
            title: "MyLocation",
            clickable: true,
            draggable: true,
            icon: customIcon
        }

        L.marker([41.299822, 69.251016], markerOptions)
            .bindPopup("My Marker")
            .addTo(this.map)
        L.marker([40.469863, 68.128648], markerOptions)
            .bindPopup("My Marker2")
            .on('click',
                (data) => {
                    this.consoleMarker("Marker2")
                    this.map.fitBounds(polyline.getBounds())
                }).addTo(this.map)

        this.map.on('zoomend', function (e) {
            console.log(e.target._zoom);
        })

        let latlngs = Array()

        // latlngs.push([41.299822, 69.251016])
        latlngs.push([40.469863, 68.128648])

        const polyline = L.polyline(latlngs, {color: 'red'})
            .addTo(this.map);


        const geoJson = uGeo
        L.geoJson(geoJson).addTo(this.map);
    }

    consoleMarker(name: string): void{
        console.log(name)
    }

    constructor() {
    }

    ngAfterViewInit() {
        this.initMap();
    }
}


"use strict";

const _KEY = 'PasteYourGoogleMapsApiKeyHere';

import {Loader} from "@googlemaps/js-api-loader";
import mapTheme from "./map-theme";

export default function initMap() {
    const loader = new Loader({
        apiKey: _KEY,
        version: "weekly",

    });
    const mapContainer = document.querySelector('#map');
    const coords = { lat: 19.0991137, lng: 72.8275482 };

    if (mapContainer) {
        loader.load().then(() => {
            const map = new google.maps.Map(mapContainer, {
                center: coords,
                zoom: 10,
                styles: [...mapTheme],
                disableDefaultUI: true,
            });
            const marker = new google.maps.Marker({
                position: coords,
                map: map,
                icon: './svg/marker.svg'
            });
        });
    }
}

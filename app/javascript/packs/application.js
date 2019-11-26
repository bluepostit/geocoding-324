import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import { initMapbox } from '../plugins/init_mapbox'
import { initAddressAutocomplete } from '../plugins/init_address_autocomplete'

initMapbox()
initAddressAutocomplete()

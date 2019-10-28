import { Anchor } from './anchor.interface';

export interface Location {
    id: string,
    type: 0,
    geometry: {
		"type": 0
		coordinates?: google.maps.LatLng
    },
    properties: LocationProperties
}

interface LocationProperties {
    aliases: string[],
    anchor: Anchor,
    building: string,
    buildingId: string,
    categories: Object,
    contact: Contact,
    description: string
    displayRule: any
    fields: any[]
    floor: string,
    floorName: string,
    imageURL?: any,
    locationType: string,
    mapElement: string,
    name: string,
    roomId: string,
    streetViewConfig?: StreetViewConfig,
    type: string,
    venue: string,
    venueId: string
}

interface Contact {
    email: string
    phone: number
    website: string
}

interface StreetViewConfig {
    panoramaId: string,
    povHeading: number
    povPitch: number
}
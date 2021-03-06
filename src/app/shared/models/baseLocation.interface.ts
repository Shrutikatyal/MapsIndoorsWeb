export interface BaseLocation {
    id: string,
    geometry: { coordinates: Array<number> },
    properties: { name: string, anchor?: { coordinates: Array<number> }, floor: string, subtitle?: string, floorName?: string, building?: string, venue?: string };
}

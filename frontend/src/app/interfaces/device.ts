
export interface Device {
    id: number,
    name: string,
    lastReadingValue:number,
    location: string,
    lastReadingDate: string,
    valveName: string,
    valveId: number,
    state: boolean
}
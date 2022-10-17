import { Entity } from '@loopback/repository';
export declare class Cita extends Entity {
    id_cita?: number;
    Hora: number;
    Fecha: Date;
    id_pac: number;
    [prop: string]: any;
    constructor(data?: Partial<Cita>);
}
export interface CitaRelations {
}
export declare type CitaWithRelations = Cita & CitaRelations;

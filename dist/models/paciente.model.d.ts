import { Entity } from '@loopback/repository';
export declare class Paciente extends Entity {
    id_pac?: number;
    Nombres: string;
    Apellidos: string;
    Telefono: string;
    Edad: number;
    Sexo: string;
    Alergia: string;
    [prop: string]: any;
    constructor(data?: Partial<Paciente>);
}
export interface PacienteRelations {
}
export declare type PacienteWithRelations = Paciente & PacienteRelations;

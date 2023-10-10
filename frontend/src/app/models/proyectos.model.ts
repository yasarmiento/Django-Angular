export interface ProyectosI {
    id? : number;
    proyecto : string;
    codigo : string;
    plazo : number;
    fechai : Date;
    fechaf : Date;
    convocatoriaid: any;
    roluniversidadid: any;
    operadorid: any;
    entidadfinanciadora: any;
    grupoinvestigacionid: any;
}

export class Convocatoria {
    id?: number;
    nombre?: string;
  }
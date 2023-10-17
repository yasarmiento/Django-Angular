export interface SeguimientosI {
    id? : number;
    descripciontarea : string;
    duracion : number;
    tarea_anterior : any;
    diasdependencia : number;
    tipodependenciaid : any;
    inicio : Date;
    estadoid : any;
    responsable : string;
    fechafin : Date;
    pasosid : any;
    proyectoid : any;
}
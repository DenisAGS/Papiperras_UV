export interface Producto {
    nombre: string;
    precio: number;
    cantidad: number;
    descripcion: string;
    marca: string;
    modelo: string;
    fotos: File[];
    terminosCondiciones: string;
    oferta?: {
        porcentaje: number;
        fechaInicio: Date;
        fechaFin: Date;
      };
}
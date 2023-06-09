export interface Oferta {
    porcentajeOferta: number;
    nuevoPrecio: number;
    cantidad: number;
    descripcion: string;
    marca: string;
    modelo: string;
    fotos: File[];
    terminosCondiciones: string;
}
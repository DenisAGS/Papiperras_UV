export interface Producto {
    id: string;
    nombre: string;
    precio: number;
    cantidad: number;
    descripcion: string;
    marca: string;
    modelo: string;
    fotos: string[];
    terminosCondiciones: string;
    precioFinal: number | null;
    precioDescuento?: number;
    seleccionado?: boolean; 
}
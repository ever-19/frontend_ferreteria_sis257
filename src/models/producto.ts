import type { Categoria } from "./categoria";

export interface Producto {
    id: number;
    idCategoria: number;
    codigo: string;
    descripcion: string;
    unidad: string;
    precio: number;
    existenciaProducto: number;
    urlImagen: string;
    categoria: Categoria;
  }
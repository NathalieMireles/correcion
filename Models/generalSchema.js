import { Schema } from 'mongoose';

// Esquema para estudiantes
export const EsquemaGeneral = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apepat: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  cupo: {
    type: Number,
    required: true,
  },
  profesor:{
    type: String,
    required: true,
  }


});

    



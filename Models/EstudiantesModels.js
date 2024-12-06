
import { EsquemaGeneral } from "./generalSchema.js";
import { model } from "mongoose";

export const estudiantesModel = new model ('estudiantes',EsquemaGeneral)


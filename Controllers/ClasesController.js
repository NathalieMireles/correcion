import { ClasesModels } from "../Models/ClasesModels"

ClasesModels.create({
    nombre: "Programación Avanzada",
    cupo: 20,
    profesor: "Profesor X",
    estudiantes: ["Estudiante 1", "Estudiante 2"] 
})

export const testClases = ()=>{
    console.log("Empleado")
}




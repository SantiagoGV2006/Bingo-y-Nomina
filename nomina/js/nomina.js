/**
 * Crear una nomina
 * autor: Diego De Jesus Arias Gonzalez
 * 9 de mayo de 2024
 */

let nomina = [];
let iteracion = [];
let multi = 0;
let valorDia;
let diasTrabajados;
let descuento;
let longitudArreglo;

nomina = [
    {id: 1, numeroDocumento: 1077723402, nombre: 'Diego De Jesus', apellido: 'Arias Gonzalez', edad: 17, valorDia: 50000, diasTrabajados: 25},
    {id: 2, numeroDocumento: 1061046594, nombre: 'Santiago', apellido: 'Gonzalez Vasquez', edad: 17, valorDia: 40000, diasTrabajados: 27},
    {id: 3, numeroDocumento: 1076503798, nombre: 'Juan Esteban', apellido: 'Huertas', edad: 17, valorDia: 175000, diasTrabajados: 20},
    {id: 4, numeroDocumento: 1029880743, nombre: 'Reyving Fabriani', apellidos: 'Ramirez Medina', edad: 17, valorDia: 42500, diasTrabajados: 30},    
    {id: 5, numeroDocumento: 1129844804, nombre: 'Brayan Stid', apellido: 'Cortes Lombana', edad: 16, valorDia: 120000, diasTrabajados: 15},
    {id: 6, numeroDocumento: 7777777777, nombre: 'Andres', apellido: 'Moreno Collazos', edad: 44, valorDia: 100000, diasTrabajados: 22},
    {id: 7, numeroDocumento: 3333333333, nombre: 'Daniel', apellido: 'Salazar', edad: 19, valorDia: 80000, diasTrabajados: 30},
    {id: 8, numeroDocumento: 5555555555, nombre: 'Merari', apellido: 'Urbano Quintero', edad: 65, valorDia: 43500, diasTrabajados: 27},
];
//Crear un registro

let pagoTotal = []
for(iteracion = 0; iteracion < 8; iteracion++){
    valorDia = nomina[iteracion].valorDia;
    diasTrabajados = nomina[iteracion].diasTrabajados;

    salarioPer = salario(valorDia, diasTrabajados);
    saludPer =  salud(valorDia, diasTrabajados);
    pensionPer = pension(valorDia, diasTrabajados);
    arlPer = arl(valorDia, diasTrabajados);
    pretencion = retencion(valorDia, diasTrabajados);
    psubTrans = subTrans(valorDia, diasTrabajados);
    pextra = extra(valorDia, diasTrabajados);
    descuento = deducible(valorDia, diasTrabajados);
    ptotal = totalPagar(valorDia, diasTrabajados)

    propiedades=[
    ['1 Id' ,nomina[iteracion].id],
    ['2 Identificacion' ,nomina[iteracion].numeroDocumento],
    ['3 Nombre' ,nomina[iteracion].nombre],
    ['4 Apellido' ,nomina[iteracion].apellido],
    ['5 Edad' ,nomina[iteracion].edad],
    ['6 Valordeldia' ,nomina[iteracion].valorDia], 
    ['7 Diastrabajado1s' ,nomina[iteracion].diasTrabajados],
    ['8 Salario' ,salarioPer],
    ['9 Subsidiodetransporte' ,psubTrans],
    ['10 Salud' ,saludPer],
    ['11 Pension' ,pensionPer],
    ['12 Arl:' ,arlPer],
    ['13 Retencion' ,pretencion],
    ['14 Extra' ,pextra],
    ['15 Descuento' ,descuento],
    ['16 TotalaPagar' ,ptotal]
]    
    pagoTotal.push(Object.fromEntries(propiedades)
)   
}


console.log(nomina);
console.log(pagoTotal)
function salario(avalorDia, adiasTrabajados){
    let valorDia = avalorDia;
    let diasTrabajados = adiasTrabajados;
    let resul = avalorDia * adiasTrabajados;

    return resul;
}

function salud(avalorDia, adiasTrabajados){
    let saludPer
    let salarioPer = salario (avalorDia, adiasTrabajados)

    saludPer = salarioPer * 0.12;
    return saludPer
}

function pension(avalorDia, adiasTrabajados){
    let pensionPer
    let salarioPer = salario (avalorDia, adiasTrabajados)

    pensionPer = salarioPer * 0.16;
    return pensionPer
}

function arl(avalorDia, adiasTrabajados){
    let arlPer
    let salarioPer = salario (avalorDia, adiasTrabajados)
    arlPer = salarioPer * 0.052;
    return arlPer
}

function subTrans(avalorDia, adiasTrabajados){
    let salarioPer = salario (avalorDia, adiasTrabajados);
    let psubTrans;
    let salarioMinimo = 1300000;

    if (salarioPer <= 2 * salarioMinimo){
        psubTrans = 114000;
    }
    else{
        psubTrans = 0;
    }
    return psubTrans;
}

function retencion(avalorDia, adiasTrabajados){
    let salarioPer = salario(avalorDia, adiasTrabajados);
    let pretencion;
    let salarioMinimo = 1300000;

    if (salarioPer >= 6 * salarioMinimo){
        pretencion = salarioPer * 0.04;
    } else if (salarioPer >= 4 * salarioMinimo){
        pretencion = salarioPer * 0.02;
    } else {
        pretencion = 0;
    }
    return pretencion;
}

function extra(avalorDia, adiasTrabajados) {
    const salarioPer = salario(avalorDia, adiasTrabajados);
    const salarioMinimo = 1300000;
    let pextra = 0;
  
    // Apply extra 6% if the person is over 40 years old
    if (nomina[iteracion].edad > 40) {
      pextra = salarioPer * 1.06;
    }
    
    if (nomina[iteracion].edad > 60) {
        pextra = salarioPer * 0.08;
      }
    
    return pextra;
  }
  

function deducible(avalorDia, adiasTrabajados){
    let descuento
    let saludPer=salud(avalorDia, adiasTrabajados)
    let pensionPer=pension(avalorDia, adiasTrabajados)
    let arlPer=arl(avalorDia, adiasTrabajados)
    let pretencion=retencion(avalorDia, adiasTrabajados)
    descuento= parseInt(saludPer)+parseInt(pensionPer)+parseInt(arlPer)+parseInt(pretencion)
    return descuento
}

function totalPagar(avalorDia, adiasTrabajados){
    let salarioPer = salario(avalorDia, adiasTrabajados);
    let psubTrans = subTrans(avalorDia, adiasTrabajados);
    let pextra = extra(avalorDia, adiasTrabajados);
    let descuento = deducible(avalorDia, adiasTrabajados);
    let ptotal = +parseInt(salarioPer) + +parseInt(psubTrans) + +parseInt(pextra) - descuento;
    return ptotal;
}
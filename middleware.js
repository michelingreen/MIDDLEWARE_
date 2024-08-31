var saludo = (req, res, next) => {
    console.log("Hola");
    next();    
};

var fecha = (req, res, next) => {
    let hoy = new Date();
    
    let dia = ("0" + hoy.getDate()).slice(-2);
    let mes = ("0" + (hoy.getMonth() + 1)).slice(-2);
    let anio = hoy.getFullYear();

    let horas = ("0" + hoy.getHours()).slice(-2);
    let minutos = ("0" + hoy.getMinutes()).slice(-2);
    let segundos = ("0" + hoy.getSeconds()).slice(-2);

    console.log(`${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`);
    next();    
};

module.exports = { saludo, fecha };

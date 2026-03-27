function devolverHora() {
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    return `${hora}:${minutos}:${segundos}`;
}



function devolverFechacompleta() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const hora = devolverHora();
    return `${dia}/${mes}/${año} ${hora}`;
}

export { devolverFechacompleta, devolverHora };
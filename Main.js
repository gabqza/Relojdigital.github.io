const getHora = () => {
    const fecha = new Date();
    const tiempo = {
        hora: fecha.getHours(),
        minuto: fecha.getMinutes(),
        segundo: fecha.getSeconds()
    };
    document.querySelector(".reloj").innerHTML = `${tiempo.hora}:${tiempo.minuto}:${tiempo.segundo}`;
}

setInterval(getHora, 1000);

function moda(lista) {
    const listaObj = {};

    lista.map(
        function(e) {
            if(listaObj[e]) {

                listaObj[e] += 1;
            } else {
    
                listaObj[e] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaObj).sort(
        function (eA, eB) {
            return eA[1] - eB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;
};
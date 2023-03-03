const containerDom = document.querySelector('.container');

const buttonDom = document.getElementById('playerForm')

const difficultDom = document.getElementById('difficulties')


buttonDom.addEventListener('click', function () {

    containerDom.innerHTML = "";

    let numeroMinimo = 1;

    let difficultChoise = difficultDom.value;

    if (difficultChoise == 'easy') {
        result =  100;
    } else if (difficultChoise == 'normal') {
        result = 81;
    } else if (difficultChoise == 'hard') {
        result = 49;
    }

    let numeroMassimo = result;

    generatoreDiQuadrati(numeroMinimo, numeroMassimo);
    
}
)








function generatoreDiQuadrati(min, max) {

    for (let i = min; i <= max; i++) {

        const squareGen = document.createElement('div');

        if (max == 100){
            squareGen.classList.add('square-easy');
        } else if (max == 81){
            squareGen.classList.add('square-normal');
        } else if (max == 49){
            squareGen.classList.add('square-hard');
        }

        squareGen.classList.add('square');


        squareGen.innerHTML += `${i}`;
        containerDom.append(squareGen);

    }

    return containerDom;
}







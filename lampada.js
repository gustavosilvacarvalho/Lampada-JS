const turnOn = document.getElementById ( 'turnOn' ); //dei nome á constante do mesmo que do html para ficar mais fácil de entender.
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


    

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1; // função para a lâmpada quebrada, fazendo com que ela não retorne também ao normal quando quebrada, apenas, reiniciando a página.
}


function lampOn () {
    if (!isLampBroken () ) {
        lamp.src = './img/ligada.jpg'; //3 após atribuido a função ao botão, foi associado a ele que trocasse a imagem da Lâmpada para ligada
        var audio = new Audio('./sound/ligada.mp3'); // não satisfeito, resolvi adcionar alguns efeitos sonoros
            audio.play();
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg'; //5 após atribuido a função ao botão, foi associado a ele que trocasse a imagem da Lâmpada para desligada
        var audio = new Audio('./sound/desligada.mp3');
        audio.play();
    }
}


function lampBroken() {
    if (!isLampBroken()) {
        lamp.src = './img/quebrada.jpg';  //após atribuir a imagem da lampada quebrada realizar a dunção que verifique que ela esteja quebrada para que não haja mais forma de interagir com ela.
        var audio = new Audio('./sound/quebrada.mp3'); 
        audio.play();
    }
}

turnOn.addEventListener ('click', lampOn);// 2 atribuindo ao botão ligar que ele espere o click para poder acender a lâmpada
turnOff.addEventListener ('click', lampOff)// 4 atribuindo ao botão desligar que ele espere o click para poder desligar a lâmpada
lamp.addEventListener ('mouseover', lampOn);// 6 atribuindo que quando o mouse passar por cima da Lâmpada ela ligue
lamp.addEventListener('mouseleave', lampOff);// 7 atribuindo que quando o mouse sair da Lâmpada ela desligue
lamp.addEventListener('dblclick', lampBroken);


// poderia ter chamado as funções dentro dos eventos, mas para ficar mais limpo, preferi assim

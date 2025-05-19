const botoes = document.querySelectorAll(".botao")
const textos = document.querySelectorAll(".aba-conteudo")
const contadores=document.querySelectorAll(".contador")

const tempoObjetivo01=new Date("2025-07-30T23:59")
const tempoObjetivo02=new Date("2025-05-15T23:59")
const tempoObjetivo03=new Date("2025-10-20T3:00")
const tempoObjetivo04=new Date("2025-12-22T20:00")

const tempos = [tempoObjetivo01, tempoObjetivo02, tempoObjetivo03, tempoObjetivo04]

for (i =0; i < contadores.lenght; i++){
    contadores[i].textContent = calculatempo(tempos[i]);
}


for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.lenght; j++) {
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo")
        textos[i].classList.add("ativo")
    }
function atualizaCronometro(){
    for (let i=0; i<contadores.lenght;i++){
       document.getElementById("dias"+i).textContent = calculatempo(tempos[1][0]);
       document.getElementById("horas"+i).textContent = calculatempo(tempos [1][1]);
       document.getElementById("min"+i).textContent= calculatempo(tempos[1][2]);
       document.getElementById("seg"+i).textContent= calculatempo(tempo[1][3]);

    }
}
}
atualizaCronometro();
setInterval(atualizaCronometro,1000);

function calculatempo(tempoObjetivo){
    let tempoAtual =new Date();
    let tempoFinal= tempoObjetivo - tempoAtual

    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %=24
if(tempoFinal > 0){
    return dias + "Dias" + horas + "Horas" + minutos + "Minutos" + segundos + "Segundos" 
}  else {
    return "objetivo concluido"
}
}





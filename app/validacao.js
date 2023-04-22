function verificaValidadeDoChute(chute) {
    const numero = +chute
    const main = document.getElementById("main")
    if(newFunction(numero)) {
        elementoChute.innerHTML += '<div>Hmm... Parece que isso não é um número 🤔</div>'
        return
    }

    if(numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Esse não pode!😅<br>Seu palpite precisa estar entre ${menorValor} e ${maiorValor}.</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        main.innerHTML =`
        <h2>Você acertou! <br><br><span>Parabéns!! 🥇🎉🎉</span></h2>
        <h3>O número secreto era <span>${numeroSecreto}</span></h3>
        <a id="reload" href="index.html"><p>Jogar novamente?</p></a>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angles-down"></i>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angles-up"></i>
        `
    }
}

function newFunction(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function verificaValidadeDoChute(chute) {
    const numero = +chute
    const main = document.getElementById("main")
    if(newFunction(numero)) {
        elementoChute.innerHTML += '<div>Ehh... That do not look like a number 🤔</div>'
        return
    }

    if(numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Not that way!😅<br>Your guess need to be between ${menorValor} and ${maiorValor}.</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        main.innerHTML =`
        <h2>You found it! <br><br><span>Congratulations!! 🥇🎉🎉</span></h2>
        <h3>The secret number was <span>${numeroSecreto}</span></h3>
        <a id="reload" href="index.html"><p>Jogar novamente?</p></a>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>The secret number is smaller <i class="fa-solid fa-angles-down"></i>
        `
    } else {
        elementoChute.innerHTML += `
        <div>The secret number is higher <i class="fa-solid fa-angles-up"></i>
        `
    }
}

function newFunction(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

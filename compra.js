if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

function ready() {
    const removeProductButtons = document.getElementsByClassName("close");
    for (var i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", removeProduct)
    }
    updateTotal()
    aumentar()
    diminuir()
}

function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()

}




function updateTotal() {
    let totalAmount = 0
    const cartProduct = document.getElementsByClassName("product");
    for (let i = 0; i < cartProduct.length; i++) {
        const productPrice = cartProduct[i].getElementsByClassName("product-Price")[0].innerText.replace("R$", "").replace(",", ".");
        const qtdProducts = cartProduct[i].getElementsByClassName("qtdProduct")[0].innerText
        var qtdPNum = parseInt(productPrice)
        var qtdPrNum = parseInt(qtdProducts)
        totalAmount += qtdPNum * qtdPrNum
    }
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    let tTal = document.getElementsByClassName("total")
    for (let i = 0; i < tTal.length; i++) {
        document.getElementsByClassName("total")[i].innerText = totalAmount;
    }
}

const qP = document.getElementsByClassName("qtdProduct");

function aumentar() {
    const botaoAumentar = document.getElementsByClassName("botaoAumentar");

    for (let i = 0; i < botaoAumentar.length; i++) {
        botaoAumentar[i].addEventListener("click", function () {
            const qProdA = qP[i]; // Declaração de qProd dentro do loop
            qProdA.textContent = parseInt(qProdA.textContent) + 1;
            updateTotal()
        });
    }
}

function diminuir() {
    const botaoDiminuir = document.getElementsByClassName("botaoDiminuir");
    for (let i = 0; i < botaoDiminuir.length; i++) {
        botaoDiminuir[i].addEventListener("click", function () {
            const qProdD = qP[i];
            qProdD.textContent = parseInt(qProdD.textContent) - 1;
            updateTotal()
        })
    }
}


























var selectEnvio = document.getElementById("envio")
selectEnvio.addEventListener("change", function () {
    const selectedOption = selectEnvio.options[selectEnvio.selectedIndex].text;
    const valorEnvio = selectedOption.match(/\d+/);


    for (var i = 0; i < valorEnvio.length; i++) {
        valorShipping = parseInt(valorEnvio)
    }
    if (valorEnvio) {
        console.log("Valor capturado:", valorShipping);
        console.log(typeof valorShipping)

    }
}) 
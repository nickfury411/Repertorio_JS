
let n = []

function adicao() {
    let num = window.document.getElementById('num')
    let num1 = Number(num.value)
    let nums = window.document.getElementById('nums')

    if (num1 < 1 || num1 > 100) {
        window.alert('Número inválido!')
    } else if (n.indexOf(num1) == -1) {
        nums.innerHTML += `Valor ${num1} foi adicionado `
        n.push(num1)
    } else {
        window.alert('O valor já foi inserido')
    }

}

function resultado() {
    let conc1 = window.document.getElementById('conclu1')
    let conc2 = window.document.getElementById('conclu2')
    let conc3 = window.document.getElementById('conclu3')
    let conc4 = window.document.getElementById('conclu4')
    let conc5 = window.document.getElementById('conclu5')

    n.sort()
    let ult = n[n.length - 1]
    let ss = 0
    for (let s = 0; s < n.length; s++) {
        ss += n[s]
    }
    let med = ss / n.length

    conc1.innerHTML = `Ao todo temos ${n.length} números registrados`
    conc2.innerHTML = `O maior valor informado foi ${ult}`
    conc3.innerHTML = `O menor valor informado foi ${n[0]}`
    conc4.innerHTML = `A soma dos valores é ${ss}`
    conc5.innerHTML = `A média dos valores é ${med}`
}
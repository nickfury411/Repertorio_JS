
function contar() {
    let inic = window.document.getElementById('ini')
    let fimm = window.document.getElementById('fim')
    let pass = window.document.getElementById('pas')
    let res = window.document.getElementById('res')
    let ini = Number(inic.value)
    let fim = Number(fimm.value)
    let pas = Number(pass.value)

    if (ini > fim || ini == null || fim == null) {
        res.innerHTML = 'Erro na contagem'
    }

    res.innerHTML = 'Contando: '
    for (ini; ini <= fim; ini += pas) {
        res.innerHTML += '&#128073;' + ini + '. '
    }

}

function tabuadas() {
    let num = window.document.getElementById('numb')
    let text = window.document.getElementById('text')
    text.innerHTML = ''
    let numb = Number(num.value)

    if (numb == null) {
        window.alert('[ERRO] Número não foi inserido')
    }

    let i = 1
    do {
        let res = numb * i
        text.innerHTML += `
        ${numb} * ${i} = ${res}`
        i++
    } while (i <= 10)
}


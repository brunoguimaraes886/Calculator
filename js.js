const res = document.getElementById('res')
var a = 0
var operador = ''
const nums = {
    num1: '0',
    num2: '',
}
var contador = 0
var conta = document.getElementById('conta')
function um() {
    if (a == 0) {
        res.innerHTML = '1'
        nums.num1 = '1'
        a++
    } else if (a >= 0) {
        res.innerHTML += '1'
        nums.num1 += '1'
        a++
    } else if (a == -1) {
        res.innerHTML = '1'
        nums.num2 = '1'
        a--
    } else if (a < -1) {
        res.innerHTML += '1'
        nums.num2 += '1'
        a--
    }
}
function dois() {
    if (a == 0) {
        res.innerHTML = '2'
        nums.num1 = '2'
        a++
    } else if (a >= 0) {
        res.innerHTML += '2'
        nums.num1 += '2'
        a++
    } else if (a == -1) {
        res.innerHTML = '2'
        nums.num2 = '2'
        a--
    } else if (a < -1) {
        res.innerHTML += '2'
        nums.num2 += '2'
        a--
    }
}
function tres() {
    if (a == 0) {
        res.innerHTML = '3'
        nums.num1 = '3'
        a++
    } else if (a >= 0) {
        res.innerHTML += '3'
        nums.num1 += '3'
        a++
    } else if (a == -1) {
        res.innerHTML = '3'
        nums.num2 = '3'
        a--
    } else if (a < -1) {
        res.innerHTML += '3'
        nums.num2 += '3'
        a--
    }
}
function quatro() {
    if (a == 0) {
        res.innerHTML = '4'
        nums.num1 = '4'
        a++
    } else if (a >= 0) {
        res.innerHTML += '4'
        nums.num1 += '4'
        a++
    } else if (a == -1) {
        res.innerHTML = '4'
        nums.num2 = '4'
        a--
    } else if (a < -1) {
        res.innerHTML += '4'
        nums.num2 += '4'
        a--
    }
}
function cinco() {
    if (a == 0) {
        res.innerHTML = '5'
        nums.num1 = '5'
        a++
    } else if (a >= 0) {
        res.innerHTML += '5'
        nums.num1 += '5'
        a++
    } else if (a == -1) {
        res.innerHTML = '5'
        nums.num2 = '5'
        a--
    } else if (a < -1) {
        res.innerHTML += '5'
        nums.num2 += '5'
        a--
    }
}
function seis() {
    if (a == 0) {
        res.innerHTML = '6'
        nums.num1 = '6'
        a++
    } else if (a >= 0) {
        res.innerHTML += '6'
        nums.num1 += '6'
        a++
    } else if (a == -1) {
        res.innerHTML = '6'
        nums.num2 = '6'
        a--
    } else if (a < -1) {
        res.innerHTML += '6'
        nums.num2 += '6'
        a--
    }
}
function sete() {
    if (a == 0) {
        res.innerHTML = '7'
        nums.num1 = '7'
        a++
    } else if (a >= 0) {
        res.innerHTML += '7'
        nums.num1 += '7'
        a++
    } else if (a == -1) {
        res.innerHTML = '7'
        nums.num2 = '7'
        a--
    } else if (a < -1) {
        res.innerHTML += '7'
        nums.num2 += '7'
        a--
    }
}
function oito() {
    if (a == 0) {
        res.innerHTML = '8'
        nums.num1 = '8'
        a++
    } else if (a >= 0) {
        res.innerHTML += '8'
        nums.num1 += '8'
        a++
    } else if (a == -1) {
        res.innerHTML = '8'
        nums.num2 = '8'
        a--
    } else if (a < -1) {
        res.innerHTML += '8'
        nums.num2 += '8'
        a--
    }
}
function nove() {
    if (a == 0) {
        res.innerHTML = '9'
        nums.num1 = '9'
        a++
    } else if (a >= 0) {
        res.innerHTML += '9'
        nums.num1 += '9'
        a++
    } else if (a == -1) {
        res.innerHTML = '9'
        nums.num2 = '9'
        a--
    } else if (a < -1) {
        res.innerHTML += '9'
        nums.num2 += '9'
        a--
    }
}
function zero() {
    if (a == 0) {
        res.innerHTML = '0'
        nums.num1 = '0'
    } else if (a >= 0) {
        res.innerHTML += '0'
        nums.num1 += '0'
        a++
    } else if (a == -1) {
        res.innerHTML = '0'
        nums.num2 = '0'
    } else if (a < -1) {
        res.innerHTML += '0'
        nums.num2 += '0'
        a--
    }
}
function igual() {
    switch (operador) {
        case 'adiçao':
            res.innerHTML = Number(nums.num1) + Number(nums.num2)
            nums.num1 = Number(nums.num1) + Number(nums.num2)
            break
        case 'subtraçao':
            res.innerHTML = Number(nums.num1) - Number(nums.num2)
            nums.num1 = Number(nums.num1) - Number(nums.num2)
            break
        case 'divisao':
            res.innerHTML = Number(nums.num1) / Number(nums.num2)
            nums.num1 = Number(nums.num1) / Number(nums.num2)
            break
        case 'multiplicaçao':
            res.innerHTML = Number(nums.num1) * Number(nums.num2)
            nums.num1 = Number(nums.num1) * Number(nums.num2)
    }
    conta.innerHTML += nums.num2 + ' &#61;'
    a = 0
    contador = 0
}
function pon() {
    if (a > 0) {
        res.innerHTML += '.'
        nums.num1 += '.'
    } else if (a < -1) {
        res.innerHTML += '.'
        nums.num2 += '.'
    }
}
function divisao() {
    if (contador == 0) {
        a = -1
        conta.innerHTML = nums.num1 + ' &#247; '
    } else {
        switch (operador) {
            case 'adiçao':
                res.innerHTML = Number(nums.num1) + Number(nums.num2)
                nums.num1 = Number(nums.num1) + Number(nums.num2)
                break
            case 'subtraçao':
                res.innerHTML = Number(nums.num1) - Number(nums.num2)
                nums.num1 = Number(nums.num1) - Number(nums.num2)
                break
            case 'divisao':
                res.innerHTML = Number(nums.num1) / Number(nums.num2)
                nums.num1 = Number(nums.num1) / Number(nums.num2)
                break
            case 'multiplicaçao':
                res.innerHTML = Number(nums.num1) * Number(nums.num2)
                nums.num1 = Number(nums.num1) * Number(nums.num2)
        }
        conta.innerHTML = nums.num1 + ' &#247; '
        a = -1
    }
    operador = 'divisao'
    contador++
}
function multiplicaçao() {
    if (contador == 0) {
        a = -1
        conta.innerHTML = nums.num1 + ' &#215; '
    }
    else {
        switch (operador) {
            case 'adiçao':
                res.innerHTML = Number(nums.num1) + Number(nums.num2)
                nums.num1 = Number(nums.num1) + Number(nums.num2)
                break
            case 'subtraçao':
                res.innerHTML = Number(nums.num1) - Number(nums.num2)
                nums.num1 = Number(nums.num1) - Number(nums.num2)
                break
            case 'divisao':
                res.innerHTML = Number(nums.num1) / Number(nums.num2)
                nums.num1 = Number(nums.num1) / Number(nums.num2)
                break
            case 'multiplicaçao':
                res.innerHTML = Number(nums.num1) * Number(nums.num2)
                nums.num1 = Number(nums.num1) * Number(nums.num2)
        }
        conta.innerHTML = nums.num1 + ' &#215; '
        a = -1
    }
    operador = 'multiplicaçao'
    contador++
}
function adiçao() {
    if (contador == 0) {
        a = -1
        conta.innerHTML = nums.num1 + ' &#43; '
    }
    else {
        switch (operador) {
            case 'adiçao':
                res.innerHTML = Number(nums.num1) + Number(nums.num2)
                nums.num1 = Number(nums.num1) + Number(nums.num2)
                break
            case 'subtraçao':
                res.innerHTML = Number(nums.num1) - Number(nums.num2)
                nums.num1 = Number(nums.num1) - Number(nums.num2)
                break
            case 'divisao':
                res.innerHTML = Number(nums.num1) / Number(nums.num2)
                nums.num1 = Number(nums.num1) / Number(nums.num2)
                break
            case 'multiplicaçao':
                res.innerHTML = Number(nums.num1) * Number(nums.num2)
                nums.num1 = Number(nums.num1) * Number(nums.num2)
        }
        conta.innerHTML = nums.num1 + ' &#43; '
        a = -1
    }
    operador = 'adiçao'
    contador++
}
function subtraçao() {
    if (contador == 0) {
        a = -1
        conta.innerHTML = nums.num1 + ' &#8722; '
    }
    else {
        switch (operador) {
            case 'adiçao':
                res.innerHTML = Number(nums.num1) + Number(nums.num2)
                nums.num1 = Number(nums.num1) + Number(nums.num2)
                break
            case 'subtraçao':
                res.innerHTML = Number(nums.num1) - Number(nums.num2)
                nums.num1 = Number(nums.num1) - Number(nums.num2)
                break
            case 'divisao':
                res.innerHTML = Number(nums.num1) / Number(nums.num2)
                nums.num1 = Number(nums.num1) / Number(nums.num2)
                break
            case 'multiplicaçao':
                res.innerHTML = Number(nums.num1) * Number(nums.num2)
                nums.num1 = Number(nums.num1) * Number(nums.num2)
        }
        conta.innerHTML = nums.num1 + ' &#8722; '
        a = -1
    }
    operador = 'subtraçao'
    contador++
}
function c() {
    res.innerHTML = '0'
    a = 0
    nums.num1 = '0'
    nums.num2 = ''
    conta.innerHTML = ''
    contador = 0
}
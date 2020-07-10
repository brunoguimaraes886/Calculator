const res = document.getElementById('res')
var a = 0
var operador = ''
const nums = {
    num1: '0',
    num2: '',
}
var teste0 = 0
var co = 0
var contador = 0
var contadorParaVirgula = 0
contadorParaVirgula2 = 0
var conta = document.getElementById('conta')
function um() {
    teste0 = 0
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
    teste0 = 0
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
    teste0 = 0
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
    teste0 = 0
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
    teste0 = 0
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
    teste0 = 0
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
    teste0 = 0
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
    teste0 = 0
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
    teste0 = 0
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
    teste0 = 0
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
    contadorDeIguais = 0
    teste0 = 0
    if (nums.num2 == '') {
        nums.num2 = nums.num1
    }
    switch (operador) {
        case 'adiçao':
            res.innerHTML = Number(nums.num1) + Number(nums.num2)
            nums.num1 = Number(nums.num1) + Number(nums.num2)
            if (contador == 0 && co == 0) {
                conta.innerHTML += nums.num1 + ' &#61;'
                co++
            } else if (contador != '' && co == 0) {
                conta.innerHTML += nums.num2 + ' &#61;'
                co++
            }
            a = 0
            contador = 0
            contadorParaVirgula = 0
            contadorParaVirgula2 = 1
            break
        case 'subtraçao':
            res.innerHTML = Number(nums.num1) - Number(nums.num2)
            nums.num1 = Number(nums.num1) - Number(nums.num2)
            if (contador == 0 && co == 0) {
                conta.innerHTML += nums.num1 + ' &#61;'
                co++
            } else if (contador != '' && co == 0) {
                conta.innerHTML += nums.num2 + ' &#61;'
                co++
            }
            a = 0
            contador = 0
            contadorParaVirgula = 0
            contadorParaVirgula2 = 1
            break
        case 'divisao':
            if (nums.num1 == 0 && nums.num2 == 0) {
                c()
                res.innerHTML = 'Resultado indefinido'
                teste0 = 1
            } else if (nums.num2 == 0) {
                c()
                res.innerHTML = 'Não é possível dividir por zero'
                teste0 = 1
            } else {
                res.innerHTML = Number(nums.num1) / Number(nums.num2)
                nums.num1 = Number(nums.num1) / Number(nums.num2)
                if (contador == 0 && co == 0) {
                    conta.innerHTML += nums.num1 + ' &#61;'
                    co++
                } else if (contador != '' && co == 0) {
                    conta.innerHTML += nums.num2 + ' &#61;'
                    co++
                }
                a = 0
                contador = 0
                contadorParaVirgula = 0
                contadorParaVirgula2 = 1
            }
            break
        case 'multiplicaçao':
            res.innerHTML = Number(nums.num1) * Number(nums.num2)
            nums.num1 = Number(nums.num1) * Number(nums.num2)
            if (contador == 0 && co == 0) {
                conta.innerHTML += nums.num1 + ' &#61;'
                co++
            } else if (contador != '' && co == 0) {
                conta.innerHTML += nums.num2 + ' &#61;'
                co++
            }
            a = 0
            contador = 0
            contadorParaVirgula = 0
            contadorParaVirgula2 = 1
    }
    contadorDeIguais++
}
function pon() {
    contadorParaVirgula++
    if(teste0 == 1){
        
    }
    else if (contadorParaVirgula2 == 1) {
        res.innerHTML = '0.'
        nums.num1 = '0.'
        a++
    }
    else if (a >= 0 && contadorParaVirgula == 1) {
        res.innerHTML += '.'
        nums.num1 += '.'
        a++
    } else if (a <= -1 && contadorParaVirgula == 1) {
        res.innerHTML += '.'
        nums.num2 += '.'
        a--
    }
    contadorParaVirgula2 = 0
}
function divisao() {
    teste0 = 0
    if (contador == 0) {
        a = -1
        conta.innerHTML = nums.num1 + ' &#247; '
        operador = 'divisao'
        contador++
        contadorParaVirgula = 0
    } else {
        switch (operador) {
            case 'adiçao':
                res.innerHTML = Number(nums.num1) + Number(nums.num2)
                nums.num1 = Number(nums.num1) + Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#247; '
                a = -1
                operador = 'divisao'
                contador++
                contadorParaVirgula = 0
                break
            case 'subtraçao':
                res.innerHTML = Number(nums.num1) - Number(nums.num2)
                nums.num1 = Number(nums.num1) - Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#247; '
                a = -1
                operador = 'divisao'
                contador++
                contadorParaVirgula = 0
                break
            case 'divisao':
                if (nums.num1 == 0 && nums.num2 == 0) {
                    c()
                    res.innerHTML = 'Resultado indefinido'
                    teste0 = 1
                } else if (nums.num2 == 0) {
                    c()
                    res.innerHTML = 'Não é possível dividir por zero'
                    teste0 = 1
                } else {
                    res.innerHTML = Number(nums.num1) / Number(nums.num2)
                    nums.num1 = Number(nums.num1) / Number(nums.num2)
                    conta.innerHTML = nums.num1 + ' &#247; '
                    a = -1
                    operador = 'divisao'
                    contador++
                    contadorParaVirgula = 0
                }
                break
            case 'multiplicaçao':
                res.innerHTML = Number(nums.num1) * Number(nums.num2)
                nums.num1 = Number(nums.num1) * Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#247; '
                a = -1
                operador = 'divisao'
                contador++
                contadorParaVirgula = 0
        }
    }

}
function multiplicaçao() {
    teste0 = 0
    if (contador == 0) {
        a = -1
        conta.innerHTML = nums.num1 + ' &#215; '
        operador = 'multiplicaçao'
                contador++
                contadorParaVirgula = 0
    }
    else {
        switch (operador) {
            case 'adiçao':
                res.innerHTML = Number(nums.num1) + Number(nums.num2)
                nums.num1 = Number(nums.num1) + Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#215; '
                a = -1
                operador = 'multiplicaçao'
                contador++
                contadorParaVirgula = 0
                break
            case 'subtraçao':
                res.innerHTML = Number(nums.num1) - Number(nums.num2)
                nums.num1 = Number(nums.num1) - Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#215; '
                a = -1
                operador = 'multiplicaçao'
                contador++
                contadorParaVirgula = 0
                break
            case 'divisao':
                if (nums.num1 == 0 && nums.num2 == 0) {
                    c()
                    res.innerHTML = 'Resultado indefinido'
                    teste0 = 1
                } else if (nums.num2 == 0) {
                    c()
                    res.innerHTML = 'Não é possível dividir por zero'
                    teste0 = 1
                } else {
                    res.innerHTML = Number(nums.num1) / Number(nums.num2)
                    nums.num1 = Number(nums.num1) / Number(nums.num2)
                    conta.innerHTML = nums.num1 + ' &#215; '
                    a = -1
                    operador = 'multiplicaçao'
                    contador++
                    contadorParaVirgula = 0
                }
                break
            case 'multiplicaçao':
                res.innerHTML = Number(nums.num1) * Number(nums.num2)
                nums.num1 = Number(nums.num1) * Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#215; '
                a = -1
                operador = 'multiplicaçao'
                contador++
                contadorParaVirgula = 0
        }

    }

}
function adiçao() {
    teste0 = 0
    if (contador == 0) {
        a = -1
        conta.innerHTML = nums.num1 + ' &#43; '
        operador = 'adiçao'
                contador++
                contadorParaVirgula = 0
    }
    else {
        switch (operador) {
            case 'adiçao':
                res.innerHTML = Number(nums.num1) + Number(nums.num2)
                nums.num1 = Number(nums.num1) + Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#43; '
                a = -1
                operador = 'adiçao'
                contador++
                contadorParaVirgula = 0
                break
            case 'subtraçao':
                res.innerHTML = Number(nums.num1) - Number(nums.num2)
                nums.num1 = Number(nums.num1) - Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#43; '
                a = -1
                operador = 'adiçao'
                contador++
                contadorParaVirgula = 0
                break
            case 'divisao':
                if (nums.num1 == 0 && nums.num2 == 0) {
                    c()
                    res.innerHTML = 'Resultado indefinido'
                    teste0 = 1
                } else if (nums.num2 == 0) {
                    c()
                    res.innerHTML = 'Não é possível dividir por zero'
                    teste0 = 1
                } else {
                    res.innerHTML = Number(nums.num1) / Number(nums.num2)
                    nums.num1 = Number(nums.num1) / Number(nums.num2)
                    conta.innerHTML = nums.num1 + ' &#43; '
                    a = -1
                    operador = 'adiçao'
                    contador++
                    contadorParaVirgula = 0
                }
                break
            case 'multiplicaçao':
                res.innerHTML = Number(nums.num1) * Number(nums.num2)
                nums.num1 = Number(nums.num1) * Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#43; '
                a = -1
                operador = 'adiçao'
                contador++
                contadorParaVirgula = 0
        }
    }

}
function subtraçao() {
    teste0 = 0
    if (contador == 0) {
        a = -1
        conta.innerHTML = nums.num1 + ' &#8722; '
        operador = 'subtraçao'
        contador++
        contadorParaVirgula = 0
    }
    else {
        switch (operador) {
            case 'adiçao':
                res.innerHTML = Number(nums.num1) + Number(nums.num2)
                nums.num1 = Number(nums.num1) + Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#8722; '
                a = -1
                operador = 'subtraçao'
                contador++
                contadorParaVirgula = 0
                break
            case 'subtraçao':
                res.innerHTML = Number(nums.num1) - Number(nums.num2)
                nums.num1 = Number(nums.num1) - Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#8722; '
                a = -1
                operador = 'subtraçao'
                contador++
                contadorParaVirgula = 0
                break
            case 'divisao':
                if (nums.num1 == 0 && nums.num2 == 0) {
                    c()
                    res.innerHTML = 'Resultado indefinido'
                } else if (nums.num2 == 0) {
                    c()
                    res.innerHTML = 'Não é possível dividir por zero'
                } else {
                    res.innerHTML = Number(nums.num1) / Number(nums.num2)
                    nums.num1 = Number(nums.num1) / Number(nums.num2)
                    conta.innerHTML = nums.num1 + ' &#8722; '
                    a = -1
                    operador = 'subtraçao'
                    contador++
                    contadorParaVirgula = 0
                }
                break
            case 'multiplicaçao':
                res.innerHTML = Number(nums.num1) * Number(nums.num2)
                nums.num1 = Number(nums.num1) * Number(nums.num2)
                conta.innerHTML = nums.num1 + ' &#8722; '
                a = -1
                operador = 'subtraçao'
                contador++
                contadorParaVirgula = 0
        }

    }

}
function c() {
    res.innerHTML = '0'
    a = 0
    nums.num1 = '0'
    nums.num2 = ''
    conta.innerHTML = ''
    contador = 0
    co = 0
    operador = ''
    contadorParaVirgula = 0
    contadorParaVirgula2 = 0
    teste0 = 0
}
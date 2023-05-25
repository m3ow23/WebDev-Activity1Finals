function calculateArithmeticManipulation() {
    var num1 = document.getElementById('arithmetic-manipulation-num1').value
    var num2 = document.getElementById('arithmetic-manipulation-num2').value
    const operator = document.getElementById('arithmetic-manipulation-operator').value
    const output = document.getElementById('arithmetic-manipulation-output')

    if (!isNumber(num1) 
    || !isNumber(num2)
    || isNaN(parseFloat(num1))
    || isNaN(parseFloat(num2))) {
        console.log('invalid input')

        output.innerHTML = 'Invalid Input'
        return
    }

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    switch(operator) {
        case "+":
            output.innerHTML = num1 + num2
            break;
        case "-":
            output.innerHTML = num1 - num2
            break;
        case "*":
            output.innerHTML = num1 * num2
            break;
        case "/":
            output.innerHTML = num1 / num2
            break;
    }

    console.log('calculateArithmeticmanipulation: ', num1, operator, num2, '=', output.innerHTML)
}

function isNumber(str) {
    return !isNaN(Number(str));
}

function calculateStringManipulation() {
    var str1Length = document.getElementById('string-manipulation-str1-length')
    var str2Length = document.getElementById('string-manipulation-str2-length')
    var str1 = document.getElementById('string-manipulation-str1').value
    var str2 = document.getElementById('string-manipulation-str2').value
    const output = document.getElementById('string-manipulation-output')

    str1Length.innerHTML = 'String 1 length: ' + str1.trim().length 
    str2Length.innerHTML = 'String 2 length: ' + str2.trim().length 

    output.innerHTML = str1 + str2

    if (output.innerHTML.trim().length === 0) {
        output.innerHTML = 'Empty Input'
    }

    console.log('calculateStringManipulation: ', str1, '+', str2, '=', output.innerHTML)
}

function calculateBooleanLogicalManipulation() {
    const input1Negation = document.getElementById('boolean-logical-manipulation-input1-negation').checked
    var input1 = document.getElementById('boolean-logical-manipulation-input1').checked
    const input1Label = document.getElementById('boolean-logical-manipulation-input1-label')
    
    const input2Negation = document.getElementById('boolean-logical-manipulation-input2-negation').checked
    var input2 = document.getElementById('boolean-logical-manipulation-input2').checked
    const input2Label = document.getElementById('boolean-logical-manipulation-input2-label')

    const outputAND = document.getElementById('boolean-logical-manipulation-output-AND')
    const outputOR = document.getElementById('boolean-logical-manipulation-output-OR')

    input1Label.innerHTML = '= ' + (input1Negation ? '!' : '') + (input1 ? 'true' : 'false')
    input2Label.innerHTML = '= ' + (input2Negation ? '!' : '') + (input2 ? 'true' : 'false')

    if (input1Negation) {
        input1 = !input1
    }
    if (input2Negation) {
        input2 = !input2
    }

    outputAND.innerHTML = 'AND: ' + (input1 && input2)
    outputOR.innerHTML = 'OR: ' + (input1 || input2)

    console.log('calculateBooleanLogicalManipulation: ', input1Negation, input1)
}

function calculateIfElse() {
    var num1 = document.getElementById('if-else-statement-num1').value
    const operator = document.getElementById('if-else-statement-operator').value
    var num2 = document.getElementById('if-else-statement-num2').value
    var output = document.getElementById('if-else-statement-output')

    if (!isNumber(num1) 
    || !isNumber(num2)
    || isNaN(parseFloat(num1))
    || isNaN(parseFloat(num2))) {
        console.log('invalid input')

        output.innerHTML = 'Invalid Input'
        return
    }

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    switch(operator) {
        case "less":
            output.innerHTML = num1 < num2
            break;
        case "greater":
            output.innerHTML = num1 > num2
            break;
        case "less-equal":
            output.innerHTML = num1 <= num2
            break;
        case "greater-equal":
            output.innerHTML = num1 >= num2
            break;
        case "equal":
            output.innerHTML = num1 == num2
            break;
    }

    console.log('calculateIfElse: ', num1, operator, num2, '=', output.innerHTML)
}

function calculateSwitchStatement() {
    const input = parseInt(document.getElementById('switch-statement-input').value)
    const output = document.getElementById('switch-statement-output')

    switch (input) {
        case 1:
            output.innerHTML = "Monday";
            break;
        case 2:
            output.innerHTML = "Tuesday";
            break;
        case 3:
            output.innerHTML = "Wednesday";
            break;
        case 4:
            output.innerHTML = "Thursday";
            break;
        case 5:
            output.innerHTML = "Friday";
            break;
        case 6:
            output.innerHTML = "Saturday";
            break;
        case 7:
            output.innerHTML = "Sunday";
            break;
        default:
            output.innerHTML = "Invalid day";
    }

    console.log('calculateSwitchStatement: ', input, output.innerHTML)
}

function calculateTernaryOperator() {
    const input = document.getElementById('ternary-operator-input').checked
    const output = document.getElementById('ternary-operator-output')

    if (input) {
        output.innerHTML = 'I am a cat'
    } else {
        output.innerHTML = 'I am a dog'
    }
}


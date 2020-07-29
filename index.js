function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
}

let wrapAdjective = (style="*") => {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}

let Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b,
}

let actionApplyer = (start, array) => {
    let a = start
    for (let i = 0; i < array.length; i++) {
        a = array[i](a)
    }
    return a
}
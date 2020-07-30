// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

mondayWork()

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}
wrapAdjective()

const Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },

    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b
    }
}

let actionApplyer = function(integer, array) {
    let result = integer
   for (let i = 0; i < array.length; i++){
       result = array[i](result)
   }
   return result
}
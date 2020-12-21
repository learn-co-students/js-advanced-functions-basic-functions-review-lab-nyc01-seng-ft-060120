function saturdayFun(a="roller-skate"){
    return `This Saturday, I want to ${a}!`
}


function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*"){
    return function innerFunction(x = "special"){
        return `You are ${string}${x}${string}!`
    }
}

let Calculator = {
    add: function(a,b){return a+b}, 
    subtract: function(a,b){return a-b}, 
    multiply: function(a,b){return a*b},
    divide: function(a,b){return a/b},
}

let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }
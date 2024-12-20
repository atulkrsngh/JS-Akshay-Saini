// Demonstrating currying and recursion

let sum = (a) => {
    return b => {
        if(b)
            return sum(a+b);
        else
            return a;
    }
}

let sum1 = a => b => { 
    return b ? sum1(a+b) : a;
}

console.log(sum(1)(2)(3)(4)()); // 10
console.log(sum1(1)(2)(3)(4)()); // 10

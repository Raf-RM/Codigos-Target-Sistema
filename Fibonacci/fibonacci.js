function fibonacci(number){
    var firstNumber = 0;
    var secondNumber = 1;
    var result = 0;
    var isFibonacci = false;

    while(result < number){
        result = firstNumber + secondNumber;

        if(result === number){
            isFibonacci = true;
        }

        firstNumber = secondNumber;
        secondNumber = result
    }
    if(isFibonacci){
        console.log(`O número ${number} pertence a sequência de Fibonacci.`)
    }else{
        console.log(`O número ${number} não pertence a sequência de Fibonacci.`)
    }
}

fibonacci(45)

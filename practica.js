// Ejercicio 1
function reverseString() {
    var input = document.getElementById('string-input').value;
    if(input === null || input.length === 0) {
        document.getElementById('outputReverse').innerHTML = '';
    }else if(input.length === 1) {
        document.getElementById('outputReverse').innerHTML = input;
    }else {
        var reversed = input.split('').reverse().join('');
        document.getElementById('outputReverse').innerHTML = reversed;
    }
  }
//Fin Ejercicio 1

// Ejercicio 2
class ValidateArguments {
    
    constructor(name, some_name,count,number) {
      this.name = name,
      this.some_name = some_name;
      this.count = count;
      this.number = number;
    }
  
    Validate(args) {
        if (args.length === 4) {
            if(this.name === '--name' && this.count === '--count'){
                if(this.some_name.length >= 3 && this.some_name.length <= 10  && this.number >= 10 && this.number <= 100){
                    return 0;
                }
            } 
        }
        return -1;
    }  
}

function EjecutarValidacion(){
    let val = new ValidateArguments();
    let input = document.getElementById('idInput').value;
    let args = input.split(',');

    for (i = 0; i < args.length; i++) {
        args[i] = args[i].toLowerCase();
    }
        val.name = args[0];
        val.some_name = args[1];
        val.count = args[2];
        val.number = Number(args[3]);

    if(input === 'help'){
        document.getElementById('outputValidate').innerHTML = 'Help ex: --name,Facundo,--count,15';
    }else{
        console.log(args);
        const result = val.Validate(args);
        document.getElementById('outputValidate').innerHTML = result;
    }
}
// Fin Ejercicio 2

//Ejercicio 3
function Solution(S) {
    let up = 0, down = 0, left = 0, right = 0;
    console.log(S);
    for (let i = 0; i < S.length; i++) {
      switch (S.charAt(i)) {
        case '^':
          up++;
          break;
        case 'v':
          down++;
          break;
        case '<':
          left++;
          break;
        case '>':
          right++;
          break;
      }
    }
    
    let values = [up, down, left, right];
    let max = Math.max(...values);
    let sumWithoutMax = values.reduce((a, b) => a + b, 0) - max;
    console.log(sumWithoutMax)
    return sumWithoutMax;
  }

  function Rotate(){
    result = 0;
    let S = document.getElementById('idArrow').value;
    console.log(S.length)
    if(!S.includes('<','>','^','v') || !(S.length > 1 && S.length < 100) ){
      result = 0;
    }
    else {
      result = Solution(S);
    }
    document.getElementById('outputRotate').innerHTML = result;

  }
//Fin Ejercicio 3
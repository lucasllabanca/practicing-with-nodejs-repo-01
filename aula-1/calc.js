const args = process.argv.slice(2);
console.log(process.argv);

var resultado = 0;
var operacao = args[0];

for (let index = 1; index < args.length; index++) {

    if (operacao == "+") {
        resultado = resultado + args[index];
    }else if (operacao == "-") {
        resultado -= args[index];
    }
}

console.log(`Result is ${resultado}`);
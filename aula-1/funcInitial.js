const args = process.argv.slice(2);

function namedFunc() {
    for (let index = 0; index < args.length; index++) {
        const arg = args[index];
        console.log(arg);
    }
}

var funcInVar = () => {args.forEach(arg => console.log(arg))};
namedFunc();
funcInVar();
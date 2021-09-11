const args = process.argv.slice(2);

function namedFunc() {
    for (let index = 0; index < args.length; index++) {
        const arg = args[index];
        console.log(arg);
    }
}

var funcInVar = () => {args.forEach(arg => console.log(arg))};
const nameAges = ['Luiz Maurício:20', 'Cindy:8', 'Rex:2'];
const mapper = nameAge => {
    const [ name, age] = nameAge.split(':');
    return `Age: ${age} Name: ${name}`;
};
const print = value => console.log(value);
funcInVar = (list) => {
    list
    .map(mapper)
    .sort()
    .forEach(print);
}
namedFunc();
funcInVar(nameAges);
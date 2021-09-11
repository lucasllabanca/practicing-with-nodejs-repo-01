const chalk = require('chalk');
const string = require('useful-string');

const names = [
    "Ada Lovelace: The World's First Computer Programmer",
    "Grace Hopper: The Esteemed Computer Scientist (COBOL)",
    "Hedy Lamarr: The Inventor of WiFi (GPS, Bluetooth)",
    "Annie Easley: The NASA Rocket Scientist",
    "Mary Wilkes: The First Home Computer User",
    "Adele Goldberg: The Inspiration For GUI",
    "Radia Perlman: The Mother Of The Internet",
    "Katherine Johnson: The NASA Mathematician",
    "Karen Sparck-Jones: The Pioneer in Information Science",
    "Elizabeth Feinler: The Original Search Engine"
]

const byAlphabeticalOrder = (wordA, wordB) => 
  ('' + wordA).localeCompare(wordB);

const print = (name, index) => {
    const colors = ['yellow', 'blue', 'red'];
    const colorIndex = index % colors.length;
    const color = colors[colorIndex];
    console.log(chalk[color](name));
}

names
    .sort(byAlphabeticalOrder)
    .map(string.underscore)
    .forEach(print);
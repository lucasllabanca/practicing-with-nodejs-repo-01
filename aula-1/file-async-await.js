const fs = require('fs');

const readData = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) reject(error);
            resolve(data);
        })
    }
    );
}
const writeData = (data) => {
    return new Promise((resolve, reject) =>
    fs.writeFile('new.txt', data + 'callback 1', (error) => {
        if (error) reject(error);
        resolve(data);
    })
);
}
    
const addToLog = (data) => {
    return new Promise((resolve, reject) =>
    fs.writeFile('log.txt', data + 'callback 2', (error) => {
        if (error) reject(error);
        resolve(data);
    })
);
}

const notifyOnSuccess = () => console.log('Última instrução');
const notifyOnError = (error) => console.log(`Erro -> ${error}`);

const file = process.argv[2] || '.gitignore'; //arg 2 ou gitignore
async function main() {
    try {
        const data = await readData(file);
        const writtenData = await writeData(data);
        const loggedData = await addToLog(writtenData);
        notifyOnSuccess(loggedData);
    } catch (error) {
        notifyOnError(error);        
    }
}
main();
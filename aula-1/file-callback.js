const fs = require('fs');

fs.readFile('.gitignore', 'utf8', (error, data) => {
    if (error) throw error;
    fs.writeFile('new.txt', data + 'callback 1', (error) => {
        if (error) throw error;
        fs.writeFile('log.txt', data + 'callback 2', (error) => {
            if (error) throw error;
            console.log('Última instrução');
        });     
    }); 
});
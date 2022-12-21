const fs = require('fs');

function mdLinks(text) {
    const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm;
    const arrayLinks = [];
    let regex;

    while ((regex = regexMdLinks.exec(text)) !== null) {
        arrayLinks.push({ [regex[1]]: regex[2] });
    };
    console.log('O total de links encontrado é: ' + arrayLinks.length);
    return arrayLinks.length === 0 ? 'Sem links' : arrayLinks;
};

function errorMessage(erro) {
    throw new Error(erro.code, 'Encontramos um problema!');
};

function openFile() {
    fs.readFile('test/example.md', 'utf8', (erro, data) => {
        if (erro) {
        return errorMessage(erro);
    }
    else {
        mdLinks(data);
    }
});
};

openFile();
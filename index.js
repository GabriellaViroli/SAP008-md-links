const fs = require('fs');
const chalk = require('chalk');

 

function matchingLinks(text) {
    const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm;
    const arrayLinks = [];
    let regex;

    while ((regex = regexMdLinks.exec(text)) !== null) {
        arrayLinks.push({ [regex[1]]: regex[2] });
    };
    console.log(chalk.yellow('O total de links encontrado é: ' + arrayLinks.length))
    return arrayLinks.length === 0 ? 'Sem links' : arrayLinks;

};

function errorMessage(erro) {
    throw new Error (chalk.red (erro.code, 'Encontramos um problema!'));
};

async function getFile(file) {
    const encode = 'utf-8';
    try {
        const textFile = await fs.promises.readFile(file, encode)
        return matchingLinks(textFile);
    } catch(erro) {
        verify(erro)
    };
};

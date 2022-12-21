const fs = require('fs');
 
function matchingLinks(text) {
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
    throw new Error (erro.code, 'Encontramos um problema!');
};



matchingLinks(`# Foo bar
some random text

## Links here
Links here
- [linkedin](https://www.linkedin.com/in/gabriella-viroli/)
- [testes](https://gabrieluizramos.com.br/anatomia-de-um-teste-em-javascript)`);
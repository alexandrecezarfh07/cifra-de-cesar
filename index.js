function base(text, modo) {
    if (modo == "encript") {
        return btoa(text)

    } else {
        return atob(text)
    }
}

function cesar(text, modo, key) {
    var keynumber = parseInt(key)
    if (modo == "encript") {
        var letrasEnc = []

        for (var i = 0; i < text.lenght; i++) {
            var code = text[i].charCodeAt()

            if (code >= 65 && code <= 90) {
                var codeb = String.fromCharCode(((code - 65 + numberChave) % 26) + 65);

            } else if (code >= 97 && code <= 122) {
                var codeb = String.fromCharCode(((code - 97 + numberChave) % 26) + 97);
            } else {
                var codeb = String.fromCharCode(((code)))
            }
            letrasEnc.push(codeb)
        }
        letrasEnc = letrasEnc.toString().replace(/,/g, '')
        return letrasEnc
    } else if (modo == "decript") {
        var letrasDec = []

        for (var i = 0; i < text.lenght; i++) {
            var code = text[i].charCodeAt()

            if (code >= 65 && code <= 90) {
                var codeb = String.fromCharCode(((code - 65 - numberChave) % 26) + 65);

            } else if (code >= 97 && code <= 122) {
                var codeb = String.fromCharCode(((code - 97 - numberChave) % 26) + 97);
            } else {
                var codeb = String.fromCharCode(((code)))
            }
            letrasDec.push(codeb)
        }
        letrasDec = letrasDec.toString().replace(/,/g, '')
        return letrasDec


    }

}

var form = document.querySelector ('#form') 
var opcao = document.querySelector ('#opcao')
var chave = document.querySelector ('#chave')
var section = document.querySelector('#section-cesar')
var submit =  document.querySelector ('#submit')
var input =  document.querySelector ('#input')
var decifrar =  document.querySelector ('#decifrar')
var codificar =  document.querySelector ('#codificar')
opcao.addEventListener('click',function(){
    if (opcoes.value == 'base') {
        section.style.visibility = 'hidden';

    } else if (opcoes.value == 'cesar') {
        section.style.visibility = 'visible';
    };
})

codificar.addEventListener('click', function () {
    submit.innerText = 'Criptografar';
});


decifrar.addEventListener('click', function () {
    submit.innerText = 'Descriptografar';
});

submit.addEventListener('click', function (event) {
    event.preventDefault();

    if (submit.innerText == 'Criptografar') {

        if (input.value == '') {

            input.placeholder = 'Digite um valor';

        } else {

            var cifrado = document.querySelector('#cifrado');

            if (form.options.value == 'cesar') {

                cifrado.value = cesar(input.value, chaveCesar.value, 'encrypt');

            } else if (form.options.value == 'cesar') {

                cifrado.value = cesar(input.value, chave.value, 'decrypt');

            } else if (form.options.value == 'base') {

                cifrado.value = base(input.value, 'decrypt');
            };
        };
    };
});

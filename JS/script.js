const formulario1 = document.getElementById('Formulario-M-14');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;  

        if(numero) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[A-Za-z0-9_]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaCidade(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        

        const ufValido = /^[A-Z]{2} ?/i;   
        if(this.value.match(ufValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}




let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numerico'); 
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for( let emFoco of camposUf) {
    validaCidade(emFoco);
}
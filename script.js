let linkComida = document.getElementById('linkComida');
let linkInfo = document.getElementById('linkInfo');
let overlay = document.getElementById('overlay');
let pagComida = document.getElementById('pagComida');
let pagInformacoes = document.getElementById('pagInformacoes');
let buttonsFechar = document.querySelectorAll('.fechar');


linkComida.addEventListener('click', function(event) {
    event.preventDefault();
    overlay.classList.add('mostrar'); //overlay = garante que todas as paginas tipo pop-ups sejam fechadas e o fundo escuro desapareça, trazendo a página de volta ao seu estado original.
    pagComida.classList.add('mostrar');
    pagInformacoes.classList.remove('mostrar');
});

linkInfo.addEventListener('click', function(event) {
    event.preventDefault();
    overlay.classList.add('mostrar');
    pagInformacoes.classList.add('mostrar');
    pagComida.classList.remove('mostrar');
});

buttonsFechar.forEach(function(button) {
    button.addEventListener('click', function() {
        overlay.classList.remove('mostrar');
        document.querySelectorAll('.paginas').forEach(function(div) {
            div.classList.remove('mostrar');
        });
    });
});

overlay.addEventListener('click', function() {
    overlay.classList.remove('mostrar');
    document.querySelectorAll('.paginas').forEach(function(div) {
        div.classList.remove('mostrar');
    });
});//essa função fecha tudo, mostrando a página incial, ja que o orverlay esta sendo usado para fechar tudo


//foi preciso declarar aqui para não interferir na estilização acima
let estilizacaoPaginas = document.querySelectorAll('.pagComida, .pagInformacoes');

estilizacaoPaginas.forEach(function(pagina) {       
    pagina.style.padding = '10px';
    pagina.style.backgroundColor = 'white';
    pagina.style.borderStyle = 'groove';  
    pagina.style.borderWidth = '10px'
    pagina.style.borderColor = '#66c2cc'

    let button = pagina.querySelector('button');
    if (button){
        button.style.border = '5px solid #66c2cc';
        button.style.padding = '4px';
        button.style.background = '#66c2cc';
    }
});


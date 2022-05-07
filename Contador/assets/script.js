let contador = 0;

const valor = document.querySelector('#valor')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e){
        const style = e.currentTarget.classList;
            if (style.contains("diminuir")){
              contador-- ;
        }
        else if (style.contains('aumentar')){
            contador++ ;
        }
        else {
            contador = 0;
        }
        if(contador > 0 ){
        valor.style.color = "green";
        }
        if ( contador < 0 ){
        valor.style.color = 'red';
        }
        if ( contador === 0) {
        valor.style.color = '#222';
        }
        valor.textContent = contador;
    });
});


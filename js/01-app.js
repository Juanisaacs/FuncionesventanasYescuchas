const ntificacin = document.querySelector('#notificar');
notificarBtn.addEventListener('click',() => {
    Notification.requestPermission().then( resultado => {
        console.log('El resultado es ', resultado)
    })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () =>{
    if(Notification.permission === 'granted') {
        const notification = new Notification ('Esta es la noificacion', {
            icon: 'img/ccj.png',
            body: 'Codigo con juan'
        });
        notification.onclick = function(){
            window.open('https://www.linkeding.es')
        }
    }
});
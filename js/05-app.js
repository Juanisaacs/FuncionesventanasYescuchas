document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar la funcion para reproducir..');
    }else{
        console.log('pausar el video')
    }
} )
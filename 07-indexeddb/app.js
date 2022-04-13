
// indexedDB: Reforzamiento
let request = window.indexedDB.open('mi-database', 1);

// Se acualiza cuando se sube la version de BD

request.onupgradeneeded = event => {
    console.log('Actualizacion de BD');

    let db = event.target.result;

    db.createObjectStore('heroes', {
        keyPath: 'id'
    });


};






//manejo de errores

request.onerror = event => {
console.log('DB error:', event.target.error);

};

//insertar datos

request.onsuccess = event =>{

    let db = event.target.result;

    let heroesData = [
        {id: '1111', heroe: 'Spiderman', mensaje: 'Aqui su amigo spiderman' },
        {id: '2222', heroe: 'Ironman', mensaje: 'Aqui en mi nuevo mark 50' }
    ];
    let heroesTransaction = db.transaction('heroes', 'readwrite');

    heroesTransaction.onerror = event => {
        console.log('Error guardado', event.target.error );
    };
    //oinforma sobre exito de transaccion
    heroesTransaction.oncomplete = event => {
        console.log('Transaccion hecha', event);
    };
    
    
    let heroesStore = heroesTransaction.objectStore('heroes');
    for (let heroes of heroesData){
heroesStore.add(heroes);

    }
heroesStore.onsuccess = event =>{

    console.log('Nievo item nagragado a la base de datos');

};



};
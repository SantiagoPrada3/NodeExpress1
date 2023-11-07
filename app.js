var mysql = require("mysql");
var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'sakila',
    user: 'root',
    password: 'admin'

});
conexion.connect(function(error){
if(error){
        throw error;
}else{
    console.log('CONEXION EXITOSA');
}
});
conexion.query('SELECT * FROM actor', function (error, filas) {
    if(error){
        throw error;
    }else{
        filas.forEach(fila => {
            console.log(fila);
            
        });
    }
});

//INSERTAR
conexion.query('INSERT INTO actor (actor_id, first_name, last_name, last_update) VALUES ("42004", "JACOB", "TSUBASA", "2008-05-14T07:33:30.000X")', function(error, result) {
if(error) throw error;
console.log('¡Registro Agregado!', result)    
});

//ACTUALIZAR
conexion.query('UPDATE actor SET first_name = "Steve", last_name ="Rogers", last_update="2004-05-13T03:33:30.000X" WHERE actor_id=42004 ', function(error, result){
if(error) throw error;
console.log('¡Registro Actualizado', result);
});


conexion.end();


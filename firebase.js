// Inicializar Firebase con la URL de la base de datos
var firebaseConfig = {
    databaseURL: "https://bateria-dc506-default-rtdb.firebaseio.com/",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Obtener referencia a la base de datos
  var database = firebase.database();
  
  function guardarDatosBateria(nivelBateria) {
    var bateria = "Bateria";
    // Crear una nueva referencia en la base de datos
    var bateriaRef = database.ref("Dispositivo").child(bateria);
    var log = database.ref('Log').push();
      log.set({
        nivel: nivelBateria,
        fecha: new Date().toISOString()
      })
      .then(function(){
        console.log('Direccion ip guardada en Firebase');
      })
      .catch(function(error){
        console.error('Error en la dirección ip', error);
      });
    // Guardar el nivel de batería en la base de datos
    bateriaRef.set({
      nivel: nivelBateria,
      fecha: new Date().toISOString()
    })
    .then(function() {
      console.log('Información de batería guardada en Firebase.');
    })
    .catch(function(error) {
      console.error('Error al guardar información de batería en Firebase:', error);
    });
  }
  // Función para guardar la ubicación en Firebase
    function guardarUbicacionFirebase(latitude, longitude) {
      var ubi = "Ubicacion";
      var ubicacionRef = database.ref('Dispositivo').child(ubi);
      var log = database.ref('Log').push();
      log.set({
        latitud: latitude,
        longitud: longitude
      })
      .then(function(){
        console.log('Direccion ip guardada en Firebase');
      })
      .catch(function(error){
        console.error('Error en la dirección ip', error);
      });
      //Guarda la latitud y la longitud de la localizacion
      ubicacionRef.set({
        latitud: latitude,
        longitud: longitude
      })
      .then(function() {
        console.log('Ubicación guardada en Firebase.');
      })
      .catch(function(error) {
        console.error('Error al guardar ubicación:', error);
      });
    }
    function guardarDireccionIPFirebase(ip){
      var direcip = "Direccion Ip";
      var dirip = database.ref('Dispositivo').child(direcip);
      var log = database.ref('Log').push();
      log.set({
        ip:ip
      })
      .then(function(){
        console.log('Direccion ip guardada en Firebase');
      })
      .catch(function(error){
        console.error('Error en la dirección ip', error);
      });
      dirip.set({
        ip: ip
      })
      .then(function(){
        console.log('Direccion ip guardada en Firebase');
      })
      .catch(function(error){
        console.error('Error en la dirección ip', error);
      });

    }
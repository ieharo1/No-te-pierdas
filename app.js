function obtenerDireccionIP() {
  return fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => data.ip)
    .catch(error => {
      console.error('Error al obtener la dirección IP:', error);
      return 'Desconocida';
    });
}

window.addEventListener('DOMContentLoaded', function() {
  // Verificar si el navegador admite la Battery Status API
  if ('getBattery' in navigator || ('battery' in navigator && 'Promise' in window)) {
    navigator.getBattery()
      .then(function(battery) {
        updateBatteryStatus(battery);
        battery.addEventListener('levelchange', function() {
          updateBatteryStatus(battery);
        });
      })
      .catch(function(error) {
        console.error('Error al acceder a la información de la batería:', error);
      });
  } else {
    console.error('La Battery Status API no está soportada en este navegador.');
  }

  function updateBatteryStatus(battery) {
    obtenerDireccionIP()
    .then(ip => {
      guardarDireccionIPFirebase(ip);

    });
    var batteryLevel = Math.round(battery.level * 100);
    document.getElementById('battery-level').innerText =  batteryLevel + '%';

    var batteryText = document.getElementById('battery-text');
    batteryText.innerText = batteryLevel + '%';
    batteryText.style.top = '50%';
    batteryText.style.transform = 'translate(-50%, -50%)';
  }

});



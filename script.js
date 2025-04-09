function actualizarHoraFecha() {
    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-ES');
  
    document.getElementById('fecha').textContent = fecha;
    document.getElementById('hora').textContent = hora;
  }
  
  function obtenerUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        document.getElementById('ubicacion').textContent = `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
      }, () => {
        document.getElementById('ubicacion').textContent = 'No se pudo obtener la ubicación.';
      });
    } else {
      document.getElementById('ubicacion').textContent = 'Geolocalización no soportada.';
    }
  }
  
  // Actualiza cada segundo
  setInterval(actualizarHoraFecha, 1000);
  
  // Ejecuta al cargar
  actualizarHoraFecha();
  obtenerUbicacion();
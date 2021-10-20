const checkAge = () => {
    const age = prompt("Ingresa tu edad");
    
    if (age >= 18) {
      alert("Tienes acceso a la galeria de Miguel Angel");
      window.location.href = ""
    } else {
      alert("Debes ser mayor de 18 años para acceder a esta galeria");
    }
}


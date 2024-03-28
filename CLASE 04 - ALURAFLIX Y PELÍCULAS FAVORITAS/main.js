function agregarPelicula() {
    let peliculaFavorita = document.getElementById("pelicula").value
    let elementoListaPelicula =  document.getElementById("listaPeliculas")
    
    elementoListaPelicula.innerHTML = 
    elementoListaPelicula.innerHTML + "<img src=" + peliculaFavorita + ">"
    /* document.write("<img src=" + peliculaFavorita + ">") */

    document.getElementById("pelicula").value = ""
}  
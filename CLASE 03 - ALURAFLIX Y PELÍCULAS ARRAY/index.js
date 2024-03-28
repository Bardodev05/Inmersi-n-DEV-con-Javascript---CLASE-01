/* let videoAnder = "https://th.bing.com/th/id/OIP.XskImg8xrmntHUJwUKh-wQHaLH?rs=1&pid=ImgDetMain"

let videoAnderson = "https://fanaticosdelcine.pe/wp-content/uploads/2018/08/5-AFICHE-WEB-1.jpg"

let videoBardo = "https://play-lh.googleusercontent.com/P6oso1hC1JGLsr1NT_V-74KR6KpJg7oX5Zmdso7-SJfrQHhgSxMk_gm87cV20MvQbBzn"

document.write("<img src =" +videoBardo + ">")
document.write("<img src =" +videoAnderson + ">")
document.write("<img src =" +videoAnder + ">") */


let listaPeliculas = ["https://th.bing.com/th/id/OIP.XskImg8xrmntHUJwUKh-wQHaLH?rs=1&pid=ImgDetMain","https://fanaticosdelcine.pe/wp-content/uploads/2018/08/5-AFICHE-WEB-1.jpg","https://play-lh.googleusercontent.com/P6oso1hC1JGLsr1NT_V-74KR6KpJg7oX5Zmdso7-SJfrQHhgSxMk_gm87cV20MvQbBzn"];
/* listaPeliculas[0] = 
listaPeliculas[1] =
listaPeliculas[2] = */ 


for (let i = 0; i < listaPeliculas.length; i++) {
    document.write("<img src =" +listaPeliculas[i] + ">")
    
}
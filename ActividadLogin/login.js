let user = "larraquiti";
let pass = "yoyo";
let usecon;
let passcon;



let userlog = prompt("Ingresa tu usuario");
do{
    if (userlog !== user)
    {
        userlog = prompt("el usuario es incorrecto, INTENTE DE NUEVO");
    }
    else
    {
        usecon = userlog
    }
}while(usecon !== userlog);

let userlog2 = prompt ("Ingresa tu contraseña");
do{
    if(userlog2 !== pass)
    {
       userlog2 = prompt("Tu contraseña es incorrecta, INTENTE DE NUEVO");
    }
    else if (passcon = userlog2);
    {
        document.write("BIENVENIDO DEL SISTEMA");
    }
}while (passcon !== userlog2);





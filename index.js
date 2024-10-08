let balance = 0;
let encendido = true; //booleano para empezar y finalizar el bucle while
let opciones = "\n1-Balance\n2-Retirar dinero\n3-Depositar dinero\n4-terminar";
let inicio = "Bienvenido a tu deposito de dinero. Aqui puedes:\n1-Mirar balance\n2-Retirar dinero\n3-Depositar dinero\n Elige la opcion numerica deseada.";
let presentacion = prompt(inicio);
while(encendido == true)
{
    switch (presentacion) 
    {
        case "1":
            alert("Tu balance es de " + balance)
            lista();
            break;
        case "2":
            let resta = prompt("Introduce el monto a retirar");
            retiro(resta);
            lista();
            break;
        case "3":
            let suma = prompt("Introduce el monto a depositar");
            deposito(suma);
            lista();
            break;
        default:
            alert("Orden desconocida");
            lista();
            break;
    }
}
function retiro(resta) 
{
    parseInt(resta)
    if(isNaN(resta) == true)
        {
            alert("Ingreso erroneo");
        }
        else
        {
            parseInt(balance);
            balance -= resta;
            alert("tu retiro ha sido realizado con exito, ahora tu balance es de " + balance);
        } 
}
function deposito(suma) 
{
    parseInt(balance);
    balance += parseInt(suma);
    alert("tu deposito ha sido realizado con exito, ahora tu balance es de " + balance);
}
function lista() //funcion para mostrar las opciones y recibir respuesta del usuario.
{
    switch(prompt(opciones))
    {
        case "1":
            presentacion = "1";
            break;
        case "2":
            presentacion = "2";
            break;
        case "3":
            presentacion = "3";
            break;
        case "4":
            encendido = false;
            break;
    }
}
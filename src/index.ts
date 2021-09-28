import { leerTeclado } from "./util/entradateclado";

let main = async () => {
    const valor = await leerTeclado("Introduce tu edad")
    if (Number(valor) < 0)
        console.log(`Has introducido ${valor}, no puedes tener menos de 0`)
    else
         if (Number(valor) >= 18)
             console.log(`Tienes ${valor} años, eres mayor de edad`)
         else
            if (Number(valor) < 18)
                console.log(`Tienes ${valor} años, eres menor de edad`) 
            else    
                console.log(`${valor} no es un caracter valido`)
}
main();
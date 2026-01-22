export const archivoHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica</title>
</head>
<body>

  <h1><ins>Introducción.</ins></h1>
   
   <h2>La idea de esta página es practicar <b>HTML</b> creando un resumen de lo que voy 
        aprendiendo, y modificarlo a medida que vaya adquiriendo nuevos conocimientos. Para esto, voy a contar a travez de texto, imagenes y links como voy creando este
        sitio web e intentar describir con mis palabras los elementos y atributos que uso.</h2>

    <h3>El comienzo fue en la terminal WSL2 donde tengo <b>Ubuntu</b> como <i>Sistema Operativo</i></h3>

        <p>Desde la terminal que utiliza <b>Bash</b> como lenguaje de programación, cree un directorio
        nuevo con el comando <b><i>mkdir</i></b> llamado "practica" que sera la carpeta de nuestra pagina
        web. Luego con el comando <b><i>touch</i></b> cree el <strong>index.html</strong> y lo abri de dos
        maneras para comenzar en este proyecto.Primero a travez del comando <b><i>code</i></b> para 
        abrirlo en VSC y luego con el comando <b><i>explorer.exe</i></b> para abrirlo en Chrome
        (el comando <b><i>"explorer.exe"</i></b> en WSL2 abre el archivo en tu navegador web predeterminado)</p>
       
            <img src="img/terminal1.jpg" alt="visualizacion grafica de la terminal con los comandos descriptos">

        <p>Para tener una representacion visual de lo que hice anteriormente, simplemente cree
        una carpeta nueva dentro de la carpeta <b>"practica"</b> llamada <b>"img"</b> para guardar todas las 
        imagenes que necesite para la web a partir de ahora.</p>

            <a href="img/terminal2.jpg" target="_blank">Ilustración visual en terminal</a>
        
        <p>Hasta el momento, los comandos que recuerdo y que mas uso en la <b>terminal</b> son los siguientes:</p>

            <ul>
                <li><b>(cd)</b>: para acceder a los directorios</li>
                <li><b>(cd ..)</b>: para salir del escritorio actual al escritorio contenedor</li>                
                <li><b>(ls)</b>: listado de elementos del escritorio actual</li>
                <li><b>(touch)</b>: para crear un archivo</li>
                <li><b>(code</b>): para abrir un archivo en VSC</li>
                <li><b>(explorer.exe)</b>: para abrir un archivo en mi explorador predeterminado</li>
                <li><b>(rm -r)</b>: para eliminar directorios/archivos (y sus variantes como rm y rm -R)</li>
                <li><b>(cat)</b>: para visualizar el contenido de un archivo en la terminal</li>
                <li><b>(clear)</b>: para limpiar la terminal (uso mayormente su atajo: Ctrl + L)</li>
                <li><b>(exit)</b>: para salir de la terminal (uso mayormente su atajo: Ctrl + C)</li>
            </ul>

    <h3>Una vez que tengo mi archivo <b>index.html</b> abierto en VSC y en Chrome,
            es hora de empezar a crear mi sitio web con lo poco que se de <B>HTML</B>.</h3>
        
        <p>Lo bueno de VSC code es que con solo escribir "! + Enter", va a generar la estructura
            básica de un archivo html como se ve a continuación.</p>
            <img src="img/vsc1.jpg" alt="visualizacion grafica de VSC del parrafo anterior">

        <p>En esta estructura basica contamos de 3 partes importantes, el tipo de documento <b>(!DOCTYPE)</b>, el <b>head</b> y el <b>body</b>.</p>
            
            <ul>
                <li><b style="color:red">!DOCTYPE</b>: Le indica al VSC el formato y version del archivo que esta abriendo, es  indispensable para que VSC entienda los tags como ordenes.</li>
                <li><b>htlm</b>: Es la etiqueta raíz que contiene todo el contenido del documento.</li>
                <li><b style="color:red"">head</b>: Contiene metadatos e informacion de la página, no es contenido visible en la página</li>
                <li><b>meta charset="UTF-8</b>: Es un metadato indispensable ya que contiene el sistema de codificación universal usado en todos los editores.</li>
                <li><b>meta name="viewport" content="width=device-width, initial-scale=1.0"</b>: Metadato que ajusta el ancho de la pagina a cada dispositivo
                                                                                                   y establece el zoom por defecto al 100%</li>
                <li><b>title</b>: Titulo del pié de página, no es contenido visible de la página pero es importante ya que los buscadores encuentran tu
                                  página a travez de el</li>
                <li><b style="color:red">body</b>: Donde se aloja todo el contenido visible de la pagina.</li>
            </ul>

                                  <!-- Aca comienza el segundo dia de mi proyecto -->
                        
            
    <h3><b>GIT y GIT-HUB</b>, este es el tema que mas complicaciones me dió, pero logré crear y subir mi primer repositorio.</h3>

        <p>Si bien cofigurar git y github no me representó un problema, entender y lograr crear un repositorio para este proyecto fue desafiante porque no entendia
            muchos comandos y no queria trabajar de la manera que me mostraban todos los tutoriales, hasta que encontre uno que me ayudo a resolverlo.
            Al final, la respuesta estaba dentro de <b>Git-Hub</b>.</p>

        <p>Al comenzar con este proyecto, no tenia git/git-hub instalados y configurados, por lo que tuve que hacer un <i><b>git init</b></i> en la carpeta de mi 
           proyecto ya creado con su index.html y su directorio img. 
           La ultima vez que intente usar git, me quedaron mas de 30mil archivos en el stage, calculo que fue por ejecurar un <i><b>git init</b></i> en el directorio 
           incorrecto. En fin, esta vez lo resolví de esta manera.</p>
           <img src="/home/emiliano/practica/img/git1.png" alt="Comandos de Git para subir un repositorio existente en nuestro ordenador a Git-Hub">

        <p>En la segunda opción vemos el primer comando <i><b>git remote add origin git@github.com:Emiliano2152/Ejemplo.git</b></i>. 
           Para que este comando no me de error, primero tuve que hacer un <i><b>git init</b></i> en la carpeta de mi proyecto "practica". 
           Tambien tuve que crear un repositorio en Git-Hub al que llame "Mi primera pagina", una vez que tenia mi repositorio Git-Hub y un archivo
           Git en mi proyecto, pude seguir los pasos que se explican en la imagen.</p>
            

                






</body>
</html>
`;

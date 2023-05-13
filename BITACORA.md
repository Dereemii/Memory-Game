# Bitácora del proyecto

Primero para comenzar inicié estudiando un poco de Graphql los primeros días de la semana debido a que mi conocimiento en esta tecnología era realizar querys y mutations pero dentro de un IDE no lo había usado en un proyecto de React desde inicio.

Estuve mirando distintas formas de implementar el llamado y finalmente decidí utilizar la librería del lado del cliente Apollo para poder hacer fetching de datos.

Posteriormente a esto hice el setup del proyecto y decidí hacerlo con Vite ya que me parece más liviano y rápido, creo que tecnologías como NextJs no aplican en este proyecto.

Agregué linter y prettier para poder ir revisando fallas que pudiese tener mi código.

Luego una vez ya tenia la query de graphql como debía duplicar los datos decidí usar nanoId() para poder dar un id único a cada uno de los elementos para no tener el problema del anti-patron al usar el id del elemento.

También cree los types poder definir los datos que vienen desde la query, en este caso investigué cuando es mejor usar types o interfaces y ahí llegué a la conclusión que en el pasado se recomendaba utilizar interfaces para todo, pero no necesariamente es lo más correcto, sin embargo va a depender de el proyecto y el acuerdo, hay varias opiniones divididas pero en general me di cuenta que se usaría más interfaces para describir clases por lo que en este proyecto verás que usé types para definir mi data.

Mi manera de trabajar es hacer e ir refactorizando a la vez, entonces a la medida que iba agregando lógica y el componente se iba haciendo muy grande, decidí ir creando por ejemplo una carpeta Utils, para colocar ahí las funciones de utilidad. Esto es para poder aplicar SOLID a los distintos componentes y no se vayan haciendo muy grandes o inmanejables.

Con respecto al manejo del estado, en un comienzo partí utilizando el useState para ir guardando la data e irla modificando, pero luego decidí implementar redux toolkit para tener mejor manejo de esta información y poder debuggear en la consola y con las herramientas que lo permite, además esto hace que la aplicación sea mas escalable.

Finalmente se crearon 3 hooks:

- UseFetchCharacters: en este hook se trae la query de graphql para tener la información almacenada, siempre traerá data distinta para que se muestren distintas cartas en el juego y se utilizó una query con la variable page para poder lograrlo.

- UseCharacters: en este hook se hace un tratamiento a la data, y se agrega el key y además de la propiedad matched que nos permitirá utilizarla para la lógica del juego, posteriormente esta información se guarda en el store de Redux para su utilización.

- UseMemoryGame: aquí va la lógica del juego y este custom hook se utiliza dos veces una vez para poder renderizar cards en el home y otro para poder renderizarlas en la parte del juego /game



Rutas:

Se uso react-router en su última versión para poder manejar las rutas, se crearon 2 rutas principales /home y /game , no se creó ruta para game-over ya que lo consideré un componente que cambia dentro, no así una ruta, este sería anindado a /game (se debe agregar a posteriori)
Se creo una errorPage en caso que hayan problemas con los componentes y una ruta de no encontrado o 404.

Componentes:

Se crearon varios componentes:

- Custom title: recibe titulos y dependiendo de donde sea renderizado y las propiedades que se le entreguen también puede recibir el numero de aciertos y turnos

- Custom Button: componente de botón que permite recibir distintas clases de estilos y rutas dependiendo de donde se vaya a utilizar

- CharacterdCard: es el componente de card que se muestra en el home y en la ruta de juego si se le pasa la propiedad isFlipped se mostrará la carta "boca a bajo" esto para la utilización en la ruta game y tiene un renderizado condicional para una clase de css que permite que la carta se voltee.

- Game y Home Container : estos son los contenedores de las vistas home y game y reciben los componentes que corresponden con sus props adecuadas, por ejemplo en el home container, se le entrega una función que ordena las cartas por id para que queden las pares una junto a la otra como en la maqueta entregada.

- Header: renderiza el logo y el H1 del juego

### Pendientes

Se instaló la librería sass para poder hacer los estilos pero no se alcanzó a implementarlo y usar variables o hacer los distintos componentes de estilo para las cartas, solo se agregaron al main.scss pero no se consideró ninguna metodología como BEM , solo se utiliza kebab-case para el nombramiento de las clases según norma.
La intención era implementar el patrón 7 - 1 con las distintas carpetas correspondientes según el caso.

Implementación de testing, se pretendía usar vitest para los test unitarios pero no se alcanzó a realizar

Ultima vista del juego : no se alcanzó a implementar la funcionalidad de los aciertos y mostrar la vista gameover cuando  finaliza el juego.

Bugs: se deben solucionar algunos bugs al jugar como por ejemplo hay un comportamiento extraño si seleccionamos una tercera carta después de la elección uno y dos , se deben hacer limitaciones en dicha parte.

Accesbilidad y semantica: faltó implementar más html semántico algunas de las normas básicas de accesibilidad, por ejemplo alt más descriptivos, se intentó siempre tener un H1 en cada sitio.
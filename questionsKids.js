const allQuestions = [
  {
    question: "¿Cuántas patas tiene una araña?",
    options: ["4 patas", "6 patas", "8 patas", "10 patas"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos dedos tiene una mano?",
    options: ["3 dedos", "4 dedos", "5 dedos", "6 dedos"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos días tiene una semana?",
    options: ["3 días", "5 días", "7 días", "9 días"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es el color que se obtiene al mezclar los colores azul y amarillo?",
    options: ["Rojo", "Verde", "Naranja", "Morado"],
    correctAnswer: 1
  },
  {
    question: "¿Cuántas estaciones del año hay?",
    options: ["2 estaciones", "3 estaciones", "4 estaciones", "5 estaciones"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántas patas tiene un perro?",
    options: ["2 patas", "4 patas", "6 patas", "8 patas"],
    correctAnswer: 1
  },
  {
    question: "¿Cuántos planetas hay en nuestro sistema solar?",
    options: ["5 planetas", "7 planetas", "8 planetas", "9 planetas"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos lados tiene un triángulo?",
    options: ["2 lados", "3 lados", "4 lados", "5 lados"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el resultado de sumar 2 + 3?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos dedos tiene un pie?",
    options: ["3 dedos", "4 dedos", "5 dedos", "6 dedos"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de España?",
    options: ["Madrid", "Barcelona", "Valencia", "Sevilla"],
    correctAnswer: 0
  },
  {
    question: "¿Cuántas provincias hay en España?",
    options: ["37 provincias", "48 provincias", "50 provincias", "52 provincias"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos días tiene el mes de marzo?",
    options: ["28 días", "29 días", "30 días", "31 días"],
    correctAnswer: 3
  },
  {
    question: "¿Cuántas sílabas tiene la palabra 'elefante'?",
    options: ["2 sílabas", "3 sílabas", "4 sílabas", "5 sílabas"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Júpiter", "Saturno", "Urano", "Neptuno"],
    correctAnswer: 0
  },
  {
    question: "¿Cuántos huesos tiene el cuerpo humano?",
    options: ["192 huesos", "206 huesos", "307 huesos", "525 huesos"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el animal más grande del mundo?",
    options: ["Elefante", "Ballena azul", "Jirafa", "Hipopótamo"],
    correctAnswer: 1
  },
  {
    question: "¿Cuántos dientes de leche tiene un niño?",
    options: ["10 dientes", "16 dientes", "20 dientes", "24 dientes"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["París", "Londres", "Berlín", "Roma"],
    correctAnswer: 0
  },
  {
    question: "¿Cuántos continentes hay en el mundo?",
    options: ["4 continentes", "5 continentes", "6 continentes", "7 continentes"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos jugadores hay en un equipo de fútbol?",
    options: ["9 jugadores", "11 jugadores", "13 jugadores", "15 jugadores"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el animal que vuela más alto?",
    options: ["Águila", "Murciélago", "Colibrí", "Buítre"],
    correctAnswer: 0
  },
  {
    question: "¿Cuántas patas tiene una mariposa?",
    options: ["2 patas", "4 patas", "6 patas", "8 patas"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos segundos hay en un minuto?",
    options: ["30 segundos", "45 segundos", "60 segundos", "75 segundos"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    options: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos lados tiene un cuadrado?",
    options: ["2 lados", "3 lados", "4 lados", "5 lados"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos colores tiene el arcoíris?",
    options: ["3 colores", "5 colores", "7 colores", "9 colores"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos años tiene un lustro?",
    options: ["3 años", "5 años", "7 años", "10 años"],
    correctAnswer: 1
  },
  {
    question: "¿Cuántas provincias hay en Andalucía?",
    options: ["4 provincias", "6 provincias", "8 provincias", "10 provincias"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Italia?",
    options: ["París", "Londres", "Roma", "Berlín"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos dientes tiene un adulto?",
    options: ["20 dientes", "28 dientes", "32 dientes", "36 dientes"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es el resultado de restar 9 - 5?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántas horas hay en un día?",
    options: ["12 horas", "18 horas", "24 horas", "30 horas"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Alemania?",
    options: ["París", "Londres", "Berlín", "Roma"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos lados tiene un pentágono?",
    options: ["3 lados", "4 lados", "5 lados", "6 lados"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es el continente más poblado del mundo?",
    options: ["Asia", "África", "Europa", "América"],
    correctAnswer: 0
  },
  {
    question: "¿Cuántas alas tiene una oveja?",
    options: ["ninguna", "1 ala", "2 alas", "4 alas"],
    correctAnswer: 0
  },
  {
    question: "¿Cuántos kilómetros son 2000 metros?",
    options: ["1 kilómetro", "0.2 kilómetros", "2 kilómetros", "20 kilómetros"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántas sílabas tiene la palabra 'coche'?",
    options: ["1 sílaba", "2 sílabas", "3 sílabas", "4 sílabas"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el ave que no puede volar?",
    options: ["Pingüino", "Águila", "Búho", "Colibrí"],
    correctAnswer: 0
  },
  {
    question: "¿Cuántos lados tiene un hexágono?",
    options: ["4 lados", "5 lados", "6 lados", "7 lados"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos días tiene un año bisiesto?",
    options: ["365 días", "366 días", "367 días", "368 días"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la capital de Estados Unidos?",
    options: ["Washington D.C.", "Nueva York", "Los Ángeles", "Chicago"],
    correctAnswer: 0
  },
  {
    question: "¿Cuántos lados tiene un octógono?",
    options: ["6 lados", "7 lados", "8 lados", "9 lados"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos huesos tiene la columna vertebral?",
    options: ["12 huesos", "24 huesos", "33 huesos", "42 huesos"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es el resultado de multiplicar 8 x 7?",
    options: ["47", "52", "56", "58"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es el animal terrestre más rápido del mundo?",
    options: ["Guepardo", "León", "Tortuga", "Elefante"],
    correctAnswer: 0
  },
  {
    question: "¿Cuántos metros hay en un kilómetro?",
    options: ["100 metros", "500 metros", "1000 metros", "1500 metros"],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es el resultado de multiplicar 6 x 4?",
    options: ["18", "20", "24", "30"],
    correctAnswer: 2
  },
  {
    question: "¿Cuántos jugadores hay en un equipo de baloncesto?",
    options: ["4 jugadores", "5 jugadores", "6 jugadores", "7 jugadores"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál de estas provincias no pertenece a la Comunidad Autónoma de Castilla y León?",
    options: ["Soria", "Palencia", "Lugo", "Valladolid"],
    correctAnswer: 2
  },
  {
    question: '¿Cuántas comunidades autónomas hay en España?',
    options: ['17', '10', '12', '20'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la moneda utilizada en España?',
    options: ['Euro', 'Dólar', 'Libra', 'Yen'],
    correctAnswer: 0
  },
  {
    question: '¿Qué océano baña las costas de España al oeste?',
    options: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el símbolo del euro?',
    options: ['€', '$', '£', '¥'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la festividad más importante de España, celebrada el 12 de octubre?',
    options: ['Día de la Hispanidad', 'Día de la Constitución', 'Día del Trabajo', 'Día de la Independencia'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el río más largo de la Península Ibérica?',
    options: ['Río Tajo', 'Río Ebro', 'Río Duero', 'Río Guadalquivir'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el clima predominante en la mayor parte de España?',
    options: ['Mediterráneo', 'Tropical', 'Polar', 'Desértico'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año llegó Cristóbal Colón a América?',
    options: ['1492', '1500', '1521', '1607'],
    correctAnswer: 0
  },
  {
    question: '¿Qué civilización construyó las pirámides de Egipto?',
    options: ['Antiguo Egipto', 'Imperio Romano', 'Antigua Grecia', 'Imperio Inca'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue la primera civilización en la antigua Mesopotamia?',
    options: ['Sumerios', 'Persas', 'Egipcios', 'Griegos'],
    correctAnswer: 0
  },
  {
    question: '¿En qué siglo tuvo lugar la Revolución Francesa?',
    options: ['Siglo XVIII', 'Siglo XIX', 'Siglo XVI', 'Siglo XVII'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue el período de la historia de España en el que gran parte estuvo ocupada por los musulmanes?',
    options: ['Edad Media', 'Renacimiento', 'Revolución Industrial', 'Edad Contemporánea'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año llego el hombre a la luna?',
    options: ['1969', '1945', '1971', '1982'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue el imperio que conquistó gran parte de Europa, Asia y África durante el siglo I?',
    options: ['Imperio Mongol', 'Imperio Romano', 'Imperio Bizantino', 'Imperio Otomano'],
    correctAnswer: 1
  },
  {
    question: '¿Que invento revoluciono la sociedad europea en la edad contemporánea?',
    options: ['La imprenta', 'La máquina de vapor', 'La rueda', 'El comercio'],
    correctAnswer: 1
  },
  {
    question: '¿Cuántos metros hay en un kilómetro?',
    options: ['1000', '100', '10', '0.1'],
    correctAnswer: 0
  },
  {
    question: '¿Cuántos centímetros hay en un metro?',
    options: ['100', '10', '1', '0.01'],
    correctAnswer: 0
  },
  {
    question: '¿Cuántos litros hay en un decilitro?',
    options: ['0.1', '1', '10', '100'],
    correctAnswer: 0
  },
  {
    question: '¿Cuántos miligramos hay en un gramo?',
    options: ['1000', '100', '10', '0.1'],
    correctAnswer: 0
  },
  {
    question: '¿Cuántos kilogramos hay en una decagramo?',
    options: ['1000', '100', '10', '0.1'],
    correctAnswer: 1
  },
  {
    question: '¿Cuántos mililitros hay en un litro?',
    options: ['1000', '100', '10', '0.1'],
    correctAnswer: 0
  },
  {
    question: '¿Cuántos gramos hay en un kilogramo?',
    options: ['1000', '100', '10', '0.1'],
    correctAnswer: 0
  },
  {
    question: '¿Cuántos minutos hay en una hora?',
    options: ['60', '6', '10', '100'],
    correctAnswer: 0
  },
  {
    question: '¿Cuántos días hay en una semana?',
    options: ['7', '5', '10', '12'],
    correctAnswer: 0
  },
  {
    question: '¿Cuántos segundos hay en un minuto?',
    options: ['60', '6', '10', '100'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto es 8 + 4?',
    options: ['12', '16', '8', '4'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto es 5 x 3?',
    options: ['15', '8', '3', '20'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto es 10 - 7?',
    options: ['3', '7', '10', '17'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto es 16 ÷ 4?',
    options: ['4', '8', '16', '2'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto es 9 + 6?',
    options: ['15', '9', '6', '14'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto es 7 x 2?',
    options: ['14', '9', '7', '21'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto es 12 - 9?',
    options: ['3', '9', '12', '21'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto es 18 ÷ 6?',
    options: ['3', '9', '18', '6'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto es 5 + 8?',
    options: ['13', '5', '8', '10'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto es 4 x 3?',
    options: ['12', '7', '3', '16'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la forma pasada del verbo "caminar"?',
    options: ['Caminó', 'Camino', 'Caminaba', 'Caminé'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la forma pasada del verbo "comer"?',
    options: ['Comió', 'Come', 'Comía', 'Comí'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la forma pasada del verbo "cantar"?',
    options: ['Cantó', 'Canta', 'Cantaba', 'Canté'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la forma pasada del verbo "escribir"?',
    options: ['Escribió', 'Escribe', 'Escribía', 'Escribí'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la forma pasada del verbo "tener"?',
    options: ['Tuvo', 'Tiene', 'Tenía', 'Tuve'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la forma pasada del verbo "hacer"?',
    options: ['Hizo', 'Hace', 'Hacía', 'Hice'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la forma pasada del verbo "ir"?',
    options: ['Fue', 'Va', 'Iba', 'Fui'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la forma pasada del verbo "ver"?',
    options: ['Vio', 'Ve', 'Veía', 'Vi'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la forma pasada del verbo "decir"?',
    options: ['Dijo', 'Dice', 'Decía', 'Dije'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la forma pasada del verbo "venir"?',
    options: ['Vino', 'Viene', 'Venía', 'Vine'],
    correctAnswer: 0
  },
  {
    question: '¿El verbo "saltar" es regular o irregular?',
    options: ['Regular', 'Irregular', 'No lo sé', 'Ambas'],
    correctAnswer: 0
  },
  {
    question: '¿El verbo "bailar" es regular o irregular?',
    options: ['Regular', 'Irregular', 'No lo sé', 'Ambas'],
    correctAnswer: 0
  },
  {
    question: '¿El verbo "correr" es regular o irregular?',
    options: ['Regular', 'Irregular', 'No lo sé', 'Ambas'],
    correctAnswer: 0
  },
  {
    question: '¿El verbo "beber" es regular o irregular?',
    options: ['Regular', 'Irregular', 'No lo sé', 'Ambas'],
    correctAnswer: 1
  },
  {
    question: '¿El verbo "escribir" es regular o irregular?',
    options: ['Regular', 'Irregular', 'No lo sé', 'Ambas'],
    correctAnswer: 1
  },
  {
    question: '¿El verbo "cantar" es regular o irregular?',
    options: ['Regular', 'Irregular', 'No lo sé', 'Ambas'],
    correctAnswer: 0
  },
  {
    question: '¿El verbo "tener" es regular o irregular?',
    options: ['Regular', 'Irregular', 'No lo sé', 'Ambas'],
    correctAnswer: 1
  },
  {
    question: '¿El verbo "leer" es regular o irregular?',
    options: ['Regular', 'Irregular', 'No lo sé', 'Ambas'],
    correctAnswer: 1
  },
  {
    question: '¿El verbo "comer" es regular o irregular?',
    options: ['Regular', 'Irregular', 'No lo sé', 'Ambas'],
    correctAnswer: 1
  },
  {
    question: '¿El verbo "aprender" es regular o irregular?',
    options: ['Regular', 'Irregular', 'No lo sé', 'Ambas'],
    correctAnswer: 1
  },
  {
    question: '¿Cuál fue la capital del Imperio Romano durante la mayor parte de su existencia?',
    options: ['Roma', 'Atenas', 'Cartago', 'Constantinopla'],
    correctAnswer: 0
  },
  {
    question: '¿Qué tipo de gobierno tenía el Imperio Romano?',
    options: ['Monarquía', 'República', 'Dictadura', 'Anarquía'],
    correctAnswer: 2
  },
  {
    question: '¿Qué idioma se hablaba en el Imperio Romano?',
    options: ['Latín', 'Griego', 'Hebreo', 'Celta'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál era la principal religión del Imperio Romano en sus primeros siglos?',
    options: ['Cristianismo', 'Judaísmo', 'Zoroastrismo', 'Mitología romana'],
    correctAnswer: 3
  },
  {
    question: '¿Cuál era la principal actividad económica en el Imperio Romano?',
    options: ['Agricultura', 'Comercio', 'Minería', 'Artesanía'],
    correctAnswer: 1
  },
  {
    question: '¿Cuál era la principal vía terrestre de transporte en el Imperio Romano?',
    options: ['Carros de caballos', 'Barcos', 'Trenes', 'Caminos y calzadas'],
    correctAnswer: 3
  },
  {
    question: '¿Cuál de estos edificios no pertenece a la época del Imperio Romano?',
    options: ['Foro', 'Baños', 'Circo', 'Catedral'],
    correctAnswer: 3
  },
  {
    question: '¿Cuál de los siguientes períodos se caracteriza por la aparición de la agricultura y la domesticación de animales?',
    options: ['Paleolítico', 'Neolítico', 'Edad del Bronce', 'Edad del Hierro'],
    correctAnswer: 1
  },
  {
    question: 'Durante el Paleolítico, los seres humanos eran principalmente:',
    options: ['Cazadores y recolectores', 'Agricultores', 'Artesanos', 'Comerciantes'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál de los siguientes avances tecnológicos se asoció principalmente con el Neolítico?',
    options: ['Invención de la rueda', 'Desarrollo de la escritura', 'Creación de herramientas de piedra pulida', 'Utilización del fuego'],
    correctAnswer: 2
  },
  {
    question: '¿Qué tipo de viviendas solían construir los seres humanos durante el Paleolítico?',
    options: ['Cuevas y refugios naturales', 'Casas de adobe', 'Tiendas de campaña', 'Casas de madera'],
    correctAnswer: 0
  },
  {
    question: 'Durante el Neolítico, los seres humanos comenzaron a vivir en asentamientos permanentes llamados:',
    options: ['Aldeas', 'Ciudades', 'Fortalezas', 'Campamentos'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál de los siguientes materiales fue utilizado para hacer herramientas durante el Paleolítico?',
    options: ['Piedra', 'Metal', 'Plástico', 'Madera'],
    correctAnswer: 0
  },
  {
    question: 'Uno de los avances más significativos del Neolítico fue la invención de la agricultura. ¿Qué cultivos empezaron a cultivar los seres humanos?',
    options: ['Trigo, cebada y legumbres', 'Patatas y maíz', 'Arroz y soja', 'Caña de azúcar y algodón'],
    correctAnswer: 0
  },
  {
    question: 'El Neolítico marcó el inicio de la producción de alimentos en lugar de la recolección. ¿Qué ventajas trajo consigo este cambio?',
    options: ['Mayor disponibilidad de alimentos', 'Menor necesidad de desplazamiento', 'Mayor control sobre el entorno', 'Todas las anteriores'],
    correctAnswer: 3
  },
  {
    question: 'Durante el Paleolítico, los seres humanos dependían directamente de la naturaleza para obtener:',
    options: ['Alimentos', 'Ropa', 'Refugio', 'Dinero'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa "hello" en español?',
    options: ['Hola', 'Adiós', 'Por favor', 'Gracias'],
    correctAnswer: 0
  },
  {
    question: 'Completa la frase: "How are ___?"',
    options: ['you', 'he', 'it', 'I'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa "goodbye" en español?',
    options: ['Adiós', 'Hola', 'Por favor', 'Gracias'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa "thank you" en español?',
    options: ['Gracias', 'Perdón', 'Por favor', 'Hola'],
    correctAnswer: 0
  },
  {
    question: 'Completa la frase: "My favorite color is ___"',
    options: ['blue', 'eat', 'run', 'car'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa "please" en español?',
    options: ['Por favor', 'Adiós', 'Hola', 'Gracias'],
    correctAnswer: 0
  },
  {
    question: 'Completa la frase: "I have ___"',
    options: ['a dog', 'dog', 'I', 'favourite'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa "yes" en español?',
    options: ['Sí', 'No', 'Tal vez', 'Quizás'],
    correctAnswer: 0
  },
  {
    question: 'Completa la frase: "I can ___"',
    options: ['run', 'car', 'ball', 'men'],
    correctAnswer: 0
  },
  {
    question: 'Completa la frase: "My name ___ Mary"',
    options: ['is', 'am', 'are', 'be'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa "cat" en español?',
    options: ['Gato', 'Perro', 'Pájaro', 'Pez'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa "school" en español?',
    options: ['Escuela', 'Casa', 'Parque', 'Tienda'],
    correctAnswer: 0
  },
  {
    question: 'Completa la frase: "I ___ to the park"',
    options: ['go', 'goes', 'going', 'went'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa "friend" en español?',
    options: ['Amigo', 'Hermano', 'Padre', 'Abuelo'],
    correctAnswer: 0
  },
  {
    question: 'Completa la frase: "We ___ a picnic"',
    options: ['have', 'has', 'had', 'having'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa "apple" en español?',
    options: ['Manzana', 'Plátano', 'Naranja', 'Uva'],
    correctAnswer: 0
  },
  {
    question: 'Completa la frase: "He ___ a bike"',
    options: ['has', 'have', 'had', 'having'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa "happy" en español?',
    options: ['Feliz', 'Triste', 'Enojado', 'Asustado'],
    correctAnswer: 0
  },
  {
    question: 'What is the process by which plants convert sunlight into food called?',
    options: ['Photosynthesis', 'Respiration', 'Germination', 'Transpiration'],
    correctAnswer: 0
  },
  {
    question: 'What is the process by which water changes from a liquid to a gas called?',
    options: ['Condensation', 'Evaporation', 'Precipitation', 'Sublimation'],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el proceso mediante el cual las plantas producen su propio alimento utilizando la luz solar?",
    options: ["Fotosíntesis", "Respiración", "Transpiración", "Germinación"],
    correctAnswer: 0
  },  
  {
    question: "¿Qué gas absorben las plantas de la atmósfera durante la fotosíntesis?",
    options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"],
    correctAnswer: 1
  },  
  {
    question: "¿Qué pigmento le da a las plantas su color verde y es esencial para la fotosíntesis?",
    options: ["Clorofila", "Caroteno", "Melanina", "Hemoglobina"],
    correctAnswer: 0
  },  
  {
    question: "¿En qué parte de una planta ocurre la mayoría de la fotosíntesis?",
    options: ["Raíces", "Tallo", "Hojas", "Flores"],
    correctAnswer: 2
  },
  {
  question: "¿Qué parte de la planta se utiliza comúnmente para almacenar alimentos?",
  options: ["Hojas", "Tallo", "Raíces", "Flores"],
  correctAnswer: 2
  },  
  {
    question: "¿Cuál es el proceso mediante el cual las plantas liberan vapor de agua a través de pequeños orificios en las hojas?",
    options: ["Fotosíntesis", "Respiración", "Transpiración", "Germinación"],
    correctAnswer: 2
  },  
  {
    question: "¿Cuál de los siguientes no es un tipo de planta vascular?",
    options: ["Musgo", "Helecho", "Pino", "Rosa"],
    correctAnswer: 0
  },  
  {
    question: "¿Cuál es el nombre de la sustancia cerosa que ayuda a prevenir la pérdida de agua en las hojas de algunas plantas?",
    options: ["Clorofila", "Cutícula", "Xilema", "Florema"],
    correctAnswer: 1
  },  
  {
    question: "¿Qué proceso es responsable de la reproducción de muchas plantas a través de la transferencia de polen?",
    options: ["Fotosíntesis", "Polinización", "Germinación", "Transpiración"],
    correctAnswer: 1
  }
];

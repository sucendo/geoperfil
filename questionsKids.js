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
    question: "¿Cuál es el color primario que se obtiene mezclando azul y amarillo?",
    options: ["Rojo", "Verde", "Naranja", "Morado"],
    correctAnswer: 2
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
    correctAnswer: 0
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
    options: ["100 huesos", "206 huesos", "300 huesos", "500 huesos"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el animal más grande del mundo?",
    options: ["Elefante", "Ballena azul", "Jirafa", "Hipopótamo"],
    correctAnswer: 1
  },
  {
    question: "¿Cuántos dientes temporales tiene un niño?",
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
    correctAnswer: 3
  },
  {
    question: "¿Cuántos jugadores hay en un equipo de fútbol?",
    options: ["9 jugadores", "11 jugadores", "13 jugadores", "15 jugadores"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el animal que vuela más alto?",
    options: ["Aguila", "Murciélago", "Colibrí", "Águila real"],
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
    question: "¿Cuántas alas tiene una abeja?",
    options: ["1 ala", "2 alas", "4 alas", "6 alas"],
    correctAnswer: 1
  },
  {
    question: "¿Cuántos kilómetros hay en una milla?",
    options: ["1 kilómetro", "1.5 kilómetros", "2 kilómetros", "2.5 kilómetros"],
    correctAnswer: 1
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
    question: "¿Cuántas horas hay en un minuto?",
    options: ["30 horas", "45 horas", "60 horas", "75 horas"],
    correctAnswer: 2
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
    question: "¿Cuál es el animal más rápido del mundo?",
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
    question: "¿Cuántos continentes hay en el mundo?",
    options: ["4 continentes", "5 continentes", "6 continentes", "8 continentes"],
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
];

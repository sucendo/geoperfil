// Array con todas las preguntas del quiz
const allQuestions = [
  {
    question: '¿Cuál es la capital de Francia?',
    options: ['Londres', 'París', 'Madrid', 'Roma'],
    correctAnswer: 1
  },
  {
    question: '¿Cuántos planetas hay en el sistema solar?',
    options: ['5', '7', '8', '9'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál es el río más largo del mundo?',
    options: ['Nilo', 'Amazonas', 'Yangtsé', 'Mississippi'],
    correctAnswer: 1
  },
  {
    question: '¿Cuál es la montaña más alta del mundo?',
    options: ['Monte Everest', 'Monte Kilimanjaro', 'Monte McKinley', 'Monte Aconcagua'],
    correctAnswer: 0
  },
  {
    question: '¿Quién pintó la Mona Lisa?',
    options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el océano más grande del mundo?',
    options: ['Océano Atlántico', 'Océano Pacífico', 'Océano Índico', 'Océano Ártico'],
    correctAnswer: 1
  },
  {
    question: '¿Cuál es el país más poblado del mundo?',
    options: ['China', 'India', 'Estados Unidos', 'Rusia'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el quinto planeta en el sistema solar comenzando desde el Sol?',
    options: ['Júpiter', 'Venus', 'Marte', 'Saturno'],
    correctAnswer: 0
  },
  {
    question: '¿Quién escribió "Don Quijote de la Mancha"?',
    options: ['Miguel de Cervantes', 'Gabriel García Márquez', 'Jorge Luis Borges', 'Pablo Neruda'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la fórmula química del agua?',
    options: ['H2O', 'CO2', 'NaCl', 'O2'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el animal terrestre más grande del mundo?',
    options: ['Elefante africano', 'Ballena azul', 'Jirafa', 'Oso polar'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el autor de la novela "Cien años de soledad"?',
    options: ['Gabriel García Márquez', 'Pablo Neruda', 'Jorge Luis Borges', 'Julio Cortázar'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el idioma más hablado en el mundo?',
    options: ['Mandarín', 'Inglés', 'Español', 'Hindi'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el metal más abundante en la corteza terrestre?',
    options: ['Aluminio', 'Hierro', 'Oro', 'Cobre'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la capital de Australia?',
    options: ['Sídney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál es la fórmula química del dióxido de carbono?',
    options: ['CO2', 'H2O', 'NaCl', 'O2'],
    correctAnswer: 0
  },
  {
    question: '¿Quién escribió "Romeo y Julieta"?',
    options: ['William Shakespeare', 'Friedrich Nietzsche', 'Charles Dickens', 'Jane Austen'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la capital de Brasil?',
    options: ['Río de Janeiro', 'São Paulo', 'Brasilia', 'Buenos Aires'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál es el metal líquido a temperatura ambiente?',
    options: ['Mercurio', 'Plomo', 'Cobre', 'Estaño'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país más grande del mundo en términos de superficie?',
    options: ['Rusia', 'China', 'Estados Unidos', 'Canadá'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el metal más ligero?',
    options: ['Aluminio', 'Plata', 'Titanio', 'Cobre'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año comenzó la Segunda Guerra Mundial?',
    options: ['1939', '1941', '1945', '1947'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el instrumento musical más grande de la orquesta?',
    options: ['Contrabajo', 'Trombón', 'Tuba', 'Violonchelo'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál es la velocidad de la luz en el vacío?',
    options: ['299,792,458 metros por segundo', '300,000,000 metros por segundo', '280,000,000 metros por segundo', '310,000,000 metros por segundo'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el único mamífero capaz de volar?',
    options: ['Murciélago', 'Ardilla', 'Pájaro carpintero', 'Pterodáctilo'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año se fundó la empresa Apple?',
    options: ['1976', '1984', '1991', '2001'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el elemento químico con el símbolo "Fe"?',
    options: ['Hierro', 'Plomo', 'Cobre', 'Estaño'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la capital de Japón?',
    options: ['Tokio', 'Kioto', 'Osaka', 'Hiroshima'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el autor de la obra "Hamlet"?',
    options: ['William Shakespeare', 'Friedrich Nietzsche', 'Charles Dickens', 'Jane Austen'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el río más largo de África?',
    options: ['Nilo', 'Congo', 'Zambeze', 'Níger'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el elemento químico más abundante en el universo?',
    options: ['Hidrógeno', 'Oxígeno', 'Helio', 'Carbono'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la capital de Argentina?',
    options: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el pintor famoso del período renacentista italiano conocido como "El Divino"?',
    options: ['Rafael', 'Miguel Ángel', 'Leonardo da Vinci', 'Donatello'],
    correctAnswer: 2
  },
  {
    question: '¿En qué año Neil Armstrong pisó la Luna por primera vez?',
    options: ['1969', '1971', '1967', '1973'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la montaña más alta de África?',
    options: ['Kilimanjaro', 'Everest', 'Aconcagua', 'Denali'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la moneda oficial de México?',
    options: ['Peso', 'Dólar', 'Euro', 'Yen'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la montaña más alta del hemisferios sur?',
    options: ['Kilimanjaro', 'Ojos del Salado', 'Aconcagua', 'Kanchenjunga'],
    correctAnswer: 2
  },
  {
    question: '¿Quién escribió la famosa novela "1984"?',
    options: ['George Orwell', 'Ray Bradbury', 'Aldous Huxley', 'Fyodor Dostoyevsky'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el hueso más largo del cuerpo humano?',
    options: ['Fémur', 'Húmero', 'Tibia', 'Radio'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país más pequeño del mundo?',
    options: ['Nauru', 'Ciudad del Vaticano', 'Mónaco', 'Tuvalu'],
    correctAnswer: 1
  },
  {
    question: '¿Cuál es el desierto más grande del mundo?',
    options: ['Sahara', 'Gobi', 'Kalahari', 'Atacama'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el escritor de la novela "Moby-Dick"?',
    options: ['Herman Melville', 'Mark Twain', 'Jules Verne', 'Charles Dickens'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año se inauguró el Canal de Panamá?',
    options: ['1914', '1905', '1921', '1930'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el metal precioso más valioso?',
    options: ['Oro', 'Plata', 'Platino', 'Paladio'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país más pequeño de América del Sur?',
    options: ['Surinam', 'Uruguay', 'Guyana', 'Ecuador'],
    correctAnswer: 1
  },
  {
    question: '¿Quién escribió "Crimen y castigo"?',
    options: ['Fyodor Dostoyevsky', 'Leo Tolstoy', 'Anton Chekhov', 'Ivan Turgenev'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el océano más profundo del mundo?',
    options: ['Océano Pacífico', 'Océano Atlántico', 'Océano Índico', 'Océano Ártico'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la capital de Sudáfrica?',
    options: [ 'Bloemfontein', 'Ciudad del Cabo', 'Pretoria', 'Johannesburgo'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál es el autor de "Los tres mosqueteros"?',
    options: ['Émile Zola', 'Victor Hugo', 'Gustave Flaubert', 'Alexandre Dumas'],
    correctAnswer: 3
  },
  {
    question: '¿Cuál es el elemento químico con el símbolo "K"?',
    options: ['Potasio', 'Sodio', 'Calcio', 'Magnesio'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la capital de España?',
    options: ['Londres', 'París', 'Madrid', 'Roma'],
    correctAnswer: 2
  },
  {
    question: '¿Cuántos continentes hay en el mundo?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál es el océano más grande del mundo?',
    options: ['Océano Atlántico', 'Océano Pacífico', 'Océano Índico', 'Océano Ártico'],
    correctAnswer: 1
  },
  {
    question: '¿Quién escribió "Orgullo y prejuicio"?',
    options: ['Jane Austen', 'Emily Brontë', 'Charlotte Brontë', 'Virginia Woolf'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país más poblado de Europa?',
    options: ['Rusia', 'Alemania', 'Francia', 'Reino Unido'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el autor de "El Gran Gatsby"?',
    options: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'Mark Twain', 'J.D. Salinger'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el elemento químico con el símbolo "Ag"?',
    options: ['Plata', 'Oro', 'Cobre', 'Aluminio'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el río más largo de América del Norte?',
    options: ['Misisipi', 'Mackenzie', 'Yukón', 'San Lorenzo'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la moneda oficial de Japón?',
    options: ['Yen', 'Dólar', 'Euro', 'Libra'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el animal terrestre más rápido del mundo?',
    options: ['Guepardo', 'León', 'Águila', 'Caballo'],
    correctAnswer: 0
  }
];

// Elementos del DOM
const root = document.getElementById('root');
const quizContainer = document.createElement('div');
quizContainer.classList.add('quiz-container');
root.appendChild(quizContainer);

let currentQuestionIndex = 0; // Índice de la pregunta actual
let remainingQuestions = 10; // Número de preguntas restantes
let quizQuestions = []; // Preguntas para el juego actual

// Función para iniciar el juego
function startGame() {
  allQuestions.forEach((question) => {
    question.used = false;
  });
  currentQuestionIndex = 0;
  remainingQuestions = 10;
  quizQuestions = getRandomQuestions(remainingQuestions);
  showQuestion();
}

// Función para obtener un conjunto de preguntas aleatorias
function getRandomQuestions(count) {
  const availableQuestions = allQuestions.filter((question) => !question.used);
  const shuffledQuestions = shuffleArray(availableQuestions);
  return shuffledQuestions.slice(0, count);
}

// Función para mostrar la pregunta actual
function showQuestion() {
  const question = quizQuestions[currentQuestionIndex];

  const questionElement = document.createElement('div');
  questionElement.classList.add('question');
  questionElement.innerHTML = `<h3>${currentQuestionIndex + 1}. ${question.question}</h3>`;

  question.options.forEach(function(option, optionIndex) {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.innerHTML = `
      <input type="radio" id="option-${optionIndex}" name="question" value="${optionIndex}">
      <label for="option-${optionIndex}">${option}</label>
    `;
    questionElement.appendChild(optionElement);
  });

  const nextButton = document.createElement('button');
  nextButton.innerText = 'Siguiente';
  nextButton.addEventListener('click', handleNext);
  questionElement.appendChild(nextButton);

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
}

// Función para mezclar un array utilizando el algoritmo de Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Función para manejar el evento de siguiente pregunta
function handleNext() {
  const selectedOption = document.querySelector('input[name="question"]:checked');

  if (selectedOption) {
    const userAnswer = parseInt(selectedOption.value);
    const currentQuestion = quizQuestions[currentQuestionIndex];
    currentQuestion.userAnswer = userAnswer;
    currentQuestion.used = true;

    currentQuestionIndex++;
    remainingQuestions--;

    if (remainingQuestions > 0) {
      showQuestion();
    } else {
      showResults();
    }
  } else {
    alert('Por favor, selecciona una opción.');
  }
}

// Función para mostrar los resultados
function showResults() {
  quizContainer.innerHTML = '<h2>Resultados</h2>';

  let correctCount = 0;

  quizQuestions.forEach(function(question, index) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('result');
    questionElement.innerHTML = `<h3>${index + 1}. ${question.question}</h3>`;

    const userAnswer = question.hasOwnProperty('userAnswer') ? question.userAnswer : null;
    const correctAnswer = question.correctAnswer;
    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
      correctCount++;
      questionElement.classList.add('correct');
    } else {
      questionElement.classList.add('incorrect');
    }

    const options = question.options.map(function(option, optionIndex) {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerHTML = `
        <input type="radio" id="result-option-${optionIndex}" name="result-question-${index}" disabled>
        <label for="result-option-${optionIndex}">${option}</label>
      `;

      if (optionIndex === userAnswer) {
        optionElement.classList.add('selected');
      }

      if (optionIndex === correctAnswer) {
        optionElement.classList.add('correct-answer');
      }

      return optionElement;
    });

    options.forEach(function(option) {
      questionElement.appendChild(option);
    });

    quizContainer.appendChild(questionElement);
  });

  const scoreElement = document.createElement('p');
  scoreElement.classList.add('score');
  scoreElement.innerText = `Obtuviste ${correctCount} respuestas correctas de ${currentQuestionIndex}.`;
  quizContainer.appendChild(scoreElement);
}

// Iniciar el juego al cargar la página
startGame();

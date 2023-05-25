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
    options: ['Ciudad del Vaticano', 'Mónaco', 'Nauru', 'Tuvalu'],
    correctAnswer: 0
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
    options: ['Surinam', 'Uruguay', 'Guyana', 'Surinam'],
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
    options: ['Pretoria', 'Ciudad del Cabo', 'Bloemfontein', 'Johannesburgo'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el autor de "Los tres mosqueteros"?',
    options: ['Alexandre Dumas', 'Victor Hugo', 'Gustave Flaubert', 'Émile Zola'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el elemento químico con el símbolo "K"?',
    options: ['Potasio', 'Sodio', 'Calcio', 'Magnesio'],
    correctAnswer: 0
  }
];


// Función para obtener una selección aleatoria de preguntas
function getRandomQuestions(totalQuestions) {
  const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, totalQuestions);
}

// Función para cargar el contenido del quiz en el contenedor
function loadQuiz(container) {
  container.innerHTML = '';

  const totalQuestions = 10;
  const questions = getRandomQuestions(totalQuestions);

  // Generar las preguntas y opciones del quiz
  questions.forEach(function(question, index) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<h3>${index + 1}. ${question.question}</h3>`;

    question.options.forEach(function(option, optionIndex) {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerHTML = `
        <input type="radio" id="option-${index}-${optionIndex}" name="question-${index}" value="${optionIndex}">
        <label for="option-${index}-${optionIndex}">${option}</label>
      `;
      questionElement.appendChild(optionElement);
    });

    container.appendChild(questionElement);
  });

  // Agregar botón de envío de respuestas
  const submitButton = document.createElement('button');
  submitButton.innerText = 'Enviar Respuestas';
  submitButton.addEventListener('click', checkAnswers);
  container.appendChild(submitButton);
}

// Función para verificar las respuestas seleccionadas por el usuario
function checkAnswers() {
  const answerElements = document.querySelectorAll('input[type="radio"]:checked');
  const userAnswers = Array.from(answerElements).map(function(element) {
    return parseInt(element.value);
  });

  let correctCount = 0;
  userAnswers.forEach(function(userAnswer, index) {
    const question = questions[index];
    if (userAnswer === question.correctAnswer) {
      correctCount++;
    }
  });

  const resultMessage = `Obtuviste ${correctCount} respuestas correctas de ${questions.length}.`;
  alert(resultMessage);
}

// Exportar la función loadQuiz para poder utilizarla en main.js
export { loadQuiz };

/*
// Elementos del DOM
const root = document.getElementById('root');
const quizContainer = document.createElement('div');
quizContainer.classList.add('quiz-container');
root.appendChild(quizContainer);

let currentQuestionIndex = 0; // Índice de la pregunta actual
let remainingQuestions = 10; // Número de preguntas restantes

// Función para iniciar el juego
function startGame() {
  currentQuestionIndex = 0;
  remainingQuestions = 10;
  showQuestion();
}

// Función para mostrar la pregunta actual
function showQuestion() {
  const question = getRandomQuestion();

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

// Función para obtener una pregunta aleatoria del conjunto de preguntas disponibles
function getRandomQuestion() {
  const availableQuestions = allQuestions.slice(currentQuestionIndex);
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  return availableQuestions[randomIndex];
}

// Función para manejar el evento de siguiente pregunta
function handleNext() {
  const selectedOption = document.querySelector('input[name="question"]:checked');

  if (selectedOption) {
    const userAnswer = parseInt(selectedOption.value);
    const currentQuestion = getRandomQuestion();
    currentQuestion.userAnswer = userAnswer;

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

  allQuestions.forEach(function(question, index) {
    if (index < currentQuestionIndex) {
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
    }
  });

  const scoreElement = document.createElement('p');
  scoreElement.classList.add('score');
  scoreElement.innerText = `Obtuviste ${correctCount} respuestas correctas de ${currentQuestionIndex}.`;
  quizContainer.appendChild(scoreElement);
}

// Iniciar el juego al cargar la página
startGame();
*/

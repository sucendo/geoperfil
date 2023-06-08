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
  },
  {
    question: '¿Cuál es la capital de Canadá?',
    options: ['Toronto', 'Montreal', 'Ottawa', 'Vancouver'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál es el autor de "La Odisea"?',
    options: ['Homero', 'Platón', 'Sófocles', 'Eurípides'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país más grande de América del Sur?',
    options: ['Brasil', 'Argentina', 'Perú', 'Colombia'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el quinto elemento químico en la tabla periódica?',
    options: ['Litio', 'Berilio', 'Boro', 'Carbono'],
    correctAnswer: 2
  },
  {
    question: '¿Quién pintó "La noche estrellada"?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Claude Monet', 'Salvador Dalí'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año ocurrió la Guerra Civil Española?',
    options: ['1936-1939', '1940-1943', '1939-1945', '1945-1949'],
    correctAnswer: 0
  },
  {
    question: '¿Quién fue el dictador de España durante gran parte del siglo XX?',
    options: ['Francisco Franco', 'Juan Carlos I', 'Adolfo Suárez', 'Felipe VI'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue el último territorio español en América en obtener su independencia?',
    options: ['Cuba', 'México', 'Argentina', 'Puerto Rico'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la fecha del "Día de la Hispanidad" en España?',
    options: ['12 de octubre', '1 de mayo', '6 de diciembre', '25 de abril'],
    correctAnswer: 0
  },
  {
    question: '¿Qué rey español patrocinó el primer viaje de Cristóbal Colón al Nuevo Mundo?',
    options: ['Rey Fernando II', 'Rey Carlos I', 'Rey Felipe II', 'Rey Juan Carlos I'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue la última colonia española en África en obtener su independencia?',
    options: ['Sahara Español', 'Guinea Ecuatorial', 'Marruecos', 'Angola'],
    correctAnswer: 1
  },
  {
    question: '¿En qué año se celebraron los Juegos Olímpicos de Barcelona?',
    options: ['1992', '1988', '1996', '2000'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la capital de la Comunidad Autónoma de Cataluña en España?',
    options: ['Barcelona', 'Madrid', 'Sevilla', 'Valencia'],
    correctAnswer: 0
  },
  {
    question: '¿Quién fue el famoso pintor español del movimiento surrealista?',
    options: ['Salvador Dalí', 'Pablo Picasso', 'Diego Velázquez', 'Francisco de Goya'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue el primer presidente de la Segunda República Española?',
    options: ['Niceto Alcalá-Zamora', 'Manuel Azaña', 'Francisco Largo Caballero', 'Miguel Primo de Rivera'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año España se convirtió en miembro de la Unión Europea?',
    options: ['1986', '1973', '1992', '2004'],
    correctAnswer: 0
  },{
    question: '¿Cuál es el deporte más popular en Estados Unidos?',
    options: ['Fútbol americano', 'Béisbol', 'Baloncesto', 'Fútbol (soccer)'],
    correctAnswer: 0
  },
  {
    question: '¿Quién es considerado el mejor jugador de baloncesto de todos los tiempos?',
    options: ['Michael Jordan', 'LeBron James', 'Kobe Bryant', 'Magic Johnson'],
    correctAnswer: 0
  },
  {
    question: '¿En qué deporte se utiliza un bate y una pelota?',
    options: ['Béisbol', 'Golf', 'Tenis', 'Hockey'],
    correctAnswer: 0
  },
  {
    question: '¿En qué país se originó el deporte del rugby?',
    options: ['Inglaterra', 'Estados Unidos', 'Australia', 'Nueva Zelanda'],
    correctAnswer: 0
  },
  {
    question: '¿Qué país ganó la Copa Mundial de Fútbol de 2018?',
    options: ['Francia', 'Croacia', 'Brasil', 'Alemania'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el torneo de tenis más antiguo y prestigioso del mundo?',
    options: ['Wimbledon', 'Roland Garros', 'US Open', 'Australian Open'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el equipo más exitoso en la historia de la Fórmula 1?',
    options: ['Scuderia Ferrari', 'Mercedes-AMG Petronas', 'McLaren', 'Red Bull Racing'],
    correctAnswer: 0
  },
  {
    question: '¿Cuántos jugadores hay en un equipo de voleibol en la cancha?',
    options: ['6', '5', '7', '4'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el máximo campeón de la NBA?',
    options: ['Boston Celtics', 'Los Angeles Lakers', 'Chicago Bulls', 'Golden State Warriors'],
    correctAnswer: 0
  },
  {
    question: '¿Qué país ha ganado más medallas en la historia de los Juegos Olímpicos?',
    options: ['Estados Unidos', 'China', 'Rusia', 'Reino Unido'],
    correctAnswer: 0
  },
    {
    question: '¿Cuál es la unidad básica de la estructura de los seres vivos?',
    options: ['Célula', 'Átomo', 'Molécula', 'Organelo'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el planeta más grande del sistema solar?',
    options: ['Júpiter', 'Saturno', 'Neptuno', 'Marte'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el elemento químico más abundante en el universo?',
    options: ['Hidrógeno', 'Oxígeno', 'Helio', 'Carbono'],
    correctAnswer: 0
  },
  {
    question: '¿Qué científico propuso la teoría de la relatividad?',
    options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Stephen Hawking'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el proceso por el cual las plantas convierten la luz solar en energía?',
    options: ['Fotosíntesis', 'Respiración', 'Transpiración', 'Mitosis'],
    correctAnswer: 0
  },
  {
    question: '¿Quién interpretó el papel de Iron Man en las películas de Marvel?',
    options: ['Robert Downey Jr.', 'Chris Hemsworth', 'Chris Evans', 'Mark Ruffalo'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue la película más taquillera de todos los tiempos hasta el momento?',
    options: ['Avengers: Endgame', 'Avatar', 'Titanic', 'Star Wars: El despertar de la fuerza'],
    correctAnswer: 0
  },
  {
    question: '¿Quién dirigió la trilogía de El Señor de los Anillos?',
    options: ['Peter Jackson', 'Christopher Nolan', 'Steven Spielberg', 'James Cameron'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el nombre del actor que interpreta a James Bond en la película Casino Royale (2006)?',
    options: ['Daniel Craig', 'Pierce Brosnan', 'Sean Connery', 'Roger Moore'],
    correctAnswer: 0
  },
  {
    question: '¿Quién es el creador de la serie de televisión Juego de Tronos?',
    options: ['David Benioff y D.B. Weiss', 'George R.R. Martin', 'J.R.R. Tolkien', 'Joss Whedon'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el animal más veloz del mundo?',
    options: ['Guepardo', 'Leopardo', 'Aguila', 'Tortuga'],
    correctAnswer: 0
  },
  {
    question: '¿Cuántos huesos tiene el cuerpo humano?',
    options: ['206', '300', '150', '100'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país más pequeño del mundo?',
    options: ['Ciudad del Vaticano', 'Mónaco', 'Nauru', 'Tuvalu'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año se descubrió América?',
    options: ['1492', '1501', '1510', '1525'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue la antigua capital del Imperio Romano?',
    options: ['Roma', 'Atenas', 'Constantinopla', 'Cartago'],
    correctAnswer: 0
  },
  {
    question: '¿Qué antigua civilización construyó las famosas pirámides de Giza?',
    options: ['Egipto', 'Mesopotamia', 'China', 'Grecia'],
    correctAnswer: 0
  },
  {
    question: '¿Cuánto tiempo tarda la luz solar en llegar a la Tierra?',
    options: ['8 minutos y 20 segundos', '12 minutos y 40 segundos', '5 minutos y 30 segundos', '10 minutos y 10 segundos'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el océano más profundo del mundo?',
    options: ['Océano Atlántico', 'Océano Índico', 'Océano Pacífico', 'Océano Ártico'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál es el país con la mayor extensión territorial en América del Norte?',
    options: ['Canadá', 'Estados Unidos', 'México', 'Groenlandia'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la capital de Alemania?',
    options: ['Berlín', 'Múnich', 'Hamburgo', 'Fráncfort'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el escritor de la famosa novela "Cien años de soledad"?',
    options: ['Gabriel García Márquez', 'Pablo Neruda', 'Jorge Luis Borges', 'Julio Cortázar'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el instrumento musical de viento más pequeño?',
    options: ['Armónica', 'Flauta', 'Saxofón', 'Clarinet'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país con la mayor población en África?',
    options: ['Nigeria', 'Egipto', 'Etiopía', 'Sudáfrica'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el pintor famoso del período impresionista francés conocido por sus nenúfares?',
    options: ['Claude Monet', 'Pierre-Auguste Renoir', 'Edgar Degas', 'Édouard Manet'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país con la mayor cantidad de islas en el mundo?',
    options: ['Suecia', 'Indonesia', 'Filipinas', 'Finlandia'],
    correctAnswer: 1
  },
  {
    question: '¿Cuál es el idioma oficial de Brasil?',
    options: ['Portugués', 'Español', 'Inglés', 'Francés'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la moneda oficial de Rusia?',
    options: ['Rublo', 'Dólar', 'Euro', 'Yen'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el río más largo del mundo?',
    options: ['Río Amazonas', 'Río Nilo', 'Río Yangtsé', 'Río Misisipi'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país más poblado del mundo?',
    options: ['China', 'India', 'Estados Unidos', 'Indonesia'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la montaña más alta del mundo?',
    options: ['Monte Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país con la mayor superficie terrestre?',
    options: ['Rusia', 'Canadá', 'China', 'Estados Unidos'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el animal terrestre más grande del mundo?',
    options: ['Elefante africano', 'Rinoceronte blanco', 'Jirafa', 'Hipopótamo'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país con la mayor cantidad de medallas olímpicas en la historia?',
    options: ['Estados Unidos', 'Rusia', 'China', 'Reino Unido'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el instrumento musical de cuerda más grande?',
    options: ['Contrabajo', 'Violonchelo', 'Guitarra', 'Viola'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el océano más grande del mundo?',
    options: ['Océano Pacífico', 'Océano Atlántico', 'Océano Índico', 'Océano Austral'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el país con la mayor cantidad de sitios declarados Patrimonio de la Humanidad?',
    options: ['Italia', 'China', 'España', 'Francia'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la lengua más hablada del mundo?',
    options: ['Chino mandarín', 'Español', 'Inglés', 'Hindi'],
    correctAnswer: 0
  },
    {
    question: '¿Cuál fue el primer presidente de los Estados Unidos?',
    options: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Abraham Lincoln'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año se descubrió América?',
    options: ['1492', '1500', '1453', '1521'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue la primera civilización antigua?',
    options: ['Mesopotamia', 'Egipto', 'China', 'India'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año comenzó la Revolución Francesa?',
    options: ['1789', '1804', '1750', '1830'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue el imperio más grande de la historia?',
    options: ['Imperio Mongol', 'Imperio Romano', 'Imperio Británico', 'Imperio Español'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año terminó la Segunda Guerra Mundial?',
    options: ['1945', '1942', '1947', '1950'],
    correctAnswer: 0
  },
  {
    question: '¿Quién fue el líder de la Revolución Rusa?',
    options: ['Vladimir Lenin', 'Joseph Stalin', 'Leon Trotsky', 'Mikhail Gorbachev'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue el primer imperio en la historia de China?',
    options: ['Imperio Qin', 'Imperio Han', 'Imperio Zhou', 'Imperio Tang'],
    correctAnswer: 0
  },
  {
    question: '¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?',
    options: ['1776', '1789', '1800', '1812'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál fue el último zar de Rusia?',
    options: ['Nicolás II', 'Alejandro II', 'Pedro I', 'Iván IV'],
    correctAnswer: 0
  },
  {
    question: '¿Quién escribió "Don Quijote de la Mancha"?',
    options: ['Miguel de Cervantes', 'Federico García Lorca', 'Jorge Luis Borges', 'Gabriel García Márquez'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la primera novela de Jane Austen?',
    options: ['Sensatez y sentimientos', 'Orgullo y prejuicio', 'Emma', 'Persuasión'],
    correctAnswer: 0
  },
  {
    question: '¿Quién es el autor de "Cien años de soledad"?',
    options: ['Gabriel García Márquez', 'Julio Cortázar', 'Pablo Neruda', 'Mario Vargas Llosa'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la obra más famosa de William Shakespeare?',
    options: ['Romeo y Julieta', 'Hamlet', 'Macbeth', 'Otelo'],
    correctAnswer: 0
  },
  {
    question: '¿Quién escribió "1984"?',
    options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'J.R.R. Tolkien'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el título del primer libro de la serie "Canción de hielo y fuego"?',
    options: ['Juego de tronos', 'Choque de reyes', 'Tormenta de espadas', 'Festín de cuervos'],
    correctAnswer: 0
  },
  {
    question: '¿Quién es el autor de "El Gran Gatsby"?',
    options: ['Ernest Hemingway', 'Mark Twain', 'Harper Lee', 'F. Scott Fitzgerald'],
    correctAnswer: 3
  },
  {
    question: '¿Cuál es el título de la primera novela de J.R.R. Tolkien ambientada en la Tierra Media?',
    options: ['El Silmarillion', 'La comunidad del anillo', 'El Hobbit', 'Las dos torres'],
    correctAnswer: 2
  },
  {
    question: '¿Quién escribió "Crónica de una muerte anunciada"?',
    options: ['Gabriel García Márquez', 'Pablo Neruda', 'Julio Cortázar', 'Mario Vargas Llosa'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el autor de "Moby Dick"?',
    options: ['Herman Melville', 'Nathaniel Hawthorne', 'Mark Twain', 'Ralph Waldo Emerson'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa la sigla HTML?',
    options: ['Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Highly Technical Markup Language'],
    correctAnswer: 1
  },
  {
    question: '¿Cuál de los siguientes lenguajes de programación es orientado a objetos?',
    options: ['C', 'Python', 'Java', 'HTML'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál es el sistema operativo móvil desarrollado por Google?',
    options: ['Android', 'iOS', 'Windows Phone', 'BlackBerry OS'],
    correctAnswer: 0
  },
  {
    question: '¿Quién es el creador de la famosa serie de videojuegos "The Legend of Zelda"?',
    options: ['Shigeru Miyamoto', 'Hideo Kojima', 'Yuji Naka', 'Sid Meier'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el primer videojuego de la franquicia "Final Fantasy"?',
    options: ['Final Fantasy', 'Final Fantasy II', 'Final Fantasy III', 'Final Fantasy IV'],
    correctAnswer: 0
  },
  {
    question: '¿Qué empresa fabrica los procesadores Ryzen?',
    options: ['AMD', 'Intel', 'NVIDIA', 'Qualcomm'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál de las siguientes tecnologías inalámbricas se utiliza para la conexión a internet sin cables?',
    options: ['Wi-Fi', 'Bluetooth', 'NFC', 'GPS'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el navegador web más utilizado actualmente?',
    options: ['Google Chrome', 'Mozilla Firefox', 'Safari', 'Internet Explorer'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la resolución de pantalla estándar del formato Full HD?',
    options: ['1920x1080', '1280x720', '2560x1440', '3840x2160'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál de los siguientes dispositivos es conocido por ser un asistente virtual desarrollado por Amazon?',
    options: ['Amazon Echo', 'Google Home', 'Apple HomePod', 'Microsoft Cortana'],
    correctAnswer: 0
  },
  {
    question: '¿Qué significa la sigla CSS?',
    options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál de los siguientes lenguajes de programación es de tipado dinámico?',
    options: ['JavaScript', 'Java', 'C#', 'C++'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el componente principal de un ordenador?',
    options: ['CPU (Unidad Central de Procesamiento)', 'GPU (Unidad de Procesamiento Gráfico)', 'RAM (Memoria de Acceso Aleatorio)', 'HDD (Disco Duro)'],
    correctAnswer: 0
  },
  {
    question: '¿Quién es el creador del sistema operativo Linux?',
    options: ['Linus Torvalds', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es el videojuego más vendido de todos los tiempos?',
    options: ['Minecraft', 'Tetris', 'Grand Theft Auto V', 'PlayerUnknown\'s Battlegrounds'],
    correctAnswer: 0
  },
  {
    question: '¿Quién dirigió la película "Pulp Fiction"?',
    options: ['Quentin Tarantino', 'Martin Scorsese', 'Steven Spielberg', 'Christopher Nolan'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál de las siguientes películas ganó el Óscar a la Mejor Película en 2020?',
    options: ['Parasite', '1917', 'Joker', 'Once Upon a Time in Hollywood'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la película más taquillera de todos los tiempos?',
    options: ['Avengers: Endgame', 'Avatar', 'Titanic', 'Star Wars: El despertar de la fuerza'],
    correctAnswer: 0
  },
  {
    question: '¿Quién interpreta el papel de Iron Man en el Universo Cinematográfico de Marvel?',
    options: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la trilogía de películas dirigida por Christopher Nolan?',
    options: ['El Caballero Oscuro', 'El Señor de los Anillos', 'El Padrino', 'Volver al Futuro'],
    correctAnswer: 0
  },
  {
    question: '¿Quién es el director de la película "El Padrino"?',
    options: ['Francis Ford Coppola', 'Steven Spielberg', 'Martin Scorsese', 'Alfred Hitchcock'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la película animada de Disney número 50?',
    options: ['Enredados', 'Frozen', 'Moana', 'Zootopia'],
    correctAnswer: 0
  },
  {
    question: '¿Quién interpreta el papel de Neo en la trilogía de "Matrix"?',
    options: ['Keanu Reeves', 'Tom Cruise', 'Brad Pitt', 'Leonardo DiCaprio'],
    correctAnswer: 0
  },
  {
    question: '¿Cuál es la película de Steven Spielberg sobre un parque temático con dinosaurios?',
    options: ['Jurassic Park', 'E.T. el extraterrestre', 'Tiburón', 'Indiana Jones y los cazadores del arca perdida'],
    correctAnswer: 0
  },
  {
    question: '¿Quién dirigió la película "El resplandor"?',
    options: ['Stanley Kubrick', 'David Fincher', 'Wes Anderson', 'Quentin Tarantino'],
    correctAnswer: 0
  }
];

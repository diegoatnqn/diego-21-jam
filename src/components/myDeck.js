var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var myDescriptions = [
    "20 de octubre de 1976: debuto en la primera división del futbol argentino en Argentinos Juniors.",
    "27 de febrero de 1977: debuto en la selección argentina en la victoria del equipo entonces dirigido por César Luis Menotti frente a Hungría (5-1).",
    "28 de junio de 1977: comenzo su noviazgo con Claudia, con quien se casaria 12 años despues.",
    "Primera imagen promocional de la serie de Amazon",
    "2 de junio de 1979: marco su primer gol para Argentina en su noveno partido, en la victoria 3-1 en amistoso disputado en Glasgow frente a Escocia.",
    
    "22 de febrero de 1981: debuto en Boca Juniors.",
    "13 de junio de 1982: jugo su primer partido en un Mundial, en la derrota de Argentina ante Belgica (1-0) en la inauguracion de la Copa del Mundo de 1982.",
    "4 de septiembre de 1982: debuto como jugador del FC Barcelona de España.",
    "4 de julio de 1983: obtuvo la Copa del Rey con el Barcelona.",
    "30 de junio de 1984: pasó del FC Barcelona al Napoles de Italia en 8 millones de dolares.",
    "22 de junio de 1986: en el partido mas recordado de su carrera, Argentina derrotó a Inglaterra 2-1 y paso a las semifinales del Mundial de México-1986 con dos goles de su autoría, el primero con la mano y el segundo en una fantastica jugada individual en la que superó la marca de seis rivales.",
    "29 de junio de 1986: obtuvo la Copa del Mundo de México-1986 con el triunfo 3-2 de Argentina sobre Alemania, en el estadio Azteca de la capital mexicana.",
    "2 de abril de 1987: nacio Dalma Nerea, su primera hija reconocida.",
    "10 de mayo de 1987: ganó la Liga italiana con Napoles, en el primer titulo de ese club en 60 años y en junio gano la Copa de Italia.",
    "17 de mayo de 1989: se consagro campeón de la Copa UEFA con Napoles.",
    "29 de abril de 1990: obtuvo el segundo ‘scudetto’ con el Napoles.",
    " jugó la segunda final de un Mundial en Italia. Argentina cayó 1-0 ante Alemania en Roma.",
    "8 de abril de 1991: se anuncio la suspensión de Maradona por 15 meses por dopaje.",
    "22 de septiembre de 1992: se anuncio su traspaso de Napoles al Sevilla de España en 7,5 millones de dolares.",
    "Maradona llega a Nwewlls",
    "2 de febrero de 1994: le disparo a periodistas y fotógrafos con un rifle de aire comprimido",
    "25 de junio de 1994: jugó su ultimo partido para Argentina en la victoria 2-1 sobre Nigeria, por el Mundial de Estados Unidos",
    "3 de octubre de 1994: asumio como entrenador del Deportivo Mandiyu de Corrientes y renuncio apenas dos meses despues.",
    "1 enero de 1995: la revista francesa France Football lo distinguio con el Balón de Oro por su carrera deportiva.",
    "6 de enero de 1995: Maradona asumio como DT de Racing Club, al que dejo en mayo del mismo año.",
    "7 de octubre de 1995: regreso como jugador a Boca Juniors después de 14 años.",
    "12 de agosto de 1996: viajo a Suiza para tratarse de su adiccion a las drogas.",
    "Entre 2001 y 2004: realiza un tratamiento en Cuba de forma intermitente por su adiccion a las drogas.",
    "10 de noviembre de 2001: se le brindo un partido homenaje en el estadio La Bombonera ante 60.000 personas.",
    "5 de marzo de 2005: con 121 kilos de peso, se somete en Colombia a un bypass gastrico.",
    "Agosto de 2005: resurge como animador televisivo en el programa La Noche del Diez",
    "4 de noviembre de 2008: asumio como entrenador de la seleccion Argentina, clasifico a la Albiceleste al Mundial Surafrica-2010",
    "Entre agosto de 2011 y julio de 2012: dirigio al Al Wasl de Emiratos Arabes.",
    "10 de junio de 2014: estrenó el programa De Zurda conduciendo junto al periodista Victor Hugo Morales en Telesur.",
    "5 de julio de 2017: asumio como entrenador del Al-Fujairah, de la segunda division de Emiratos Arabes, dirigiendo 22 partidos.",
    "10 de septiembre de 2018: asumio como entrenador del club Dorados de Sinaloa de la segunda division de Mexico.",
    "5 de septiembre de 2019: asumio como entrenador de Gimnasia y Esgrima La Plata hasta la actualidad.",
    "El segundo gol a Inglaterra fue reconocido como el mejor gol en la historia de los mundiales",
    "Diego con vestimenta local arabe",
    "'La tenes adentro' le decía Maradona a Pasman",
    "Meme de Maradona durmiendo es de los mas conocidos del diez",
    "En 'La noche del diez', Diego jugaba futbol-tenis al lado de Messi",
    "Gol a River, humillando al arquero",
    "'Que la mamen y que la sigan chupando' le dedicaba Diego a los periodistas que lo criticaban",
    "Gol con la mano a Inglaterra",
    "Diego junto a Roman, antes de su renuncia a la seleccion",
    "Diego gano el metropolitano del 81",
    "Pelea con Veron en un partido homenaje",
    "'¿Podes ser tan pelotudo,viejo?'",
    "Maradona en la tribuna del mundia dejo las mejores fotos cinematograficas en la vida real",
    "El ultimo 10 le mete un gol a nene discapacitado, cumpliendo los sueños del invalido arquero",
    "nueva estatua del Napoles, en el aniversario de su muerte",
    "Diego siempre del lado de la gente"
]
var deck = new Array();
var players = new Array();
var currentPlayer = 0;
createDeck();
shuffle();
function createDeck() {
    deck = new Array();
    for (var i = 0; i < values.length; i++) {
        for (var x = 0; x < suits.length; x++) {
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 11;
            var card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
    for (i = 0; i < deck.length; i++) {
        deck[i].img = "pic" + i;
        if (myDescriptions[i])
            deck[i].description = myDescriptions[i].normalize()
    }
}
function shuffle() {
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}
export default deck;
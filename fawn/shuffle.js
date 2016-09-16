//shuffle a deck of cards

//1. Make the deck
//2. shuffle it

var Card = function (suite,type) {
  this.suite = suite;
  this.type = type;
};


var makeDeck = function () {
  var types = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10","J", "Q", "K"];
  var suites = ["Clubs", "Diamonds", "Hears", "Spades"];
  var deck = [];
  for (var i = 0; i < suites.length; i++) {
    for (var j = 0; j < types.length; j++) {
      deck.push(new Card(suites[i], types[j]));
    }
  }
  return deck;
};

var deck = makeDeck();

//take the deck and shuffle it

var shuffle = function (deck) {
  //make random index
  for (var i=0; i<deck.length; i++) {
    var randomIndex = Math.floor(Math.random()*deck.length);
    var temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }

  return deck;
};

console.log(shuffle(deck));
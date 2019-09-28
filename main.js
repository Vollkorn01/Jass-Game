/* eslint-disable prefer-template */
// Jass Algorithm

// shuffle and give out cards
// shuffle list of list 36 cards with an object each, containing name, color, value,
// value when trump, and a number which indicates how strong it is
// split in 4 sets
function createSet() {
  let set = [
    {
      name: 'six',
      color: 'Schellen',
      value: 0,
      trumpValue: 0,
      power: 0,
    },
    {
      name: 'seven',
      color: 'Schellen',
      value: 0,
      trumpValue: 0,
      power: 1,
    },
    {
      name: 'eight',
      color: 'Schellen',
      value: 0,
      trumpValue: 0,
      power: 2,
    },
    {
      name: 'nine',
      color: 'Schellen',
      value: 0,
      trumpValue: 14,
      power: 3,
    },
    {
      name: 'banner',
      color: 'Schellen',
      value: 10,
      trumpValue: 10,
      power: 4,
    },
    {
      name: 'under',
      color: 'Schellen',
      value: 2,
      trumpValue: 20,
      power: 5,
    },
    {
      name: 'ober',
      color: 'Schellen',
      value: 3,
      trumpValue: 3,
      power: 6,
    },
    {
      name: 'koenig',
      color: 'Schellen',
      value: 4,
      trumpValue: 4,
      power: 7,
    },
    {
      name: 'ace',
      color: 'Schellen',
      value: 11,
      trumpValue: 11,
      power: 8,
    },
    {
      name: 'six',
      color: 'Schilten',
      value: 0,
      trumpValue: 0,
      power: 0,
    },
    {
      name: 'seven',
      color: 'Schilten',
      value: 0,
      trumpValue: 0,
      power: 1,
    },
    {
      name: 'eight',
      color: 'Schilten',
      value: 0,
      trumpValue: 0,
      power: 2,
    },
    {
      name: 'nine',
      color: 'Schilten',
      value: 0,
      trumpValue: 14,
      power: 3,
    },
    {
      name: 'banner',
      color: 'Schilten',
      value: 10,
      trumpValue: 10,
      power: 4,
    },
    {
      name: 'under',
      color: 'Schilten',
      value: 2,
      trumpValue: 20,
      power: 5,
    },
    {
      name: 'ober',
      color: 'Schilten',
      value: 3,
      trumpValue: 3,
      power: 6,
    },
    {
      name: 'koenig',
      color: 'Schilten',
      value: 4,
      trumpValue: 4,
      power: 7,
    },
    {
      name: 'ace',
      color: 'Schilten',
      value: 11,
      trumpValue: 11,
      power: 8,
    },
    {
      name: 'six',
      color: 'Eicheln',
      value: 0,
      trumpValue: 0,
      power: 0,
    },
    {
      name: 'seven',
      color: 'Eicheln',
      value: 0,
      trumpValue: 0,
      power: 1,
    },
    {
      name: 'eight',
      color: 'Eicheln',
      value: 0,
      trumpValue: 0,
      power: 2,
    },
    {
      name: 'nine',
      color: 'Eicheln',
      value: 0,
      trumpValue: 14,
      power: 3,
    },
    {
      name: 'banner',
      color: 'Eicheln',
      value: 10,
      trumpValue: 10,
      power: 4,
    },
    {
      name: 'under',
      color: 'Eicheln',
      value: 2,
      trumpValue: 20,
      power: 5,
    },
    {
      name: 'ober',
      color: 'Eicheln',
      value: 3,
      trumpValue: 3,
      power: 6,
    },
    {
      name: 'koenig',
      color: 'Eicheln',
      value: 4,
      trumpValue: 4,
      power: 7,
    },
    {
      name: 'ace',
      color: 'Eicheln',
      value: 11,
      trumpValue: 11,
      power: 8,
    },
    {
      name: 'six',
      color: 'Rosen',
      value: 0,
      trumpValue: 0,
      power: 0,
    },
    {
      name: 'seven',
      color: 'Rosen',
      value: 0,
      trumpValue: 0,
      power: 1,
    },
    {
      name: 'eight',
      color: 'Rosen',
      value: 0,
      trumpValue: 0,
      power: 2,
    },
    {
      name: 'nine',
      color: 'Rosen',
      value: 0,
      trumpValue: 14,
      power: 3,
    },
    {
      name: 'banner',
      color: 'Rosen',
      value: 10,
      trumpValue: 10,
      power: 4,
    },
    {
      name: 'under',
      color: 'Rosen',
      value: 2,
      trumpValue: 20,
      power: 5,
    },
    {
      name: 'ober',
      color: 'Rosen',
      value: 3,
      trumpValue: 3,
      power: 6,
    },
    {
      name: 'koenig',
      color: 'Rosen',
      value: 4,
      trumpValue: 4,
      power: 7,
    },
    {
      name: 'ace',
      color: 'Rosen',
      value: 11,
      trumpValue: 11,
      power: 8,
    },
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  set = shuffle(set);

  const setPlayer1 = set.splice(0, 9);
  const setPlayer2 = set.splice(0, 9);
  const setPlayer3 = set.splice(0, 9);
  const setPlayer4 = set.splice(0, 9);

  const playerSets = [setPlayer1, setPlayer2, setPlayer3, setPlayer4]
  return playerSets;
}

function displayGameInfo(text) {
  const textInput = text;
  const para = document.createElement('p');
  const node = document.createTextNode(textInput);
  para.appendChild(node);
  const element = document.getElementById('gameInfo');
  element.appendChild(para);
}

// whichCard
// first player can randomly play a card
// other players have to play the same color (if they have it) or a trump
// if they don't have the color, they can play everything
function playCard(cardsOnTable, playerSet, currentPlayer, roundWinner) {
  let cards = cardsOnTable;
  let infoText;
  if (typeof cardsOnTable === 'undefined') {
    // put random card from first player on the table
    const firstCard = playerSet.splice(Math.floor(Math.random() * playerSet.length), 1)[0];
    cards = [0, 0, 0, 0];
    cards[currentPlayer] = firstCard;
    infoText = 'player 1 plays ' + firstCard.color + ' ' + firstCard.name;
    displayGameInfo(infoText);
  } else {
    // loop through players card deck to see if he has the right color
    for (let i = 0; i < playerSet.length; i += 1) {
      cards = cardsOnTable;
      // play only if this players card color is the same than the color of the first card
      if (cards[roundWinner].color === playerSet[i].color) {
        const selectedCard = playerSet.splice(i, 1)[0];
        cards[currentPlayer] = selectedCard;
        infoText = 'player ' + (currentPlayer + 1) + ' plays ' + selectedCard.color + ' ' + selectedCard.name;
        displayGameInfo(infoText);
        break;
      }
      // if player doesn't have the same color play a random card
      if (i === playerSet.length - 1) {
        const randomCard = playerSet.splice(Math.floor(Math.random() * playerSet.length), 1)[0];
        cards[currentPlayer] = randomCard;
        infoText = 'player ' + (currentPlayer + 1) + ' plays ' + randomCard.color + ' ' + randomCard.name;
        displayGameInfo(infoText);
        break;
      }
    }
  }
  return [cards, playerSet];
}

function winnerRound(cardsOnTable) {
  let highestIndex;
  let highestPower;
  // select winning card
  if (cardsOnTable.length === 4) {
    for (let i = 0; i < cardsOnTable.length; i += 1) {
      if (i === 0) {
        highestPower = cardsOnTable[i].power;
        highestIndex = i;
      } else if (cardsOnTable[i].power > highestPower
        && cardsOnTable[0].color === cardsOnTable[i].color) {
        highestPower = cardsOnTable[i].power;
        highestIndex = i;
      }
    }
  }
  return highestIndex;
}

function whoStartsNext(playerNo) {
  // create new sequence of playing where round winner starts.
  let player = playerNo;
  const order = [];
  order.push(player);
  while (order.length < 4) {
    if (player < 3) {
      player += 1;
      order.push(player);
    } else {
      player = 0;
      order.push(player);
    }
  }
  return order;
}

function play() {
  const sets = createSet();
  const trumps = ['Schellen', 'Schilten', 'Eicheln', 'Rosen'];
  const trump = trumps[Math.floor(Math.random() * trumps.length)];
  let order = [0, 1, 2, 3];
  const playerScores = [0, 0, 0, 0];
  let cardsOnTable;
  let roundWinner = 0; // provides first card
  let set;

  // game goes for 9 rounds
  for (let rounds = 0; rounds < 9; rounds += 1) {
    // there are 4 players who play after each other
    for (let i = 0; i < 4; i += 1) {
      const currentPlayer = order[i];
      [cardsOnTable, set] = playCard(cardsOnTable, sets[currentPlayer], currentPlayer, roundWinner);
      sets[currentPlayer] = set;
    }

    // determine round winner
    roundWinner = winnerRound(cardsOnTable);
    let roundScore = 0;
    for (let i = 0; i < cardsOnTable.length; i += 1) {
      roundScore += cardsOnTable[i].value;
    }

    // calculate points
    playerScores[roundWinner] += roundScore;
    let infoText = 'player ' + (roundWinner + 1) + ' wins';
    displayGameInfo(infoText);
    infoText = 'scores: ' + playerScores.join(', ');
    displayGameInfo(infoText);
    // who starts next? order is new squence
    order = whoStartsNext(roundWinner);
  }
  const pointsOfWinner = Math.max(...playerScores);
  const overallWinner = playerScores.indexOf(pointsOfWinner);
  const text = 'player ' + (overallWinner + 1) + ' wins game with ' + pointsOfWinner + ' points';
  displayGameInfo(text);
}

play();

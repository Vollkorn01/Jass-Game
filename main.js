// Jass Algorithm

// shuffle and give out cards
    //  shuffle list of list 36 cards with an object each, containing name, color, value, value when trump, and a number which indicates how strong it is
    //  split in 4 sets
function createSet() {
        var set, setPlayer1, setPlayer2, setPlayer3, setPlayer4;
        
        set = [
            {
                name: "six",
                color: "Schellen",
                value: 0,
                trumpValue: 0,
                power: 0
            },
            {
                name: "seven",
                color: "Schellen",
                value: 0,
                trumpValue: 0,
                power: 1
            },
            {
                name: "eight",
                color: "Schellen",
                value: 0,
                trumpValue: 0,
                power: 2
            },
            {
                name: "nine",
                color: "Schellen",
                value: 0,
                trumpValue: 14,
                power: 3
            },
            {
                name: "banner",
                color: "Schellen",
                value: 10,
                trumpValue: 10,
                power: 4
            },
            {
                name: "under",
                color: "Schellen",
                value: 2,
                trumpValue: 20,
                power: 5
            },
            {
                name: "ober",
                color: "Schellen",
                value: 3,
                trumpValue: 3,
                power: 6
            },
            {
                name: "koenig",
                color: "Schellen",
                value: 4,
                trumpValue: 4,
                power: 7
            },
            {
                name: "ace",
                color: "Schellen",
                value: 11,
                trumpValue: 11,
                power: 8
            },
            {
                name: "six",
                color: "Schilten",
                value: 0,
                trumpValue: 0,
                power: 0
            },
            {
                name: "seven",
                color: "Schilten",
                value: 0,
                trumpValue: 0,
                power: 1
            },
            {
                name: "eight",
                color: "Schilten",
                value: 0,
                trumpValue: 0,
                power: 2
            },
            {
                name: "nine",
                color: "Schilten",
                value: 0,
                trumpValue: 14,
                power: 3
            },
            {
                name: "banner",
                color: "Schilten",
                value: 10,
                trumpValue: 10,
                power: 4
            },
            {
                name: "under",
                color: "Schilten",
                value: 2,
                trumpValue: 20,
                power: 5
            },
            {
                name: "ober",
                color: "Schilten",
                value: 3,
                trumpValue: 3,
                power: 6
            },
            {
                name: "koenig",
                color: "Schilten",
                value: 4,
                trumpValue: 4,
                power: 7
            },
            {
                name: "ace",
                color: "Schilten",
                value: 11,
                trumpValue: 11,
                power: 8
            },
            {
                name: "six",
                color: "Eicheln",
                value: 0,
                trumpValue: 0,
                power: 0
            },
            {
                name: "seven",
                color: "Eicheln",
                value: 0,
                trumpValue: 0,
                power: 1
            },
            {
                name: "eight",
                color: "Eicheln",
                value: 0,
                trumpValue: 0,
                power: 2
            },
            {
                name: "nine",
                color: "Eicheln",
                value: 0,
                trumpValue: 14,
                power: 3
            },
            {
                name: "banner",
                color: "Eicheln",
                value: 10,
                trumpValue: 10,
                power: 4
            },
            {
                name: "under",
                color: "Eicheln",
                value: 2,
                trumpValue: 20,
                power: 5
            },
            {
                name: "ober",
                color: "Eicheln",
                value: 3,
                trumpValue: 3,
                power: 6
            },
            {
                name: "koenig",
                color: "Eicheln",
                value: 4,
                trumpValue: 4,
                power: 7
            },
            {
                name: "ace",
                color: "Eicheln",
                value: 11,
                trumpValue: 11,
                power: 8
            },
            {
                name: "six",
                color: "Rosen",
                value: 0,
                trumpValue: 0,
                power: 0
            },
            {
                name: "seven",
                color: "Rosen",
                value: 0,
                trumpValue: 0,
                power: 1
            },
            {
                name: "eight",
                color: "Rosen",
                value: 0,
                trumpValue: 0,
                power: 2
            },
            {
                name: "nine",
                color: "Rosen",
                value: 0,
                trumpValue: 14,
                power: 3
            },
            {
                name: "banner",
                color: "Rosen",
                value: 10,
                trumpValue: 10,
                power: 4
            },
            {
                name: "under",
                color: "Rosen",
                value: 2,
                trumpValue: 20,
                power: 5
            },
            {
                name: "ober",
                color: "Rosen",
                value: 3,
                trumpValue: 3,
                power: 6
            },
            {
                name: "koenig",
                color: "Rosen",
                value: 4,
                trumpValue: 4,
                power: 7
            },
            {
                name: "ace",
                color: "Rosen",
                value: 11,
                trumpValue: 11,
                power: 8
            },
        ];
    
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
          }
        
        set = shuffle(set);
        
        setPlayer1 = set.splice(0,9);
        setPlayer2 = set.splice(0,9);
        setPlayer3 = set.splice(0,9);
        setPlayer4 = set.splice(0,9);

        playerSets = [setPlayer1, setPlayer2, setPlayer3, setPlayer4]
    return playerSets;
};


// whichCard
// first player can randomly play a card
// other players have to play the same color (if they have it) or a trump
// if they don't have the color, they can play everything
function playCard(cardsOnTable, playerSet, trump) {
    var selectedCard;
    if (cardsOnTable.length === 0) {
        // select random card from hand of first player to start game
        // and put it "on the table"
        firstCard = playerSet.splice(Math.floor(Math.random() * playerSet.length),1)[0];
        cardsOnTable.push(firstCard);

    } else {
        // loop through players card deck to see if he has the right color
        for ( i = 0; i < playerSet.length; i++ ) { 
            // play only if this players card color is the same than the color of the first card
            if ( cardsOnTable[0].color === playerSet[i].color ) {
                selectedCard = playerSet.splice(i,1)[0];
                cardsOnTable.push(selectedCard);
                break;
            }
            // if player doesn't have the same color play a random card
            if ( i === playerSet.length - 1 ) {
                randomCard = playerSet.splice(Math.floor(Math.random() * playerSet.length),1)[0];
                cardsOnTable.push(randomCard);
                break;
            }
        };
    }
    return cardsOnTable, playerSet;
};

function winnerRound(cardsOnTable) {
    var highestIndex, highestPower;
    // select winning card
    if (cardsOnTable.length === 4) {
        for ( i = 0; i < cardsOnTable.length; i++) {
            if (i === 0) {
                highestPower = cardsOnTable[i].power;
                highestIndex = i;
            } else if (cardsOnTable[i].power > highestPower && cardsOnTable[0].color === cardsOnTable[i].color) {
                highestPower = cardsOnTable[i].power;
                highestIndex = i;
            }
        }
    }
    return highestIndex;
};

function whoStartsNext(playerNo) {
    // create new sequence of playing where round winner starts.
    playerList = [];
    playerList.push(playerNo)
    while (playerList.length < 4) {
        if (playerNo < 3) {
            playerNo = playerNo + 1;
            playerList.push(playerNo);
        } else {
            playerNo = 0;
            playerList.push(playerNo);
        }
    }
    return playerList;
}

// roundWinner
// compare 4 cards
// the card with the highest value who is trump wins, 
// except if it is the trump of "Under" or the "9", which are best resp. second best
// add score to the players score
// this player starts the next round

// game winner
// add player 1 and 2 scores together, highest score wins

// play function
// shuffle
// choose a trump
// for 9 rounds:
// for each player play a card (put it in the roundList) and delete it from his own list
// call roundWinner at end of for loop
// call game winner
function play() {
    var sets, cardsOnTable, rounds, playerList, playerScores, roundWinner, roundScore, overallWinner;
    sets = createSet();
    trumps = ["Schellen", "Schilten", "Eicheln", "Rosen"];
    trump = trumps[Math.floor(Math.random() * trumps.length)];
    playerList = [0, 1, 2, 3];
    playerScores = [0, 0, 0, 0];

    // game goes for 9 rounds
    for ( rounds = 0; rounds < 9; rounds ++) {
        cardsOnTable = [];

        // there are 4 players who play after each other
        for (player = 0; player < 4; player ++) {
            cardsOnTable, sets[playerList[player]] = playCard(cardsOnTable, sets[playerList[player]], trump);
        }

        // determine round winner
        roundWinner = winnerRound(cardsOnTable);
        roundScore = 0;
        for (i = 0; i < cardsOnTable.length; i++) {
            roundScore = roundScore + cardsOnTable[i].value;
        }
        // calculate points
        playerScores[roundWinner] = playerScores[roundWinner] + roundScore;
        console.log('cardsontable: ', cardsOnTable);
        console.log('playerScores: ', playerScores);

        // who starts next? playerList is new squence
        playerList = whoStartsNext(roundWinner);
    }
    pointsOfWinner = Math.max(...playerScores);
    overallWinner = playerScores.indexOf(pointsOfWinner);
    console.log('points: ', pointsOfWinner);
    console.log('overallwinner: player ', overallWinner + 1);

};

play();



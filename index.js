function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}




// ---  Player Information ---

function numPointsScored(playerName) {
  const data = gameObject();
  // Look for the player key in both home and away objects
  const player = data.home.players[playerName] || data.away.players[playerName];
  return player ? player.points : 0;
}

function shoeSize(playerName) {
  const data = gameObject();
  const player = data.home.players[playerName] || data.away.players[playerName];
  return player ? player.shoe : 0;
}

// --- Retrieve Team Information ---

function teamNames() {
  const data = gameObject();
  return [data.home.teamName, data.away.teamName];
}

function teamColors(teamName) {
  const data = gameObject();
  // Compare input teamName with the names in the data
  if (data.home.teamName === teamName) return data.home.colors;
  if (data.away.teamName === teamName) return data.away.colors;
}

// --- Retrieve Player Numbers and Statistics ---

function playerNumbers(teamName) {
  const data = gameObject();
  // Select the correct team object
  const team = data.home.teamName === teamName ? data.home : data.away;
  const numbers = [];
  // Use for...in to iterate over the keys (player names) in the players object
  for (const name in team.players) {
    numbers.push(team.players[name].number);
  }
  return numbers;
}

function playerStats(playerName) {
  const data = gameObject();
  // Return the entire nested object for that specific player
  return data.home.players[playerName] || data.away.players[playerName];
}

// --- Advanced Challenge ---

function bigShoeRebounds() {
  const data = gameObject();
  const allTeams = [data.home, data.away];
  let largestShoe = 0;
  let reboundsResult = 0;

  allTeams.forEach(team => {
    for (const name in team.players) {
      const player = team.players[name];
      if (player.shoe > largestShoe) {
        largestShoe = player.shoe;
        reboundsResult = player.rebounds;
      }
    }
  });
  return reboundsResult;
}

// --- Bonus Quiz ---

function mostPointsScored() {
  const data = gameObject();
  let highscore = 0;
  let leadingScorer = "";

  [data.home, data.away].forEach(team => {
    for (const name in team.players) {
      if (team.players[name].points > highscore) {
        highscore = team.players[name].points;
        leadingScorer = name;
      }
    }
  });
  return leadingScorer;
}

function winningTeam() {
  const data = gameObject();
  // Helper to calculate totals for each team
  const calculateTotal = (team) => {
    let sum = 0;
    for (const name in team.players) {
      sum += team.players[name].points;
    }
    return sum;
  };

  const homeScore = calculateTotal(data.home);
  const awayScore = calculateTotal(data.away);

  return homeScore > awayScore ? data.home.teamName : data.away.teamName;
}

function playerWithLongestName() {
  const data = gameObject();
  let longestName = "";

  [data.home, data.away].forEach(team => {
    for (const name in team.players) {
      if (name.length > longestName.length) {
        longestName = name;
      }
    }
  });
  return longestName;
}

// --- Super Bonus Challenge ---

function doesLongNameStealATon() {
  const data = gameObject();
  let longestName = "";
  let mostSteals = -1;
  let thiefName = "";

  [data.home, data.away].forEach(team => {
    for (const name in team.players) {
      // Logic for longest name
      if (name.length > longestName.length) longestName = name;
      
      // Logic for most steals
      if (team.players[name].steals > mostSteals) {
        mostSteals = team.players[name].steals;
        thiefName = name;
      }
    }
  });

  // Returns true if the name with the most characters is the same name with the most steals
  return longestName === thiefName;
}
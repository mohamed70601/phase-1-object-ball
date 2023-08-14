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
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
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
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }

        }
    }
}

console.log(gameObject());

function numPointsScored(playerName) {
    const gameInfo = gameObject();
    
    const pointsScored = Object.values(gameInfo).reduce((totalPoints, team) => {
        if (team.players.hasOwnProperty(playerName)) {
            return totalPoints + team.players[playerName].points;
        }
        return totalPoints;
    }, 0);
    
    return pointsScored !== 0 ? pointsScored : "Player not found";
}

function shoeSize(playerName) {
    const gameInfo = gameObject();
    
    const shoe = Object.values(gameInfo).map(team => {
        if (team.players.hasOwnProperty(playerName)) {
            return team.players[playerName].shoe;
        }
    }).filter(size => size !== undefined)[0];
    
    return shoe !== undefined ? shoe : "Player not found";
}

function teamColors(teamName) {
    const gameInfo = gameObject();
    let colors = [];

    Object.values(gameInfo).forEach(team => {
        if (team.teamName === teamName) {
            colors = team.colors;
        }
    });
    
    return colors.length !== 0 ? colors : "Team not found";
}

function teamNames() {
    const gameInfo = gameObject();
    return Object.values(gameInfo).map(team => team.teamName);
}

function playerNumbers(teamName) {
    const gameInfo = gameObject();
    let numbers = [];

    Object.values(gameInfo).forEach(team => {
        if (team.teamName === teamName) {
            numbers = Object.values(team.players).map(player => player.number);
        }
    });
    
    return numbers.length !== 0 ? numbers : "Team not found";
}

function playerStats(playerName) {
    const gameInfo = gameObject();
    
    const stats = Object.values(gameInfo).reduce((playerStats, team) => {
        if (team.players.hasOwnProperty(playerName)) {
            return team.players[playerName];
        }
        return playerStats;
    }, {});
    
    return Object.keys(stats).length !== 0 ? stats : "Player not found";
}

function bigShoeRebounds() {
    const gameInfo = gameObject();
    
    const largestShoePlayer = Object.values(gameInfo).reduce((largestPlayer, team) => {
        const playerWithLargestShoe = Object.values(team.players).reduce((largestShoe, player) => {
            if (largestShoe === null || player.shoe > largestShoe.shoe) {
                return player;
            }
            return largestShoe;
        }, null);

        if (largestPlayer === null || playerWithLargestShoe.shoe > largestPlayer.shoe) {
            return playerWithLargestShoe;
        }
        return largestPlayer;
    }, null);

    return largestShoePlayer !== null ? largestShoePlayer.rebounds : "No player found";
}

// Bonus

function mostPointsScored() {
    const gameInfo = gameObject();

    let mostPointsPlayerName = null;
    let mostPoints = 0;

    Object.values(gameInfo).forEach(team => {
        Object.keys(team.players).forEach(playerName => {
            if (team.players[playerName].points > mostPoints) {
                mostPoints = team.players[playerName].points;
                mostPointsPlayerName = playerName;
            }
        });
    });

    return mostPointsPlayerName !== null ? mostPointsPlayerName : "No player found";
}

function winningTeam() {
    const gameInfo = gameObject();

    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    Object.values(gameInfo.home.players).forEach(player => {
        homeTeamPoints += player.points;
    });

    Object.values(gameInfo.away.players).forEach(player => {
        awayTeamPoints += player.points;
    });

    return homeTeamPoints > awayTeamPoints ? gameInfo.home.teamName : gameInfo.away.teamName;
}

function playerWithLongestName() {
    const gameInfo = gameObject();

    let longestNamePlayer = null;

    Object.values(gameInfo).forEach(team => {
        Object.keys(team.players).forEach(playerName => {
            if (longestNamePlayer === null || playerName.length > longestNamePlayer.length) {
                longestNamePlayer = playerName;
            }
        });
    });

    return longestNamePlayer !== null ? longestNamePlayer : "No player found";
}

// super bonus

function doesLongNameStealATon() {
    const gameInfo = gameObject();

    const longestNamePlayerName = playerWithLongestName();
    let mostStealsPlayerName = null;
    let mostSteals = 0;

    Object.values(gameInfo).forEach(team => {
        Object.keys(team.players).forEach(playerName => {
            if (team.players[playerName].steals > mostSteals) {
                mostSteals = team.players[playerName].steals;
                mostStealsPlayerName = playerName;
            }
        });
    });

    return longestNamePlayerName === mostStealsPlayerName;
}
import React, { Component } from 'react';
import Header from './Header'
import Player from './Player'
import AddPlayerForm from './AddPlayerForm'



class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };



  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleNewPlayer = (player) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: player,
            score: 0,
            id: prevState.players.length + 1
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            score={ player.score }
            index={ index }
            handleScoreChange= {this.handleScoreChange}
          />
        )}

        <AddPlayerForm
          handleNewPlayer={this.handleNewPlayer}
        />
      </div>
    );
  }
}

export default App;

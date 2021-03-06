import React, { PureComponent } from 'react'
import Counter from './Counter'

class Player extends PureComponent {
  render(){
    return (
      <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
      { this.props.name }
      </span>

      <Counter
      score = {this.props.score}
      handleScoreChange={this.props.handleScoreChange}
      index={ this.props.index }
      />
      </div>
    );
  }
}

export default Player;

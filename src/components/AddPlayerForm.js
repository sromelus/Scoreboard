import React, { Component } from 'react'

class AddPlayerForm extends Component{

  constructor(){
    super()
    this.state = {
      value: ""
    };
  }

  hangeValueChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleNewPlayer(this.state.value);
    this.handleClearForm();
  }

  handleClearForm = () => {
    this.setState( prevState => ({
      value: prevState.value.replace(/([A-Z]?[a-z]?)+/, "" )
    }))
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.hangeValueChange}
          placeholder="Enter a player's name"
        />
        <input
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;


// const AddPlayerForm = ({ addPlayer }) => {
//
//   let playerInput = React.createRef();
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     addPlayer(playerInput.current.value);
//     e.currentTarget.reset();
//   }
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         ref={playerInput}
//         placeholder="Enter a player's name"
//       />
//
//       <input
//         type="submit"
//         value="Add Player"
//       />
//     </form>
//   );
// }

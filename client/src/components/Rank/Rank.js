import React from 'react';

class Rank extends React.Component {
	constructor() {
		super();
		this.state = {
			emoji: "",
		};
	}

	componentDidMount() {
		this.generateEmojis(this.props.entries);
	}

  componentDidUpdate(prevState, prevProps) {

    if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
      return null;
    }
      this.generateEmojis(this.props.entries);
  }


  generateEmojis = (entries) => {
    fetch(
      `https://twh7xpoz4i.execute-api.us-east-1.amazonaws.com/rank?rank=${entries}`,
    ).then(resp => resp.json())
      .then(data => this.setState({ emoji: data.input }))
    .catch(err => console.log(err))
  };
  

	render() {
		return (
			<div>
				<div className="white f3">{`${this.props.name}, your current entry count is...`}</div>
				<div className="white f1">{this.props.entries}</div>
        <div className="white f3">{`Rank Badge: ${this.state.emoji}`}</div>
			</div>
		);
	}
} 
  


export default Rank;
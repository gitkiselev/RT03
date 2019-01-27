import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

/*class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 26
		}
		//this.nextYear = this.nextYear.bind(this);
		/*this.nextYear = () => {
			this.setState(state =>({
			years: ++state.years
		}))
		}
	}
	nextYear = () => {
			this.setState(state =>({
			years: ++state.years
		}))
	}
	/*nextYear(){
		//this.state.years++ wrong!
		this.setState(state =>({
			years: ++state.years
		}))
	}
	render(){
		const {name, surname, link} = this.props;
		const {years} = this.state;
		return(
		<React.Fragment>
		<button onClick={this.nextYear}>++</button>
			<h1>My name is {name}, surname - {surname}, years = {years}</h1>
			<a href={link}>My profile</a>
		</React.Fragment>
		)
	}
}*/


/*const All = () => {
	return (
		<React.Fragment>
			<WhoAmI name="John" surname="Smith" link="https://vk.com/id46979289" />
			<WhoAmI name="Sergei" surname="Smithson" link="https://vk.com" />
			<WhoAmI name="Johnson" surname="Smithelson" link="https://vk.com/id46979289" />
		</React.Fragment>
		)
}*/
ReactDOM.render(<App/>, document.getElementById('root'));



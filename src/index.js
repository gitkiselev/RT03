import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import './app.css';
import './app-header.css';
import './post-add-form.css';
import './post-list.css';
import './post-list-item.css';
import './post-status-filter.css';
import './search-panel.css';
//import './css/app.css';



const Header = () => {
	
	return <h2>Hello World!</h2>
}

const Field = () => {
	const holder = "Enter here";
	const styledField = {
		width: '300px'
	}
	return <input 
				style={styledField}	
				 type="text"
				 placeholder={holder}
				 autoComplete=""
				 className="first"
				 htmlFor="" />
}

const Btn = () => {
	const text = "Log in";
	const logged = true;
	const res = () => {
		return 'Log in, please'
	}
	const p = <p>Log in</p>
	return <button>{logged ? "Enter" : text}</button>
}

const App = () => {
	return (
		<div>
			<Header/>
			<Field/>
			<Btn/>
		</div>
		
		)
}
ReactDOM.render(<App/>, document.getElementById('root'));



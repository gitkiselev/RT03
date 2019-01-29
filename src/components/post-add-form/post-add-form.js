import React, {Component} from 'react';
//import './post-add-form.css';
import styled from 'styled-components';
const PostAddFor = styled.form`
	display: flex;
	margin-top: 20px;
		input { 
		  width: auto;
		  flex-grow: 1;
		  margin-right: 3px;
		}
		button {
			color: #6c757d;
	    	border-color: #6c757d;
		}

`
export default class PostAddForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
		this.onValueChange = this.onValueChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onValueChange(e){
		this.setState({
			text: e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault();
		if (this.state.text.length === 0){
			return false;
		}
		this.props.onAdd(this.state.text);
			this.setState({
			text: ''
		});
		
			
	}
	render(){
		return (
				<PostAddFor
				onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="О чем вы думаете сейчас?"
						className="form-control new-post-label"
						onChange={this.onValueChange}
						value={this.state.text}
						 />
						 <button
						 		type="submit"
						 		className="btn-outline-secondary"
						 		>
								Добавить
						 		</button>
				</PostAddFor>
	
		)
	}
}

 
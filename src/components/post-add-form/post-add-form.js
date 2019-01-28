import React from 'react';
//import './post-add-form.css';
import styled from 'styled-components';
const PostAddFor = styled.div`
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
const PostAddForm = ({onAdd}) => {
	return (
		<PostAddFor>
			<input
				type="text"
				placeholder="О чем вы думаете сейчас?"
				className="form-control new-post-label"
				 />
				 <button
				 		type="submit"
				 		className="btn-outline-secondary"
				 		onClick={() => onAdd('Hello')}>
						Добавить
				 		</button>
		</PostAddFor>
	)
}

export default PostAddForm;
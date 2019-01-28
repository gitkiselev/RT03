import React from 'react';
//import './search-panel.css';
import styled from 'styled-components';
const StyledInput = styled.input`
	margin: 1rem 0;
	display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`
const SearchPanel = () => {
	return (
		<StyledInput	
				type="text"
				placeholder="Поиск по записям"
		 />
		)
}

export default SearchPanel;
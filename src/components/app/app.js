import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';


const App = () => {
	
	const data = [
		
		[],
		'string',
		[1, 2, 'array'],
		56,
		{label: 'Going to learn React', imporant: true, id: 'kjk'},
		{label: 'That is so good', imporant: false, id: 'jkhyg'},
		{label: 'I need a break...', imporant: false, id:'ghytf'}

	]
	return (
			<div className="app">
				<AppHeader/ >
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList posts={data}/>
				<PostAddForm />
			</div>
		)
	
}
export default App;
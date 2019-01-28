import React from 'react';
import { Button } from 'reactstrap';
const PostStatusFilter = () => {
	return (
		<div className="btn-group">
			<Button color='info'>Все</Button>
			<button type="button" className="btn btn-info">Все</button>
			<button type="button" className="btn btn-secondary">Понравилось</button>
		</div>
		)
}
export default PostStatusFilter;
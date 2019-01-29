import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem} from 'reactstrap';
import './post-list.css';
const PostList = ({posts, onDelete, onToggle}) => {
	
	const elements = posts.filter(item => 
		 !!item && item.constructor === Object
	).map((item) => {
		const {id, ...itemProps} = item;
				return (
					<ListGroupItem key={id} className="list-group-item">
						<PostListItem
						{...itemProps}
						onDelete={() => onDelete(id)}
						onToggleLike={() => onToggle(id, 'like')}
						onToggleImportant={() => onToggle(id, 'important')}/>
					</ListGroupItem>
			)
		});
		return (
			<ListGroup className="app-list">
				{elements}
			</ListGroup>
		)
}
export default PostList;
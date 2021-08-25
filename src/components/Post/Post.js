import React, { useEffect, useState, useContext } from 'react';
import { PostContext } from '../../utils/PostContext';
import * as S from './Post.Elements';

const Post = () => {
	const [comments, setComments] = useState(null);
	const { postData } = useContext(PostContext);

	const getPost = async () => {
		const url = `https://jsonplaceholder.typicode.com/posts/${postData.id}/comments`;
		const method = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		};

		const response = await fetch(url, method);
		const data = await response.json();
		setComments(data);
	};

	useEffect(() => {
		getPost();
	}, []);

	return (
		<S.Wrapper>
			<S.Title>{postData.title}</S.Title>
			<S.PostContent>{postData.body}</S.PostContent>
			<S.CommentsWrapper>Comments</S.CommentsWrapper>
			{!comments ? (
				<S.Loading>Loading...</S.Loading>
			) : (
				comments.map((comment) => (
					<S.Comment key={comment.id}>
						<S.CommentName>{comment.name}</S.CommentName>
						<S.CommentContent>{comment.body}</S.CommentContent>
					</S.Comment>
				))
			)}
		</S.Wrapper>
	);
};

export default Post;

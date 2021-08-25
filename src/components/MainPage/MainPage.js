import React, { useContext } from 'react';
import { PostContext } from '../../utils/PostContext';
import * as S from './MainPage.Elements';

const MainPage = () => {
	const { posts, setPostData } = useContext(PostContext);

	const handlePost = (post) => {
		setPostData({ id: post.id, title: post.title, body: post.body });
	};

	return (
		<S.Wrapper>
			{posts.map((post) => (
				<S.PostLink key={post.id}>
					<S.Title>{post.title}</S.Title>
					<S.Content>{post.body}</S.Content>
					<S.Button to={`/posts/${post.id}`} onClick={() => handlePost(post)}>
						Full Version
					</S.Button>
				</S.PostLink>
			))}
		</S.Wrapper>
	);
};

export default MainPage;

import React, { useContext } from 'react';
import { PostContext } from '../../utils/PostContext';
import * as S from './MainPage.Elements';

const MainPage = () => {
	const { posts, postData, setPostData } = useContext(PostContext);

	return (
		<S.Wrapper>
			{posts.map((post) => (
				<S.PostLink key={post.id}>
					<S.Title>{post.title}</S.Title>
					<S.Content>{post.body}</S.Content>
					<S.Button
						to={`/posts/${post.id}`}
						onClick={() => setPostData({ id: post.id, title: post.title, body: post.body })}>
						Full Version
					</S.Button>
				</S.PostLink>
			))}
		</S.Wrapper>
	);
};

export default MainPage;

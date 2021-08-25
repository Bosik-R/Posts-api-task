import React, { useContext } from 'react';
import { PostContext, postDataContext } from '../../utils/PostContext';
import * as S from './Header.Elements';

const Header = () => {
	const { postData, setPostData } = useContext(PostContext);

	return (
		<S.Wrapper>
			<S.TitleWraper>
				<S.DotsWrapper>
					<S.Dot></S.Dot>
					<S.Dot></S.Dot>
					<S.Dot></S.Dot>
				</S.DotsWrapper>
				Dashboard
			</S.TitleWraper>
			<S.Nav>
				<S.Breadcrumb to='/' onClick={() => setPostData(postDataContext)}>
					Posts
				</S.Breadcrumb>
				{postData.id && (
					<>
						<S.Separator>{'>'}</S.Separator>
						<S.LinkTitle>{postData.title}</S.LinkTitle>
					</>
				)}
			</S.Nav>
		</S.Wrapper>
	);
};

export default Header;

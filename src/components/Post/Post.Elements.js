import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 50%;
`;

export const Title = styled.h1`
	margin: 0;
	padding: 50px 20px 20px 20px;
`;

export const PostContent = styled.p`
	padding: 20px;
	margin-bottom: 30px;
`;

export const Loading = styled(Title)``;

export const Comment = styled.article`
	margin-bottom: 20px;
`;

export const CommentName = styled.h2`
	margin: 20px;
`;

export const CommentContent = styled(PostContent)``;

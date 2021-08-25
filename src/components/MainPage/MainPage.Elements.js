import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
	width: 100%;
	padding: 20px 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

export const PostLink = styled.div`
	max-width: 600px;
	width: 100%;
	padding: 10px;
	border: 1px solid #5c5c5c;
	margin-bottom: 30px;
`;

export const Title = styled.h1``;
export const Content = styled.p``;

export const Button = styled(Link)`
	padding: 5px 10px;
	float: right;
	border: 1px solid #5c5c5c;
	border-radius: 10px;
	font-size: 20px;
	background-color: inherit;
	transition: all 300ms ease;
	cursor: pointer;

	&:hover {
		background-color: #3aa435;
		color: #ffffff;
	}
`;

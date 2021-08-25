import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #5c5c5c;
`;

export const TitleWraper = styled.div`
	padding: 10px 10px;
	background-color: #262020;
	text-align: center;
	border-radius: 10px 10px 0 0;
	color: #ffffff;
	position: relative;
	overflow: hidden;
`;

export const DotsWrapper = styled.span`
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	//height: 100%;
`;

export const Dot = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: #858585;
	margin-right: 8px;
`;

export const Nav = styled.nav`
	width: 100%;
	padding: 5px 10px;
`;

export const Breadcrumb = styled(Link)`
	margin: 0 5px;
	padding: 0;
	text-decoration: none;
	color: #000000;
`;

export const Separator = styled(Breadcrumb)``;

export const LinkTitle = styled(Breadcrumb)`
	color: #787878;
`;

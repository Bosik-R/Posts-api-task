import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Post from './components/Post/Post';
import { PostContext, postDataContext } from './utils/PostContext';

const Container = styled.div`
	max-width: 1024px;
	width: 100%;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	width: 100%;
	border-radius: 20px;
	border: 1px solid #5c5c5c;
	border-radius: 10px;
	margin-bottom: 50px;
`;

const Loading = styled.h1``;

const url = 'https://jsonplaceholder.typicode.com/posts';

const method = {
	method: 'GET',
	headers: { 'Content-Type': 'application/json' },
};

function App() {
	const [posts, setPosts] = useState(null);
	const [postData, setPostData] = useState(postDataContext);

	const getPosts = async () => {
		const response = await fetch(url, method);
		const data = await response.json();
		setPosts(data);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<Container>
			<PostContext.Provider value={{ posts, postData, setPostData }}>
				<Wrapper>
					<BrowserRouter>
						<Header />
						{posts ? (
							<Switch>
								<Route exact path='/' component={MainPage} />
								<Route path='/posts/:id' component={Post} />
							</Switch>
						) : (
							<Loading>Loading...</Loading>
						)}
					</BrowserRouter>
				</Wrapper>
			</PostContext.Provider>
		</Container>
	);
}

export default App;

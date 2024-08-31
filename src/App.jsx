import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {Login} from './components/login/Login';
import {Header} from './components/login/Header';
import {Footer} from './components/login/Footer';
// import {HeaderInitial} from './components/initialPage/HeaderInital';
// import {MainInitial} from './components/initialPage/MainInitial';
// import {FooterInitial} from './components/initialPage/FooterInitial';
import {Home} from './components/home/Home';


function App() {
	return (
		<div>
			<Router>
				<Routes>

					{/* <Route path='/' element={
						<div className='intial-page'>
							<HeaderInitial />
							<MainInitial />
							<FooterInitial />
						</div>
						}></Route> */}

					<Route path='/home' element={
						<div className='home-page'>
							<Home />
						</div>
					}></Route>

					<Route path='/login' element={
						<div>
							<div className='login-main'>
								<Login />
								<Header />
							</div>
							<Footer />
						</div>
						}></Route>

				</Routes>
			</Router>

		</div>
	);
}

export default App;

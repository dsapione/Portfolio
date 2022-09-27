import './App.css';
import React , { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';

function App() {

	const [pages] =useState([
		{
			name: 'ABOUT'
		},
		{
			name: 'SKILLS'
		},
		{
			name: 'PROJECTS'
		},
		{
			name: 'RESUME'
		},
		{
			name: 'CONTACT'
		}
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
		<>
			<Header/>
			<Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
			<Routes>
				<Route path='/' element={<Main currentPage={currentPage}/>} />
			</Routes>			
			<Footer/>
		</>
  );
}

export default App;

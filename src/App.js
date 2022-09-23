import './App.css';
import React , { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Aside from './components/aside';

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
			<Header />
			<Aside pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
			<Footer />
		</>
  );
}

export default App;

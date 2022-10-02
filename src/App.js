import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Nav from './components/nav';
import About from './components/about';
import Skills from './components/skills';
// import Projects from './components/projects';
import Resume from './components/resume';
// import Contact from './components/contact';
import Footer from './components/footer';

function App() {

  return (
		<>
			<Header/>
			<Nav/>
			<Routes>
				<Route path='/' element={<About/>}/>
				<Route path='/skills' element={<Skills/>}/>
				{/* <Route path='/projects' element={<Projects/>}/> */}
				<Route path='/resume' element={<Resume/>}/>
			</Routes>
			<Footer/>
		</>
  );
}

export default App;

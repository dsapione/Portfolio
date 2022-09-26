import React from "react";
import About from '../about';
import Skills from '../skills';
// import Projects from '../projects';
// import Contact from '../contact';
// import Resume from '../resume';

const Main = (props) => {
	const renderPage = () => {
		if (props.currentPage.name === 'ABOUT') {
			return <About/>
		} else if (props.currentPage.name === 'SKILLS') {
			return <Skills/>
		} 
		// else if (props.currentPage.name === 'PROJECTS') {
		// 	return <Projects/>
		// } else if (props.currentPage.name === 'RESUME') {
		// 	return <Resume/>
		// } else { return <Contact/>}
	}

	return (
		<div>
			{renderPage()}
		</div>
	)
}

export default Main;
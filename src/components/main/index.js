import React from "react";
import { Route, Routes} from 'react-router-dom';
import About from '../about';
import Skills from '../skills';
// import Projects from '../projects';
// import Contact from '../contact';
import Resume from '../resume';

function Main () {

	return (
		<Routes>
			<Route path='/' element={<About/>}/>
			<Route path='/skills' element={<Skills/>}/>
			<Route path='/resume' element={<Resume/>}/>
		</Routes>

	);
}

export default Main;
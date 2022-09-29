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
			<Route path='/ABOUT' element={<About/>}/>
			<Route path='/SKILLS' element={<Skills/>}/>
			<Route path='/RESUME' element={<Resume/>}/>
		</Routes>

	);
}

export default Main;
import React from "react";
import { Route, Routes} from 'react-router-dom';
import About from '../about';
import Skills from '../skills';
// import Projects from '../projects';
import Resume from '../resume';
// import Contact from '../contact';

function Main () {

	return (
		<Routes>
			<Route path='/' element={<About/>}/>
			<Route path='/skills' element={<Skills/>}/>
			{/* <Route path='/projects' element={<Projects/>}/> */}
			<Route path='/resume' element={<Resume/>}/>
		</Routes>
	);
}

export default Main;
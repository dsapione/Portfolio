import React from "react";
import resume from "../../assets/resume/Resume.pdf";

function Resume() {
	return (
		// download pdf resume
		<section className="flex justify-center items-center text-8xl h-[20.5rem] mr-[9.673rem]">
			<a className="group" href={resume} target="_blank" rel="noreferrer">
				<i className="fa-solid fa-file duration-500 group-hover:text-sky-500 hover:ease-in-out"></i>
				<p className="text-2xl duration-500 group-hover:text-sky-500 hover:ease-in-out">Resume</p>
			</a>
		</section>
	);
}

export default Resume;
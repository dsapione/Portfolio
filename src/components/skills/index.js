import React from "react";
import jqueryIcon from "../../assets/images/jquery.svg"
import graphqlIcon from "../../assets/images/graphql.svg"
import mysqlIcon from "../../assets/images/mysql.svg"
import tailwindIcon from "../../assets/images/tailwind.svg"

function Skills() {
	return (
		// skills section with a wave of skill cards
		<section className="flex justify-center items-center h-[20.5rem]">
			<div className="icons-wave text-8xl flex flex-wrap gap-10 w-[60rem]">
				<div>
					<i className="fa-brands fa-css3-alt"></i>
				</div>		
				<div>
					<i className="fa-brands fa-html5"></i>				
				</div>
				<div>
					<i className="fa-brands fa-square-js"></i>				
				</div>
				<div>
					<i className="fa-brands fa-node"></i>				
				</div>
				<div>
					<i className="fa-brands fa-react"></i>				
				</div>
				<div>
					<i className="fa-brands fa-bootstrap"></i>				
				</div>
				<div>
					<img src={jqueryIcon} alt="jquery icon"/>				
				</div>
				<div>
					<img src={graphqlIcon} alt="graphql icon"/>				
				</div>
				<div>
					<img src={mysqlIcon} alt="mysql icon"/>				
				</div>
				<div>
					<img src={tailwindIcon} alt="tailwind icon"/>				
				</div>
			</div>
		</section>
	);
}

export default Skills;
import './App.css';

function App() {
  return (
		// <!-- header containg name and icons -->
		<header class="flex flex-col justify-center items-center h-screen">
			<h1 class="title text-8xl font-bold">Daniel Sapione</h1>
			<p class="text-xl -translate-y-2" >FRONT END DEVELOPER | PORTFOLIO</p>
			{/* <!-- line div between name and icons --> */}
			<div class="border-b-[6px] border-solid border-slate-500 rounded-[3px] w-[26em]"></div>
			{/* <!-- icons --> */}
			<section class="flex justify-evenly w-[10em] mt-[12.5px] text-5xl">
			<a href="https://github.com/dsapione" target="blank">
				<i class="fa-brands fa-square-github transition duration-500 hover:text-slate-500 hover:ease-in-out"></i>
			</a>
			<a href="mailto:dsapion@gmail.com">
				<i class="fa-solid fa-envelope transition duration-500 hover:text-slate-500 hover:ease-in-out"></i>
			</a>
			<a href="https://www.linkedin.com/in/daniel-sapione/" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-linkedin transition duration-500 hover:text-slate-500 hover:ease-in-out"></i>
			</a>
			</section>
		</header>
  );
}

export default App;

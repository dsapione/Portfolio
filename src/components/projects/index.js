// import React from "react";

// function Projects () {

// 	class Carousel {
// 		constructor(el) {
// 			this.el = el;
// 			this.carouselOptions = ['previous', 'next'];
// 			this.carouselData = [
// 				{
// 					'id': '1',
// 					'src': './assets/images/password-creator.jpg',
// 					'href': 'https://dsapione.github.io/Password-creator/'
// 				},
// 				{
// 					'id': '2',
// 					'src': './assets/images/dans-tech-blog.jpg',
// 					'href': 'https://warm-sierra-83835.herokuapp.com/'
// 				},
// 				{
// 					'id': '3',
// 					'src': './assets/images/xyz-rentals.jpg',
// 					'href': 'https://secret-savannah-63468.herokuapp.com'
// 				},
// 				{
// 					'id': '4',
// 					'src': './assets/images/hourly-organizer.jpg',
// 					'href': 'https://dsapione.github.io/Hourly-organizer/'
// 				}
// 			];
// 			this.carouselInView = [1, 2, 3, 4];
// 		}
	
// 		newCarousel() {
// 			const container = document.createElement('div');
// 			const controls = document.createElement('div');
	
// 			this.el.append(container, controls);
// 			container.className = 'carousel-container';
// 			controls.className = 'carousel-controls';
	
// 			this.carouselData.forEach((item, index) => {
// 				const carouselItemLink = document.createElement('a');
// 				const carouselItem = document.createElement('img');
	
// 				container.append(carouselItemLink);
// 				carouselItemLink.append(carouselItem);
	
// 				carouselItemLink.href = item.href;
// 				carouselItemLink.target = '_blank';
	
// 				carouselItemLink.className = `carousel-item carousel-item-${index + 1}`;
// 				carouselItem.src = item.src;
// 				carouselItem.setAttribute('loading', 'lazy');
// 				carouselItem.setAttribute('data-index', `${index + 1}`);
// 			});
	
// 			this.carouselOptions.forEach((option) => {
// 				const btn = document.createElement('button');
// 				const axSpan = document.createElement('span');
	
// 				axSpan.innerText = option;
// 				axSpan.className = 'ax-hidden';
// 				btn.append(axSpan);
	
// 				btn.className = `carousel-control carousel-control-${option}`;
// 				btn.setAttribute('data-name', option);
	
// 				controls.append(btn);
// 			});
	
// 			this.setControls([...controls.children]);
	
// 			this.carouselContainer = container;
// 		}
	
// 		setControls(controls) {
// 			controls.forEach(control => {
// 				control.onclick = (event) => {
// 					event.preventDefault();
	
// 					this.controlManager(control.dataset.name);
// 				};
// 			});
// 		}
	
// 		controlManager(control) {
// 			if (control === 'previous') return this.previous();
// 			if (control === 'next') return this.next();
	
// 			return;
// 		}
	
// 		previous() {
// 			// Update order of items in data array to be shown in carousel
// 			this.carouselData.unshift(this.carouselData.pop());
	
// 			// Push the first item to the end of the array so that the previous item is front and center
// 			this.carouselInView.push(this.carouselInView.shift());
	
// 			// Update the css class for each carousel item in view
// 			this.carouselInView.forEach((item, index) => {
// 				this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
// 			});
	
// 			// Using the first 4 items in data array update content of carousel items in view
// 			this.carouselData.slice(0, 4).forEach((data, index) => {
// 				document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
// 			});
// 		}
	
// 		next() {
// 			// Update order of items in data array to be shown in carousel
// 			this.carouselData.push(this.carouselData.shift());
	
// 			// Take the last item and add it to the beginning of the array so that the next item is front and center
// 			this.carouselInView.unshift(this.carouselInView.pop());
	
// 			// Update the css class for each carousel item in view
// 			this.carouselInView.forEach((item, index) => {
// 				this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
// 			});
	
// 			// Using the first 4 items in data array update content of carousel items in view
// 			this.carouselData.slice(0, 4).forEach((data, index) => {
// 				document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
// 			});
// 		}
	
// 	}
	
// 	const el = document.querySelector('.carousel');
	
// 	new Carousel(el).newCarousel();

// 	return (
// 		<section class="carousel"></section>
// 	)
// }

// export default Projects;
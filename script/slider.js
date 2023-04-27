const entities = [
	{
	img: 'images/Rostov-on-don_Admiral.png',
	alt: 'Hotel Rostov-on-Don Admiral',
	city_parametrs: 'Rostov-on-Don LCD Admiral',
	apartment_area: '81 m2',
	repair_time: '3.5 months',
	repair_cost: 'Upon request',
	button_click: '.admiral',
	},
	{
	img: 'images/Sochi_Thieves.png',
	alt: 'Sochi Thieves',
	city_parametrs: 'Sochi Thieves',
	apartment_area: '105 m2',
	repair_time: '4 months',
	repair_cost: 'Upon request',
	button_click: '.sochi'
	},
	{
	img: 'images/Rostov-on-Don_Patriotic.png',
	alt: 'Hotel Rostov-on-Don Patriotic',
	city_parametrs: 'Rostov-on-Don Patriotic',
	apartment_area: '93 m2',
	repair_time: '3 months',
	repair_cost: 'Upon request',
	button_click: '.patriotic'
	}
]

const img = document.querySelector('.hottel');
const city_parametrs = document.querySelectorAll('.city_parametrs');
const apartment_area = document.querySelectorAll('.apartment_area');
const repair_time = document.querySelectorAll('.repair_time');
const repair_cost = document.querySelectorAll('.repair_cost');

let pageWidth = document.documentElement.scrollWidth // Проверяем разрешение экрана

if (pageWidth <= 1300) {
	mobileSlider ()
} else {
	desctopSlider () 
}

// Если разрешение экрана изменилось с десктопной версии на мобильную
window.addEventListener("resize", () => {
    pageWidth = document.documentElement.scrollWidth
	if (pageWidth <= 1300) {
		mobileSlider ()
	} else {
		desctopSlider () 
	}
})

//Финкция работы версии слайдера на ПК
function desctopSlider () {
	
	const prev = document.querySelector('.arrow_img_prev')
	const next = document.querySelector('.arrow_img_next')
	const dots_0 = document.querySelector('.dots_0')
	const dots_1 = document.querySelector('.dots_1')
	const dots_2 = document.querySelector('.dots_2')
	const dot_0 = document.querySelector('.dot_0')
	const dot_1 = document.querySelector('.dot_1')
	const dot_2 = document.querySelector('.dot_2')

	//Делаем активным первый эл. слайдера
	img.src = `${entities[0].img}`;
	city_parametrs[0].innerText = entities[0].city_parametrs;
	apartment_area[0].innerText = entities[0].apartment_area;
	repair_time[0].innerText = entities[0].repair_time;
	repair_cost[0].innerText = entities[0].repair_cost;
	clearAtribut()
	document.querySelector('.dot_0').removeAttribute('fill-opacity');
	document.querySelector(entities[0].button_click).classList.add("activs_button")
	document.querySelector(entities[0].button_click).classList.remove("no_activs_button")

	//Активация неоходимы элементов
	const setEntity = (index) => {
		img.src = `${entities[index].img}`;
		img.alt = `${entities[index].alt}`;
		city_parametrs[0].innerText = entities[index].city_parametrs;
		apartment_area[0].innerText = entities[index].apartment_area;
		repair_time[0].innerText = entities[index].repair_time;
		repair_cost[0].innerText = entities[index].repair_cost;
		document.querySelector(`.dot_${index}`).removeAttribute('fill-opacity');
		document.querySelector(entities[index].button_click).classList.add("activs_button")
		document.querySelector(entities[index].button_click).classList.remove("no_activs_button")
		
	}
	
	let currentIndex = 0
	
	prev.addEventListener('click', () => {
		if (currentIndex > 0) {
			currentIndex -= 1;
			setEntity(currentIndex);
			document.querySelector(`.dot_${currentIndex + 1}`).setAttribute('fill-opacity', '0.3');
			document.querySelector(entities[currentIndex + 1].button_click).classList.remove("activs_button")
			document.querySelector(entities[currentIndex + 1].button_click).classList.add("no_activs_button")
		} else if (currentIndex <= 0) {
			document.querySelector(entities[currentIndex].button_click).classList.remove("activs_button")
			document.querySelector(entities[currentIndex].button_click).classList.add("no_activs_button")
			document.querySelector(`.dot_${currentIndex}`).setAttribute('fill-opacity', '0.3');
			currentIndex = 2;
			setEntity(currentIndex);
		}
	});
	next.addEventListener('click', () => {
		if (currentIndex < 2) {
			currentIndex += 1;
			setEntity(currentIndex);
			document.querySelector(`.dot_${currentIndex - 1}`).setAttribute('fill-opacity', '0.3');
			document.querySelector(entities[currentIndex - 1].button_click).classList.remove("activs_button")
			document.querySelector(entities[currentIndex - 1].button_click).classList.add("no_activs_button")
		}else if (currentIndex >= 2) {
			document.querySelector(entities[currentIndex].button_click).classList.remove("activs_button")
			document.querySelector(entities[currentIndex].button_click).classList.add("no_activs_button")
			document.querySelector(`.dot_${currentIndex}`).setAttribute('fill-opacity', '0.3');
			currentIndex = 0;
			setEntity(currentIndex);
		}	
	});
	
	//Очистка ранее включенных элементов
	function clearAtribut() {
		if (!(dot_0.hasAttribute('fill-opacity'))){
			dot_0.setAttribute('fill-opacity', '0.3');
			document.querySelector(entities[0].button_click).classList.remove("activs_button")
			document.querySelector(entities[0].button_click).classList.add("no_activs_button")
		} else if (!(dot_1.hasAttribute('fill-opacity'))){
			dot_1.setAttribute('fill-opacity', '0.3');
			document.querySelector(entities[1].button_click).classList.remove("activs_button")
			document.querySelector(entities[1].button_click).classList.add("no_activs_button")
		} else {
			dot_2.setAttribute('fill-opacity', '0.3');
			document.querySelector(entities[2].button_click).classList.remove("activs_button")
			document.querySelector(entities[2].button_click).classList.add("no_activs_button")
		}
	};
	
	dots_0.addEventListener('click', () => {
		clearAtribut()
		setEntity(0)
		currentIndex = 0
	});
	
	dots_1.addEventListener('click', () => {
		clearAtribut()
		setEntity(1)
		currentIndex = 1
	});
	
	dots_2.addEventListener('click', () => {
		clearAtribut()
		setEntity(2)
		currentIndex = 2
	});
	
	document.querySelector(`.admiral`).addEventListener('click', () => {
		clearAtribut()
		setEntity(0)
		currentIndex = 0
	});
	
	document.querySelector(`.sochi`).addEventListener('click', () => {
		clearAtribut()
		setEntity(1)
		currentIndex = 1
	});
	
	document.querySelector(`.patriotic`).addEventListener('click', () => {
		clearAtribut()
		setEntity(2)
		currentIndex = 2
	});
}

//Финкция работы версии слайдера при разрешении менее 1300px
function mobileSlider () {
	//Делаем активным первый эл. слайдера
	img.src = `${entities[0].img}`;
	city_parametrs[1].innerText = entities[0].city_parametrs;
	apartment_area[1].innerText = entities[0].apartment_area;
	repair_time[1].innerText = entities[0].repair_time;
	repair_cost[1].innerText = entities[0].repair_cost;
	
	const prevMobile = document.querySelector('.prev_mobile')
	const nextMobile = document.querySelector('.next_mobile')
	let currentIndex = 0

	//Активация неоходимы элементов
	const setEntityMobile = (index) => {
		img.src = `${entities[index].img}`;
		img.alt = `${entities[index].alt}`;
		city_parametrs[1].innerText = entities[index].city_parametrs;
		apartment_area[1].innerText = entities[index].apartment_area;
		repair_time[1].innerText = entities[index].repair_time;
		repair_cost[1].innerText = entities[index].repair_cost;
		
	}

	prevMobile.addEventListener('click', () => {
		if (currentIndex > 0) {
			currentIndex -= 1;
			setEntityMobile(currentIndex);
		} else if (currentIndex <= 0) {
			currentIndex = 2;
			setEntityMobile(currentIndex);
		}
	});
	nextMobile.addEventListener('click', () => {
		if (currentIndex < 2) {
			currentIndex += 1;
			setEntityMobile(currentIndex);
		}else if (currentIndex >= 2) {
			currentIndex = 0;
			setEntityMobile(currentIndex);
		}	
	});
}


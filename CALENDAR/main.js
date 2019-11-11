const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');
const date_memos_element = document.querySelector('.date-memos')
const popup_element = document.querySelector('.popup')
const close_element = document.querySelector('.close')
const button_element = document.getElementById('.button')
//elementele care se leaga de css, constante
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate(); //ziua
let month = date.getMonth(); //luna
let year = date.getFullYear(); //anul intreg, nu ultimele 2 cifre

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;
//arata ziua de astazi

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;
//arata luna in care suntem
populateDates();




date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);
// butoane(deschide calendar, luna urmatoare, luna precedenta)
function toggleDatePicker (e) {
	if (!checkEventPathForClass(e.path, 'dates')) {
		dates_element.classList.toggle('active');
	}
}
// deschide blockul cu zile

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}
// duce la cealalta luna

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}
//duce la luna precedenta

function populateDates (e) {
	days_element.innerHTML = '';
	let amount_days = 31;

	if (month == 1) {
		amount_days = 28;
	}

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;//zilele, la fel ca lunile incep de la 0 nu de la 1, deci trb sa adaugam 1 in afisare

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');//daca ziua este apasata, i se adauga clasa 'selected' pentru a avea culoarea verde
		}

		day_element.addEventListener('click', function () {//functia pastreaza ziua selectata doar in luna si anul in care am selectat-o
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = selectedDate;

			populateDates();
		});

		days_element.appendChild(day_element);
	}
}
//functia care populeaza zilele in tabela

function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}
	
	return false;
}
//daca apasam pe butonul principal atunci deschide calendarul
function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;
}


    document.getElementById("btc").onclick=function(){
        document.getElementById("ppc").style.display = "flex";
	}
	
	document.getElementById("btic1").onclick=function(){
		document.getElementById("ppc").style.display = "none";
	}

	document.getElementById("btic2").onclick=function(){
		document.getElementById("ppc").style.display = "none";
	}

	document.getElementById("btiv").onclick=function(){
		document.getElementById("ppv").style.display = "none";
	}

	document.getElementById("btv").onclick=function(){
        document.getElementById("ppv").style.display = "flex";
	}



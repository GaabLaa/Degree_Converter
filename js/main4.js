const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celsius

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
	}
}

const farToCel = () => {
	fahrenheit = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C to ${fahrenheit}°F`
	converter.value = ''
}

const celToFar = () => {
	celsius = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°F to ${celsius}°C`
	converter.value = ''
}

const conversion = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			farToCel()
		} else {
			celToFar()
		}
	} else {
		result.textContent = 'Musisz podać jakąś wartość!'
	}
}

const reset = () => {

    result.textContent = ''
    converter.value = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)

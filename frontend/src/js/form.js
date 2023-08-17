export default class Form {
	static selectors = {
		form: '[data-js-form]',
		input: '[data-js-input]'
	}

	static url = 'https://unsplash.com/photos/pdALzg0yN-8'

	constructor () {
		this.instance = document.querySelector(Form.selectors.form)

		this.inputs = Array.from(
			this.instance.querySelectorAll(Form.selectors.input)
		)

		if (this.instance) {
			this.bindEvents()
		}
	}

	static setInputErrorState (input, isValid = true) {
		input.classList.toggle('isValid', isValid)
		input.classList.remove('isNotValid')
		if (!isValid) {
			input.classList.add('isNotValid')
		}
	}

	static isEmailValid (input) {
		const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
		return reg.test(input.value)
	}

	static isDefaultInputValid (input) {
		return !!input.value.length
	}

	static isValid (inputs = []) {
		const isInputValid = (input) => {
			const validationType = input.getAttribute('data-js-input')
			switch (validationType) {
			case 'email':
				return Form.isEmailValid(input)
			default:
				return Form.isDefaultInputValid(input)
			}
		}
		return inputs
			.map((el) => {
				const isValid = isInputValid(el)
				Form.setInputErrorState(el, isValid)
				return isValid
			})
			.every((isValid) => !!isValid)
	}

	static async send (url, instance) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				mode: 'no-cors',
				method: 'POST',
				headers: {
					'Access-Control-Allow-Headers': 'Content-Type',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PATCH'
				},
				body: new FormData(instance)
			})
				.then(res => {
					if (res.ok) {
						resolve(res)
					} else {
						reject(new Error(`Error: ${res.status} ${res.statusText}`))
					}
				})
				.catch(err => {
					reject(err)
				})
		})
	}

	#onSubmit (e) {
		e.preventDefault()
		const isValid = Form.isValid(this.inputs)
		const btn = this.instance.querySelector('input[type="submit"]')
		if (isValid) {
			btn.disabled = true
			Form.send(Form.url, this.instance)
				.then(() => {
					const currentModal = document.querySelector('[data-js-modal="modal2"]')
					window.modal.modalOpen(currentModal)
					btn.disabled = false
				})
				.catch(() => {
					const currentModal = document.querySelector('[data-js-modal="modal2"]')
					const changeText = currentModal.querySelector('.message__descr')
					changeText.innerText = 'An error has occurred'
					window.modal.modalOpen(currentModal)
					btn.disabled = false
				})
		}
	}

	bindEvents () {
		this.instance.addEventListener('submit', (e) => this.#onSubmit(e))
	}
}

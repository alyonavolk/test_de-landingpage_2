export default class Modal {
	static selectors = {
		modal: '[data-js-modal]',
		openButton: '[data-js-open]',
		closeButton: '[data-js-close]'
	}

	static body = document.querySelector('body')

	constructor () {
		this.modal = Array.from(
			document.querySelectorAll(Modal.selectors.modal)
		)
		this.openButton = Array.from(
			document.querySelectorAll(Modal.selectors.openButton)
		)
		this.closeButton = Array.from(
			document.querySelectorAll(Modal.selectors.closeButton)
		)
		this.unlock = true
		this.timeout = 300

		if (this.modal && this.openButton) {
			this.clickOpen()
			this.clickClose()
		}
	}

	clickOpen () {
		this.openButton.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault()
				const modalName = btn.getAttribute('data-js-open')
				this.modal.forEach(modal => {
					const modalAttr = modal.getAttribute('data-js-modal')
					if (modalAttr === modalName) {
						const currentModal = modal
						this.modalOpen(currentModal)
					}
				})
			})
		})
	}

	clickClose () {
		this.closeButton.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault()
				this.modalClose(btn.closest('.modal'))
			})
		})
	}

	modalOpen (modal) {
		if (modal && this.unlock) {
			const modalActive = document.querySelector('.modal__open')
			if (modalActive) {
				this.modalClose(modalActive, false)
			} else {
				this.bodyLock()
			}

			modal.classList.remove('modal__close')
			modal.classList.add('modal__open')
			modal.addEventListener('click', (e) => {
				if (!e.target.closest('.modal__content')) {
					this.modalClose(modal.closest('.modal'))
				}
			})
		}
	}

	modalClose (modal, doUnlock = true) {
		if (this.unlock) {
			modal.classList.remove('modal__open')
			modal.classList.add('modal__close')
			if (doUnlock) this.bodyUnLock()
		}
	}

	bodyLock () {
		const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

		document.body.style.paddingRight = lockPaddingValue
		document.body.style.overflow = 'hidden'

		this.unlock = false
		setTimeout(() => {
			this.unlock = true
		}, this.timeout)
	}

	bodyUnLock () {
		setTimeout(() => {
			document.body.style.paddingRight = '0px'
			document.body.style.overflow = 'visible'
		}, this.timeout)

		this.unlock = false
		setTimeout(() => {
			this.unlock = true
		}, this.timeout)
	}
}

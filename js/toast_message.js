// toast
const toastSuccess = (text) => {
    Toastify({
        text: text,
        duration: 4000,
        className: "info",
        style: {
            background: '#64B040',
        }
    })
    .showToast()
}

const toastError = (text) => {
    Toastify({
        text: text,
        duration: 4000,
        className: "info",
        style: {
            background: '#EE7203',
        }
    })
    .showToast()
}

const sendMessage = (event) => {
	event.preventDefault()
	var btnSubmit = document.querySelector('#contact-form button')
	btnSubmit.disabled = true
	btnSubmit.textContent = 'Enviado...'
	var form = document.querySelector('#contact-form')
	const formData = new FormData(form)
	fetch('/email-templates/contact-form.php', {
		method: 'POST',
		body: formData
	})
	.then(res => res.json())
	.then(data => {
		toastSuccess(data.message)
		btnSubmit.disabled = false
		btnSubmit.textContent = 'Enviar mensaje'
		form.reset()
	})
	.catch(err => {
		btnSubmit.disabled = false
		btnSubmit.textContent = 'Enviar mensaje'
		toastError('Ocurrió un error, intentalo de nuevo')
		console.log(err)
	})
}
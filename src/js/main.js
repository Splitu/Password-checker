const password = document.querySelector(".input-box__password")
const message = document.querySelector(".input-box__message")
const strength = document.querySelector(".strength")

const checkPassword = () => {}

const showMsg = () => {
	if (password.value.length > 0) {
		message.style.display = "block"
	} else {
		message.style.display = "none"
	}

	if (password.value.length < 5) {
		strength.innerHTML = "weak"
		password.style.borderColor = "rgb(252, 38, 10)"
		message.style.color = "rgb(252, 38, 10)"
	} else if (password.value.length >= 5 && password.value.length < 9) {
		strength.innerHTML = "medium"
		password.style.borderColor = "rgb(252, 239, 10)"
		message.style.color = "rgb(252, 239, 10)"
	} else if (password.value.length >= 9) {
		strength.innerHTML = "strong"
		password.style.borderColor = "rgb(0, 207, 58)"
		message.style.color = "rgb(0, 207, 58)"
	} else {
		password.style.borderColor = "rgb(204,204,204)"
	}
}
password.addEventListener("input", showMsg)

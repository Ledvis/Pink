var nav = document.querySelector(".main-nav");
var toggle = document.querySelector(".main-nav__toggle");
var popup = document.querySelector(".popup");

nav.classList.remove("main-nav--nojs");

toggle.addEventListener("click", function(event) {
	event.preventDefault();
	if (nav.classList.contains("main-nav--closed")) {
		nav.classList.remove("main-nav--closed");
		nav.classList.add("main-nav--opened");
	} else {
		nav.classList.add("main-nav--closed");
		nav.classList.remove("main-nav--opened");
	}
});

var closePopup = popup.querySelector(".btn-green");
var closePopupSuccess = popup.querySelector(".btn-green--hidden");
var form = document.querySelector(".form__blank");
var email = document.getElementById("email");
var error = document.querySelector(".form__mail-error");

form.addEventListener("submit", function(event) {
	if (!email.validity.valid) {
		popup.classList.add("popup--show");
		event.preventDefault();
		error.innerHTML = "Перепроверьте почту!";
		error.className = "form__mail-error";
		event.preventDefault();
	}
	if (email.validity.valid) {
		popup.classList.add("popup--successful");
		event.preventDefault();
		error.innerHTML = "";
	}
}, false);

closePopup.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup--show");
	popup.classList.remove("popup--successful");
});

closePopupSuccess.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup--show");
	popup.classList.remove("popup--successful");
})

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("popup--show")) {
			popup.classList.remove("popup--show");
		} 
		if (popup.classList.contains("popup--successful")) {
			popup.classList.remove("popup--successful");
		}
	}
});

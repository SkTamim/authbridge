// CUSTOM TEXT RADIO BUTTON
try {
	const textRadio = document.querySelectorAll(".custom-text-radio");
	textRadio.forEach((element, _, array) => {
		if (element.children[0].checked) {
			element.children[1].style.display = "inline";
		}

		element.addEventListener("click", () => {
			if (element.children[0].checked) {
				element.children[1].style.display = "inline";
			}
			// For targeting all elements except clicked one
			Array.prototype.except = function (val) {
				return this.filter(function (x) {
					return x !== val;
				});
			};
			let nonClickedElements = Array.from(array).except(element);
			nonClickedElements.forEach((el) => {
				el.children[1].style.display = "none";
			});
		});
	});
} catch (error) {
	console.log(error);
}

// BACK BUTTON FUNCTIONALITY
try {
	const mobileBackBtn = document.querySelectorAll(".mobile-back-btn");
	mobileBackBtn.forEach((element) => {
		element.addEventListener("click", () => {
			window.history.back();
		});
	});
} catch (error) {
	console.log(error);
}

// BODY BACKGROUDN COLOR CHANGE

try {
	let mainBox = document.querySelector(".main-box");

	if (window.innerWidth <= 576) {
		if (
			window.getComputedStyle(mainBox).backgroundColor === "rgb(255, 255, 255)"
		) {
			document.body.style.backgroundColor = "rgb(255, 255, 255)";
		}
	}
} catch (error) {
	console.log(error);
}

// POSTPONED DAYS FUNCTIONALITY
try {
	const postponedDays = document.getElementById("postponed-days");
	const postponedDaysText = document.getElementById("postponed-days-text");
	const postponedDaysSubmit = document.getElementById("submit-postponed-days");

	postponedDaysSubmit.addEventListener("click", () => {
		postponedDaysText.innerText = `Thanks for your input. We will get back after ${postponedDays.value} days`;
	});
} catch (error) {
	console.log(error);
}

// POSTPONED OR NOT AVAILABE MODAL FUNCTIONLALITY
try {
	const addressProceedBtn = document.getElementById("address-proceed-btn");

	const postponedRadioBtn = document.getElementById("postponed");
	const notAvailableRadioBtn = document.getElementById("not-available");

	if (postponedRadioBtn.checked) {
		addressProceedBtn.setAttribute("data-bs-target", "#how-many-days");
	}
	if (notAvailableRadioBtn.checked) {
		addressProceedBtn.setAttribute("data-bs-target", "#nomini-modal");
	}

	postponedRadioBtn.addEventListener("change", () => {
		if (postponedRadioBtn.checked) {
			addressProceedBtn.setAttribute("data-bs-target", "#how-many-days");
		}
	});
	notAvailableRadioBtn.addEventListener("change", () => {
		if (notAvailableRadioBtn.checked) {
			addressProceedBtn.setAttribute("data-bs-target", "#nomini-modal");
		}
	});
} catch (error) {
	console.log(error);
}

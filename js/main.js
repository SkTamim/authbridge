// CUSTOM TEXT RADIO BUTTON
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

// BACK BUTTON FUNCTIONALITY
const mobileBackBtn = document.querySelectorAll(".mobile-back-btn");
mobileBackBtn.forEach((element) => {
	element.addEventListener("click", () => {
		window.history.back();
	});
});

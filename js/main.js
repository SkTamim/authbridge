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

// UPOAD BUTTON WORK FUNCTIONLATY
try {
	const uploadImg = document.getElementById("upload-img");
	const upload = document.getElementById("upload");
	const replaceBtn = document.getElementById("replace-btn");
	let retakeBtn = document.getElementById("retake-btn");

	function vidOff() {
		videoElement.pause();
		videoElement.srcObject.getVideoTracks()[0].stop();
		videoElement.src = "";

		videoBox.style.display = "none";
		document.body.style.overflow = "auto";
	}

	// CAMERA FUNCTIONALITY FOR MOBILE
	const openCamera = (viedoObject) => {
		let videoBox = document.getElementById("videoBox");
		let videoElement = document.getElementById("videoElement");
		let clickBtn = document.getElementById("click-btn");
		let photoCanvas = document.getElementById("photo-canvas");
		let cameraPhotoPreview = document.querySelector(".camera-photo-preview");
		let cameraBackBtn = document.querySelector(".camera-back");

		videoBox.style.display = "block";
		document.body.style.overflow = "hidden";

		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia(viedoObject)
				.then((stream) => {
					videoElement.srcObject = stream;
				})
				.catch((err) => {
					console.log(err);
				});
		}

		cameraBackBtn.addEventListener("click", () => {
			vidOff();
		});

		clickBtn.addEventListener("click", () => {
			let context = photoCanvas.getContext("2d");

			context.drawImage(
				videoElement,
				0,
				0,
				photoCanvas.width,
				photoCanvas.height
			);
			uploadImg.style.display = "none";
			cameraPhotoPreview.style.display = "block";

			vidOff();
		});
	};

	// ALTER CAMERA FUNCTIONALITY
	const alterCamera = document.querySelector("#alter-camera");
	let alterClicked = false;
	alterCamera.addEventListener("click", () => {
		if (alterClicked === false) {
			alterClicked = true;
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement.width,
					},
					height: {
						ideal: videoElement.height,
					},
					facingMode: {
						exact: "environment",
					},
				},
			};
			vidOff();
			openCamera(viedoObject);
		}

		if (alterClicked === true) {
			alterClicked = false;
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement.width,
					},
					height: {
						ideal: videoElement.height,
					},
					facingMode: {
						exact: "user",
					},
				},
			};
			vidOff();
			openCamera(viedoObject);
		}
	});

	retakeBtn.addEventListener("click", () => {
		let viedoObject = {
			video: {
				width: {
					ideal: videoElement.width,
				},
				height: {
					ideal: videoElement.height,
				},
				facingMode: {
					exact: "user",
				},
			},
		};

		openCamera(viedoObject);
	});

	uploadImg.addEventListener("click", () => {
		if (window.innerWidth >= 576) {
			upload.click();
		} else {
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement.width,
					},
					height: {
						ideal: videoElement.height,
					},
					facingMode: {
						exact: "user",
					},
				},
			};

			openCamera(viedoObject);
		}
	});

	// DESKTOP PREVIEW IMAGE
	upload.addEventListener("change", (event) => {
		if (event.target.files.length > 0) {
			let src = URL.createObjectURL(event.target.files[0]);
			let preview = document.getElementById("file-preview");
			preview.src = src;
			preview.style.display = "block";
			let previewBox = document.querySelector(".preview");
			previewBox.style.display = "block";
			uploadImg.style.display = "none";
		}
	});

	replaceBtn.addEventListener("click", () => {
		if (window.innerWidth >= 576) {
			upload.click();
		}
	});
} catch (err) {
	console.log(err);
}

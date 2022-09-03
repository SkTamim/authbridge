// Picture one
try {
	const uploadImg1 = document.getElementById("upload-img-1");
	const upload1 = document.getElementById("upload-1");

	function vidOff() {
		videoElement1.pause();
		videoElement1.srcObject.getVideoTracks()[0].stop();
		videoElement1.src = "";

		videoBox1.style.display = "none";
		document.body.style.overflow = "auto";
	}

	// CAMERA FUNCTIONALITY FOR MOBILE
	const openCamera = (viedoObject) => {
		let videoBox1 = document.getElementById("videoBox1");
		let videoElement1 = document.getElementById("videoElement1");
		let clickBtn1 = document.getElementById("click-btn-1");
		let photoCanvas1 = document.getElementById("photo-canvas-1");
		let cameraBackBtn1 = document.querySelector("#camera-back-1");

		videoBox1.style.display = "block";
		document.body.style.overflow = "hidden";

		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia(viedoObject)
				.then((stream) => {
					videoElement1.srcObject = stream;
				})
				.catch((err) => {
					console.log(err);
				});
		}

		cameraBackBtn1.addEventListener("click", () => {
			vidOff();
		});

		clickBtn1.addEventListener("click", () => {
			let context = photoCanvas1.getContext("2d");

			context.drawImage(
				videoElement1,
				0,
				0,
				photoCanvas1.width,
				photoCanvas1.height
			);
			document.getElementById("file-preview-1").style.display = "none";
			photoCanvas1.style.display = "block";

			vidOff();
		});
	};

	// ALTER CAMERA FUNCTIONALITY
	const alterCamera1 = document.querySelector("#alter-camera-1");
	let alterClicked1 = false;
	alterCamera1.addEventListener("click", () => {
		if (alterClicked1 === false) {
			alterClicked1 = true;
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement1.width,
					},
					height: {
						ideal: videoElement1.height,
					},
					facingMode: {
						exact: "environment",
					},
				},
			};
			vidOff();
			openCamera(viedoObject);
		}

		if (alterClicked1 === true) {
			alterClicked1 = false;
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement1.width,
					},
					height: {
						ideal: videoElement1.height,
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

	uploadImg1.addEventListener("click", () => {
		if (window.innerWidth >= 576) {
			upload1.click();
		} else {
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement1.width,
					},
					height: {
						ideal: videoElement1.height,
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
	upload1.addEventListener("change", (event) => {
		if (event.target.files.length > 0) {
			let src = URL.createObjectURL(event.target.files[0]);
			let preview = document.getElementById("file-preview-1");
			preview.src = src;
			preview.style.display = "block";

			document.getElementById("photo-canvas-1").style.display = "none";
		}
	});
} catch (err) {
	console.log(err);
}

// Picture two
try {
	const uploadImg2 = document.getElementById("upload-img-2");
	const upload2 = document.getElementById("upload-2");

	function vidOff() {
		videoElement2.pause();
		videoElement2.srcObject.getVideoTracks()[0].stop();
		videoElement2.src = "";

		videoBox2.style.display = "none";
		document.body.style.overflow = "auto";
	}

	// CAMERA FUNCTIONALITY FOR MOBILE
	const openCamera = (viedoObject) => {
		let videoBox2 = document.getElementById("videoBox2");
		let videoElement2 = document.getElementById("videoElement2");
		let clickBtn2 = document.getElementById("click-btn-2");
		let photoCanvas2 = document.getElementById("photo-canvas-2");
		let cameraBackBtn2 = document.querySelector("#camera-back-2");

		videoBox2.style.display = "block";
		document.body.style.overflow = "hidden";

		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia(viedoObject)
				.then((stream) => {
					videoElement2.srcObject = stream;
				})
				.catch((err) => {
					console.log(err);
				});
		}

		cameraBackBtn2.addEventListener("click", () => {
			vidOff();
		});

		clickBtn2.addEventListener("click", () => {
			let context = photoCanvas2.getContext("2d");

			context.drawImage(
				videoElement2,
				0,
				0,
				photoCanvas2.width,
				photoCanvas2.height
			);
			document.getElementById("file-preview-2").style.display = "none";
			photoCanvas2.style.display = "block";

			vidOff();
		});
	};

	// ALTER CAMERA FUNCTIONALITY
	const alterCamera2 = document.querySelector("#alter-camera-2");
	let alterClicked2 = false;
	alterCamera2.addEventListener("click", () => {
		if (alterClicked2 === false) {
			alterClicked2 = true;
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement2.width,
					},
					height: {
						ideal: videoElement2.height,
					},
					facingMode: {
						exact: "environment",
					},
				},
			};
			vidOff();
			openCamera(viedoObject);
		}

		if (alterClicked2 === true) {
			alterClicked2 = false;
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement2.width,
					},
					height: {
						ideal: videoElement2.height,
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

	uploadImg2.addEventListener("click", () => {
		if (window.innerWidth >= 576) {
			upload2.click();
		} else {
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement2.width,
					},
					height: {
						ideal: videoElement2.height,
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
	upload2.addEventListener("change", (event) => {
		if (event.target.files.length > 0) {
			let src = URL.createObjectURL(event.target.files[0]);
			let preview = document.getElementById("file-preview-2");
			preview.src = src;
			preview.style.display = "block";

			document.getElementById("photo-canvas-2").style.display = "none";
		}
	});
} catch (err) {
	console.log(err);
}

// Picture three
try {
	const uploadImg3 = document.getElementById("upload-img-3");
	const upload3 = document.getElementById("upload-3");

	function vidOff() {
		videoElement3.pause();
		videoElement3.srcObject.getVideoTracks()[0].stop();
		videoElement3.src = "";

		videoBox3.style.display = "none";
		document.body.style.overflow = "auto";
	}

	// CAMERA FUNCTIONALITY FOR MOBILE
	const openCamera = (viedoObject) => {
		let videoBox3 = document.getElementById("videoBox3");
		let videoElement3 = document.getElementById("videoElement3");
		let clickBtn3 = document.getElementById("click-btn-3");
		let photoCanvas3 = document.getElementById("photo-canvas-3");
		let cameraBackBtn3 = document.querySelector("#camera-back-3");

		videoBox3.style.display = "block";
		document.body.style.overflow = "hidden";

		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia(viedoObject)
				.then((stream) => {
					videoElement3.srcObject = stream;
				})
				.catch((err) => {
					console.log(err);
				});
		}

		cameraBackBtn3.addEventListener("click", () => {
			vidOff();
		});

		clickBtn3.addEventListener("click", () => {
			let context = photoCanvas3.getContext("2d");

			context.drawImage(
				videoElement3,
				0,
				0,
				photoCanvas3.width,
				photoCanvas3.height
			);
			document.getElementById("file-preview-3").style.display = "none";
			photoCanvas3.style.display = "block";

			vidOff();
		});
	};

	// ALTER CAMERA FUNCTIONALITY
	const alterCamera3 = document.querySelector("#alter-camera-3");
	let alterClicked3 = false;
	alterCamera3.addEventListener("click", () => {
		if (alterClicked3 === false) {
			alterClicked3 = true;
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement3.width,
					},
					height: {
						ideal: videoElement3.height,
					},
					facingMode: {
						exact: "environment",
					},
				},
			};
			vidOff();
			openCamera(viedoObject);
		}

		if (alterClicked3 === true) {
			alterClicked3 = false;
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement3.width,
					},
					height: {
						ideal: videoElement3.height,
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

	uploadImg3.addEventListener("click", () => {
		if (window.innerWidth >= 576) {
			upload3.click();
		} else {
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement3.width,
					},
					height: {
						ideal: videoElement3.height,
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
	upload3.addEventListener("change", (event) => {
		if (event.target.files.length > 0) {
			let src = URL.createObjectURL(event.target.files[0]);
			let preview = document.getElementById("file-preview-3");
			preview.src = src;
			preview.style.display = "block";

			document.getElementById("photo-canvas-3").style.display = "none";
		}
	});
} catch (err) {
	console.log(err);
}

// Picture four
try {
	const uploadImg4 = document.getElementById("upload-img-4");
	const upload4 = document.getElementById("upload-4");

	function vidOff() {
		videoElement4.pause();
		videoElement4.srcObject.getVideoTracks()[0].stop();
		videoElement4.src = "";

		videoBox4.style.display = "none";
		document.body.style.overflow = "auto";
	}

	// CAMERA FUNCTIONALITY FOR MOBILE
	const openCamera = (viedoObject) => {
		let videoBox4 = document.getElementById("videoBox4");
		let videoElement4 = document.getElementById("videoElement4");
		let clickBtn4 = document.getElementById("click-btn-4");
		let photoCanvas4 = document.getElementById("photo-canvas-4");
		let cameraBackBtn4 = document.querySelector("#camera-back-4");

		videoBox4.style.display = "block";
		document.body.style.overflow = "hidden";

		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia(viedoObject)
				.then((stream) => {
					videoElement4.srcObject = stream;
				})
				.catch((err) => {
					console.log(err);
				});
		}

		cameraBackBtn4.addEventListener("click", () => {
			vidOff();
		});

		clickBtn4.addEventListener("click", () => {
			let context = photoCanvas4.getContext("2d");

			context.drawImage(
				videoElement4,
				0,
				0,
				photoCanvas4.width,
				photoCanvas4.height
			);
			document.getElementById("file-preview-4").style.display = "none";
			photoCanvas4.style.display = "block";

			vidOff();
		});
	};

	// ALTER CAMERA FUNCTIONALITY
	const alterCamera4 = document.querySelector("#alter-camera-4");
	let alterClicked4 = false;
	alterCamera4.addEventListener("click", () => {
		if (alterClicked4 === false) {
			alterClicked4 = true;
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement4.width,
					},
					height: {
						ideal: videoElement4.height,
					},
					facingMode: {
						exact: "environment",
					},
				},
			};
			vidOff();
			openCamera(viedoObject);
		}

		if (alterClicked4 === true) {
			alterClicked4 = false;
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement4.width,
					},
					height: {
						ideal: videoElement4.height,
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

	uploadImg4.addEventListener("click", () => {
		if (window.innerWidth >= 576) {
			upload4.click();
		} else {
			let viedoObject = {
				video: {
					width: {
						ideal: videoElement4.width,
					},
					height: {
						ideal: videoElement4.height,
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
	upload4.addEventListener("change", (event) => {
		if (event.target.files.length > 0) {
			let src = URL.createObjectURL(event.target.files[0]);
			let preview = document.getElementById("file-preview-4");
			preview.src = src;
			preview.style.display = "block";

			document.getElementById("photo-canvas-4").style.display = "none";
		}
	});
} catch (err) {
	console.log(err);
}

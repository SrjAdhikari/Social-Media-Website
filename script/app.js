//* SIDEBAR
// Select all elements with the class "menu-item" and store them in a NodeList
const menuItems = document.querySelectorAll(".menu-item");

//* MESSAGES
// Select the element for messages notifications by ID
const msgNotification = document.querySelector("#messages-notifications");

// Select the element for messages by class name
const message = document.querySelector(".messages");

// Select individual messages within the messages container
const individualMsg = message.querySelectorAll(".message");

// Select the search input field by ID
const messageSearch = document.querySelector("#message-search");

//* THEME
// Select the trigger element by its ID
const theme = document.querySelector("#theme");

// Select the modal element by its class name
const themeModal = document.querySelector(".customize-theme");

//* FONT
// Select all span elements within the font size chooser
const fontSizes = document.querySelectorAll(".choose-size span");

// Select the root element for modifying CSS variables
let root = document.querySelector(":root");

//*************** SIDEBAR *******************

// Function to remove the 'active' class from all sidebar menu items
const changeActiveItem = () => {
	menuItems.forEach((item) => {
		item.classList.remove("active"); // Remove 'active' class from each menu item
	});
};

// Iterate over each menu item and add a click event listener
menuItems.forEach((item) => {
	item.addEventListener("click", () => {
		changeActiveItem(); // Remove 'active' class from all items
		item.classList.add("active"); // Add 'active' class to the clicked item

		// Select the notifications popup element
		const popup = document.querySelector(".notifications-popup");

		// If the clicked item is not the 'notifications' item, hide the notifications popup
		if (item.id !== "notifications") {
			popup.style.display = "none"; // Hide the popup
		} else {
			// If the clicked item is the 'notifications' item, show the notifications popup
			popup.style.display = "block"; // Show the popup

			// Hide the notification count indicator after the notifications popup is shown
			// Get the notification count element within the 'notifications' item
			const notificationCount = document.querySelector(
				"#notifications .notification-count"
			);
			notificationCount.style.display = "none"; // Hide the notification count
		}
	});
});

//*************** MESSAGES *******************

// Search Chat
const searchMessage = () => {
	// Get the current value from the search input field and convert it to lowercase
	const value = messageSearch.value.toLowerCase();

	// Iterate over each individual message element within the messages container
	individualMsg.forEach((user) => {
		// Select the h5 element within the current message element
		const userName = user.querySelector("h5");

		// Check if the h5 element exists
		// If it exists, get its text content and convert it to lowercase for comparison
		// If it does not exist, set searchName to an empty string
		const searchName = userName ? userName.textContent.toLowerCase() : "";

		// Check if the search query value is present within the name text content
		// The indexOf method returns -1 if the value is not found
		if (searchName.indexOf(value) !== -1) {
			// If the search query matches the name, display the message element
			user.style.display = "flex";
		} else {
			// If the search query does not match the name, hide the message element
			user.style.display = "none";
		}
	});
};

// Add an event listener to the search input field
// This event listener triggers the searchMessage function whenever the user types into the search field
messageSearch.addEventListener("input", searchMessage);

// Add an event listener to trigger searchMessage when the user types in the search field
messageSearch.addEventListener("input", searchMessage);

// Add a click event listener to the messages notifications element
msgNotification.addEventListener("click", () => {
	// Apply a box shadow to the messages element to highlight it when we clicked the "Message" menu
	message.style.boxShadow = "0 0 1rem var(--color-primary)";

	// Hide the notification count inside the messages notification element
	msgNotification.querySelector(".notification-count").style.display = "none";

	// Remove the box shadow from the messages container after 2 seconds
	setTimeout(() => {
		message.style.boxShadow = "none";
	}, 2000);
});

//*************** THEME CUSTOMIZATION ***************

// Function to open the modal
const openThemeModal = () => {
	themeModal.style.display = "grid"; // Set display style to "grid" to show the modal
};

// Function to close the modal
const closeThemeModal = (evt) => {
	// Check if the click event target is the backdrop (i.e., the overlay)
	if (evt.target === themeModal) {
		themeModal.style.display = "none"; // Set display style to "none" to hide the modal
	}
};

// Add an event listener to the trigger element to open the modal when clicked
theme.addEventListener("click", openThemeModal);

// Add an event listener to the modal itself to close it when clicking outside of the content
themeModal.addEventListener("click", closeThemeModal);

//******************* FONT SIZE ********************

// Function to remove the "active" class from all font size selectors
const removeSizeSelector = () => {
	fontSizes.forEach((size) => {
		size.classList.remove("active"); // Remove "active" class from each font size selector
	});
};

// Add a click event listener to each font size selector
fontSizes.forEach((size) => {
	size.addEventListener("click", () => {
		// Remove the "active" class from all selectors
		removeSizeSelector();

		// Variable to store the selected font size value
		let fontSize;

		// Toggle the "active" class on the clicked font size selector
		size.classList.toggle("active");

		// Check the class of the clicked selector and set the font size and CSS variables accordingly
		if (size.classList.contains("font-size-1")) {
			fontSize = "10px";
			root.style.setProperty("--sticky-top-left", "5.4rem");
			root.style.setProperty("--sticky-top-right", "5.4rem");
		} else if (size.classList.contains("font-size-2")) {
			fontSize = "13px";
			root.style.setProperty("--sticky-top-left", "5.4rem");
			root.style.setProperty("--sticky-top-right", "-7rem");
		} else if (size.classList.contains("font-size-3")) {
			fontSize = "16px";
			root.style.setProperty("--sticky-top-left", "-2rem");
			root.style.setProperty("--sticky-top-right", "-17rem");
		} else if (size.classList.contains("font-size-4")) {
			fontSize = "19px";
			root.style.setProperty("--sticky-top-left", "-5rem");
			root.style.setProperty("--sticky-top-right", "-25rem");
		} else if (size.classList.contains("font-size-5")) {
			fontSize = "22px";
			root.style.setProperty("--sticky-top-left", "-12rem");
			root.style.setProperty("--sticky-top-right", "-35rem");
		}

		// Change the font size of the root html element based on the selected font size
		document.querySelector("html").style.fontSize = fontSize;
	});
});

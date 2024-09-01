//* SIDEBAR
// Select all elements with the class "menu-item" and store them in a NodeList
const menuItems = document.querySelectorAll(".menu-item");

//* MESSAGES
// Select the element for messages notifications by ID
const msgNotification = document.querySelector("#messages-notifications");

// Select the element for messages by class name
const message = document.querySelector(".messages");

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

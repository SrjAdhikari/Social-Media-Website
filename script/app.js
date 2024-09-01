//* SIDEBAR
// Select all elements with the class "menu-item" and store them in a NodeList
const menuItems = document.querySelectorAll(".menu-item");

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

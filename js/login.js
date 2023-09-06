var loginModal = document.getElementById("loginModal");

        // Function to open the login modal
        function openModal() {
            loginModal.style.display = "block";
        }

        // Function to close the login modal
        function closeModal() {
            loginModal.style.display = "none";
        }

        // Close the modal when clicking outside of it
        window.onclick = function(event) {
            if (event.target == loginModal) {
                closeModal();
            }
        }
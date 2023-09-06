var modal = document.getElementById("registerModal");

        // Function to open the modal
        function openModalRG() {
            modal.style.display = "block";
        }

        // Function to close the modal
        function closeModalRG() {
            modal.style.display = "none";
        }

        // Close the modal when clicking outside of it
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModalRG();
            console.log(modal)}}
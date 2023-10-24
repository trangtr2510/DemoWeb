const toggleButton = document.getElementById('contact');
const hiddenContent = document.getElementById('hiddenContent');

    toggleButton.addEventListener('click', function() {
      hiddenContent.classList.toggle('active');
    });
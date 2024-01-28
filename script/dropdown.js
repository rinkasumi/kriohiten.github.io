function hideDropdownList() {
    var dropdownList = document.querySelector('.dropdown-list');
    var blurredContent = document.querySelectorAll('.blurred-content');
  
    dropdownList.style.animation = 'fadeOut 0.5s ease-in-out';
    setTimeout(function () {
      dropdownList.style.display = 'none';
  
      // Remove blur class from all blurred content
      blurredContent.forEach(function (element) {
        element.classList.remove('blur');
      });
    }, 500);
  }

  function showDropdownList() {
    var dropdownList = document.querySelector('.dropdown-list');
    var blurredContent = document.querySelectorAll('.blurred-content');
  
    // Exclude the dropdown list from blurring
    blurredContent.forEach(function (element) {
      if (!element.contains(dropdownList)) {
        element.classList.add('blur');
      }
    });
  
    dropdownList.style.display = 'block';
    dropdownList.style.animation = 'fadeIn 0.5s ease-in-out';
  }
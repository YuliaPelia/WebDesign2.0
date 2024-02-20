  document.addEventListener('DOMContentLoaded', function () {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const juniorCourseList = document.querySelector('.junior-course-list');
    const professionalCourseList = document.querySelector('.professional-course-list');

    // Function to show/hide course lists
    function showJuniorCourse() {
      juniorCourseList.style.display = 'grid';
      professionalCourseList.style.display = 'none';
    }

    function showProfessionalCourse() {
      juniorCourseList.style.display = 'none';
      professionalCourseList.style.display = 'grid';
    }

    // Show Junior Course by default
    showJuniorCourse();

    // Add click event listeners to tab buttons
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        // Remove 'active' class from all buttons
        tabBtns.forEach((tabBtn) => {
          tabBtn.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        btn.classList.add('active');

        // Load the respective course list
        if (btn.textContent.includes('Design Junior (10-12р.)')) {
          showJuniorCourse();
        } else if (btn.textContent.includes('Digital Design (13-16р.)')) {
          showProfessionalCourse();
        }
      });
    });
  });


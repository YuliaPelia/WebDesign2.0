
  document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
      const btn = item.querySelector('.accordion-btn');
      const answer = item.querySelector('.accordion-answer');

      btn.addEventListener('click', function () {
        const expanded = btn.getAttribute('aria-expanded') === 'true';

        if (expanded) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = `0px`;
        }

        btn.setAttribute('aria-expanded', !expanded);
      });
    });
  });




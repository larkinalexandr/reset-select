const initResetForm = () => {
  const form = document.querySelector('.form');
  const resetBtn = form.querySelector('.form__reset-btn');


  const resetSelect = (select) => {
    const nativeSelect = select.querySelector('select');
    const activeIndex = nativeSelect.options.selectedIndex;
    const selectedOption = nativeSelect.options[activeIndex];
    const buttonText = select.querySelector('.custom-select__text');
    const selectItems = select.querySelectorAll('.custom-select__item');
    buttonText.textContent = selectedOption.textContent;

    selectItems.forEach((item, index) => {
      if (index === activeIndex - 1) {
        item.setAttribute('aria-selected', 'true');
        return;
      }
      item.setAttribute('aria-selected', 'false');
    });

    if (!nativeSelect.value) {
      select.classList.remove('not-empty');
      select.classList.remove('is-valid');
    }
  };

  const resetSelects = () => {
    const selects = form.querySelectorAll('[data-select]');
    selects.forEach((select) => {
      resetSelect(select);
    });
  };

  resetBtn.addEventListener('click', () => {
    setTimeout(() => {
      resetSelects();
    }, 10);
  });
};

export {initResetForm};

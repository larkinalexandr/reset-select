class ResetForm {
  constructor() {
    this._form = document.querySelector('.form');
    this._resetBtn = this._form.querySelector('.form__reset-btn');
  }

  _resetSelect(select) {
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
  }

  _resetSelects() {
    setTimeout(() => {
      const selects = this._form.querySelectorAll('[data-select]');
      selects.forEach((select) => {
        this._resetSelect(select);
      });
    });
  }

  init() {
    if (!this._form) {
      return;
    }

    this._resetBtn.addEventListener('click', () => {
      this._resetSelects();
    });
  }
}

const initResetForm = () => {
  const resetForm = new ResetForm();
  resetForm.init();
};


export {initResetForm};

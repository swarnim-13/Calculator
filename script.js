const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('ac')) {
      currentInput = '';
      display.value = '0';
    } else if (button.classList.contains('del')) {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput || '0';
    } else if (button.classList.contains('equal')) {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
      display.value = currentInput;
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
    

 let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');

    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        let buttonText = button.innerHTML;
        handleButton(buttonText);
      });
    });

    
    function handleButton(buttonText) {
      switch (buttonText) {
        case '=':
          calculateResult();
          break;
        case 'AC':
          clearInput();
          break;
        case 'DEL':
          deleteLastCharacter();
          break;
        default:
          appendToInput(buttonText);
      }
    }

    
    function appendToInput(value) {
      input.value += value;
    }

    
    function calculateResult() {
      try {
        let expression = input.value;
        
        expression = expression.replace(/%/g, '/100');
        let result = eval(expression);
        input.value = result;
      } catch (error) {
        input.value = 'Error';
      }
    }

    
    function clearInput() {
      input.value = '';
    }

    
    function deleteLastCharacter() {
      input.value = input.value.slice(0, -1);
    }
let string = "";
let buttons = document.querySelectorAll('button');
console.log("event listners is attached");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log("Button clicked:", e.target.innerHTML);
      if (e.target.innerHTML === '=') {
        console.log("Expression:", string);
        try {
          string = new Function('return ' + string)();
          console.log("After Evaluation:", string);
        } catch (error) {
          string = 'Error';
        }
      } else if (e.target.innerHTML === 'C') {
        string = "";
      } else {
        string = string + e.target.innerHTML;
      }
      document.querySelector('input').value = string;
    });
  });
  
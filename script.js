function vote(choice) {
  const responseElement = document.getElementById('response');
  const yesButton = document.querySelector('button:nth-of-type(1)');
  
  switch(choice) {
    case 'no':
      switch(responseElement.textContent) {
        case 'Do you like this content?':
          responseElement.textContent = 'I will get angry!';
          break;
        case 'I will get angry!':
          responseElement.textContent = 'I won\'t speak!';
          break;
        case 'I won\'t speak!':
          responseElement.textContent = 'Really?';
          break;
        case 'Really?':
          responseElement.textContent = 'I will come to your home!';
          break;
        default:
          responseElement.textContent = 'I will come to your home!';
          break;
      }
      yesButton.style.fontSize = parseInt(window.getComputedStyle(yesButton).fontSize) + 5 + 'px';
      break;
    case 'yes':
      responseElement.textContent = 'Thank you!';
      break;
    default:
      break;
  }
}

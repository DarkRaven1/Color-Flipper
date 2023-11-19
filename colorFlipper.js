let randomNumber;
let color;
const screen = document.querySelector('.color-screen-div');
const span = document.querySelector('.color-span');
const button = document.querySelector('.click-me-button');

document.querySelector('.click-me-button').addEventListener('click',() => {
  randomNumber = Math.random();
  document.querySelector('.color-span').innerHTML = `${color}`;
  randomColor();
});

const randomColor = () => {
  switch (true) {
    case  randomNumber < 0.1 : {
      classes('yellow');
    }      
      break;

    case randomNumber >= 0.1 && randomNumber < 0.2 : {
      classes('red');
    }
      break;  

    case randomNumber >= 0.2 && randomNumber < 0.3 : {
      classes('blue');
    }
      break;

    case randomNumber >= 0.3 && randomNumber < 0.4 : {
      classes('green');
    }
      break;

    case randomNumber >= 0.4 && randomNumber < 0.5 : {
      classes('purple');
    }
      break;

    case randomNumber >= 0.5 && randomNumber < 0.6 : {
      classes('pink');
    }
      break;

    case randomNumber >= 0.6 && randomNumber < 0.7 : {
      classes('brown');
    }
      break;

    case randomNumber >= 0.7 && randomNumber < 0.8 : {
      classes('orange');
    }
      break;

    case randomNumber >= 0.8 && randomNumber < 0.9 : {
      classes('black');
    }
      break;


    default:
      classes('white');
      break;
  }
}

const classes = (color) => {
  screen.classList.remove('yellow','red','blue','green','purple','orange','black','white','brown','pink');

  span.classList.remove('yellow-text','blue-text','red-text','green-text','purple-text','orange-text','black-text','white-text','brown-text','pink-text');

  button.classList.remove('black-button')


  screen.classList.add(`${color}`);
  span.classList.add(`${color}-text`);
  span.innerHTML = `${color}`;
  if(color === 'black') {
    button.classList.add('black-button');
  }
}
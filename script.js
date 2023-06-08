const button = document.getElementById("submit");
const text = document.getElementById("hexCode");

function changeColor() {
    var mytext = document.querySelector('#headerText');
    var randomColor = getRandomColor();

    mytext.style.transition = 'opacity 0.2s ease-in';
    mytext.style.opacity = '0';

    setTimeout(function() {
        mytext.style.color = randomColor;
        mytext.style.opacity = '1';
      }, 10);
  }

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setInterval(changeColor, 2000);

  button.addEventListener('click', function(){
      const color = getRandomColor();
    document.body.style.backgroundColor = color;
    text.innerText = `The hex code of the color is ${color}`;
  });
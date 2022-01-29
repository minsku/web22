console.log('Hello console!');
/*
* teht. 1
* type hello to find secret
*/
const salasana = (salasana) => {
  let keyHistory = new Array(salasana.length);
  document.addEventListener('keypress', event => {
      keyHistory.shift();
      keyHistory.push(event.key);
      if (keyHistory.join('').toLowerCase() === salasana.toLowerCase()) {
          alert("Correct cheat code");
      }
  });
};
salasana('hello');

/*
* teht. 2
* click mouse to show coordinates
*/
document.getElementById("div").ondblclick = () => { fun(); };

const fun = () => {
  document.querySelector('body').addEventListener('dblclick', (event) => {
      let x = event.clientX;
      let y = event.clientY;
      console.log('Mouse coordinates: X: ' + x + '\tY: ' + y);


      // näyttää koordinaatit sivulla
      const coords = 'Mouse coordinates: X: ' + x + '\tY: ' + y;
      document.getElementById("p").innerHTML = coords;
  });
};

/*
* teht. 3
* console loggaa kun painetaan nappia
* ei reagoi hiiren klikkauksiin
*/
document.addEventListener('keydown', event =>{
  console.log('painoit: ', event.key);
});


/*
* teht. 4
* shows 'hurry up' when user has been on page for 15 sec
*/
const timer = () => {
  setTimeout(() => {
      alert('hurry up');
  }, 15000);
};
timer();

/*
* teht. 5
* kun käyttäjä ollut sivulla toimimattomana 15 sec
*/
const waiting = (duration) => {
  let timer;
  const resetTimer = (event) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
          alert('HURRY UP!!');
      }, duration * 1000);
  };
  resetTimer();

  document.addEventListener('keypress', resetTimer);
  document.addEventListener('mousemove', resetTimer);
};
waiting(15);

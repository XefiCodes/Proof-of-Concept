const aw = document.getElementById("ae"); // Container of API texts
const talk = document.getElementById("talk"); // Act sprite GIF
const stare = document.getElementById("stare"); // Idle sprite GIF
// Interval storage
var Interval;
var another;

var eee = document.getElementById("pap"); // Audio of speaking

window.onload = () => { // Onload Function
  var a = document.getElementById('butt');
  var b = document.getElementById('next');
  sw();
  a.click();

  a.onclick = 
    function(){
      num();
      sw();
    };
  if (a.click()){
    document.getElementById('butt').click();
  }
  b.onclick = 
  function(){
    cle();
  }
}
function num(){ // Timer
    Interval = setInterval(function(){
        sw();
    },10000); //Interval
}
function cle(){
  sw();
  clearInterval(Interval); // Clear Interval storage / timer
  num();
}

function sw(){ // Switch case API
    var a = document.getElementById("number");
    var b =  Math.floor(Math.random() * 9);
    a.innerHTML = b;

    clearTimeout(another); // Clear another storage / timer for speaking
    another = setTimeout(function(){ // Timer for speaking and showing animation
      talk.style.visibility = "hidden";
      stare.style.visibility = "visible";
      eee.pause();
    }, 6000);
    talk.style.visibility = 'visible';
    stare.style.visibility = 'hidden';
    eee.play();

    switch(b){ // Switch to a function based on random numbers
        case 1:
            getAdvice(); // Advice Slip API
            break;
        case 2:
            getUsefulFact(); // Useless Facts API
            break;
        case 3:
            getCatFact(); // Cat Fact Ninja API
            break;
        case 4:
            getBored(); // Bored API
            break;
        case 5:
            getJoke(); // Joke API v2
            break;
        case 6:
            getDog(); // Random Dog API
            break;
        case 7:
            getFact(); // Fun Fact API
            break;
        case 8:
            getPick(); // Catboys API
            break;
        default:
            get1984(); // IP Adress (IPify) API
            break;
    }
}


function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
      return response.json();
    }).then(adviceData => {
      const Adviceobj = adviceData.slip;
      aw.innerHTML = `<p>${Adviceobj.advice}</p>`;
    }).catch(error => {
      console.log(error);
      aw.innerHTML = `<p>I ran out of things to say. Baba Boey. (Third Party Error)</p>`;
    });
}

function getUsefulFact() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en').then(response => {
      return response.json();
    }).then(random => {
      const Adviceobj = random;
      aw.innerHTML = `<p>${Adviceobj.text}</p>`;
    }).catch(error => {
      console.log(error);
      aw.innerHTML = `<p>I ran out of things to say. Blah Blah. (Third Party Error)</p>`;
    });
}

function getCatFact() {
    fetch('https://catfact.ninja/fact').then(response => {
      return response.json();
    }).then(Cfact => {
      const Catobj = Cfact;
      aw.innerHTML = `<p>${Catobj.fact}</p>`;
    }).catch(error => {
      console.log(error);
      aw.innerHTML = `<p>I ran out of things to say. Morbin' Time. (Third Party Error)</p>`;
    });
}

function getBored() {
    fetch('https://www.boredapi.com/api/activity').then(response => {
      return response.json();
    }).then(Bore => {
      const Boredobj = Bore;
      aw.innerHTML = `<p>${Boredobj.activity}</p>`;
    }).catch(error => {
      console.log(error);
      aw.innerHTML = `<p>I ran out of things to say. A. (Third Party Error)</p>`;
    });
}

function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single').then(response => {
      return response.json();
    }).then(Joke => {
      const DaJoke = Joke;
      aw.innerHTML = `<p>${DaJoke.joke}</p>`;
    }).catch(error => {
      console.log(error);
      aw.innerHTML = `<p>I ran out of things to say. What is life? (Third Party Error)</p>`;
    });
}

function getDog() {
    fetch('https://some-random-api.ml/animal/dog').then(response => {
      return response.json();
    }).then(doge => {
      const Dadog = doge;
      aw.innerHTML = `<p>${Dadog.fact}</p>`;
    }).catch(error => {
      console.log(error);
      aw.innerHTML = `<p>I ran out of things to say. Unga Bunga. (Third Party Error)</p>`;
    });
}

function getFact() {
    fetch('https://asli-fun-fact-api.herokuapp.com/').then(response => {
      return response.json();
    }).then(facts => {
      const Dafacto = facts.data;
      aw.innerHTML = `<p>${Dafacto.fact}</p>`;
    }).catch(error => {
      console.log(error);
      aw.innerHTML = `<p>I ran out of things to say. Goo Goo Ga Ga. (Third Party Error)</p>`;
    });
}

function getPick() {
    fetch('https://api.catboys.com/catboy').then(response => {
    return response.json();
  }).then(QuoteData => {
    const obj = QuoteData;
    aw.innerHTML = `<p>${obj.response}</p>`;
  }).catch(error => {
    console.log(error);
    aw.innerHTML = `<p>I ran out of things to say. Nya~ (Third Party Error)</p>`;
  });
}

function get1984() {
    fetch('https://api.ipify.org?format=json').then(response => {
      return response.json();
    }).then(IP => {
      const Daip = IP;
      aw.innerHTML = `<p>"${Daip.ip}"</p>`;
    }).catch(error => {
      console.log(error);
      aw.innerHTML = `<p>I ran out of things to say. This is literally 1984. (Third Party Error)</p>`;
    });
}
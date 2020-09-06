const button = document.getElementById('button');
const bonneReponse = document.getElementById('bonneReponse');
const resultat = document.getElementById('resultat');
const restartBtn = document.getElementById('restartBtn');
let note = 0;
let wordID;
let randomLangue;
let GAMESTATE = true;
const words = [
  {
    en: "hello",
    fr: "bonjour"
  },
  {
    en: "why",
    fr: "pourquoi"
  },
  {
    en: "when",
    fr: "quand"
  },
  {
    en: "how",
    fr: "comment"
  },
  {
    en: "who",
    fr: "qui"
  }
];

const surVingt = words.length;

changeWord();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function verify (){
  if(GAMESTATE == true){
    const word = document.getElementById('h2').textContent;
    let answer = document.getElementById('word');

    if(randomLangue == 1){
      if (answer.value.toLowerCase() == words[wordID].fr){
        note++;
        document.getElementsByTagName('body')[0].style.background = '#32AF37';
        bonneReponse.textContent = '';
      }else{
        document.getElementsByTagName('body')[0].style.background = '#C52929'
        bonneReponse.textContent = `La traduction de ${words[wordID].en} était ${words[wordID].fr}`;
      }
    }else{
      if (answer.value.toLowerCase() == words[wordID].en){
        note++;
        document.getElementsByTagName('body')[0].style.background = '#32AF37';
        bonneReponse.textContent = '';
      }else{
        document.getElementsByTagName('body')[0].style.background = '#C52929'
        bonneReponse.textContent = `La traduction de ${words[wordID].fr} était ${words[wordID].en}`;
      }
    }
  
    answer.value = '';
      
    words.splice(wordID, 1);
  
    changeWord();
  }
  

};

function changeWord(){
  if(words.length == 0){
    GAMESTATE = false;
  }
  if(GAMESTATE == true){
    wordID = getRandomInt(words.length);
    randomLangue = getRandomInt(2);
    if(randomLangue == 1){
      document.getElementById('h2').textContent = words[wordID].en;
    }else{
      document.getElementById('h2').textContent = words[wordID].fr;
    }
  }else{
    resultat.textContent = `Votre résultat est de ${note}/${surVingt}`
    restartBtn.style.display = 'block'
  }

}

button.addEventListener('click', verify);

document.addEventListener('keydown', event => {
  if(event.keyCode == 13){
    verify();
  }
});

restartBtn.addEventListener('click', () => {
  location.reload();
});
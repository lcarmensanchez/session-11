var vm = new Vue({
  el: '.intro',
  data: function () {
    var now = new Date();
    var days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
    var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    return  {
      intro: "Et il nous reste seulement quelque mois avant d'élire nos députés européens. En France, le scrutin aura lieu le 26 mai : 79 personnes seront élues, soit cinq de plus qu'actuellement. D'autres nouveautés sont à noter : désormais les députés européens seront élus à l'échelle nationale - et non plus dans des circonscriptions régionales, comme l’avait instauré une loi de 2003 pour « favoriser l’ancrage territorial des élus », souvent critiqués pour leur éloignement des citoyens.",
      introquestion:"Qu’en est-il actuellement ? Quel eurodéputé français vous ressemble le plus ? Découvrez la réponse en répondant à quelques questions (rien n’est enregistré).",
      now: now,
      day: days[now.getDay()],
      month: months[now.getMonth()]
    };
  }
});

var app = new Vue({
  el: '#app',
  data: {
    quiz: quiz, 
    current: 0,
    answers: []
  },
  computed: {
    step: function step () {
      return this.quiz[this.current];
    }
  },
  methods: {
    start: function start(){
      document.getElementById("card_question").style.display = "block";
      document.getElementById("introPart").style.display = "none";
      document.getElementById("start").style.display = "none";
    },
    displayNames: function displayNames(index){
      el = document.getElementById("accordion" + String(index));
      button = document.getElementById("accordion" + String(index) + "-button");
      if (el.classList.contains("invisible")){
        el.classList.remove("invisible");
        button.innerHTML = "Cacher leurs noms";
      }
      else {
        el.classList.add("invisible");
        button.innerHTML = "Montrer leurs noms";
      }
    },
    submitButton: function submitButton (answer) {
      this.answers.push(answer);
      this.current++;
      if (this.current == this.quiz.length){
        tab = calculateMostAdapted(this.answers);
        num_match = tab[0];
        this.same_firstname = tab[2]
        this.same_circo = tab[3]
        this.same_party = tab[4]
        this.same_date_birth = tab[5]
        this.similar_date_birth = tab[6]
        this.reader = []
        this.reader.name = this.answers[1]
        this.reader.gender = this.answers[0]
        this.reader.circo = this.answers[2]
        this.reader.party = this.answers[4]
        this.reader.date_birth = this.answers[3]
        this.match = liste_dep[num_match]
      }
    },
    submitText: function submitText () {
      var answer = this.$refs.textInput.value;
      if (answer != ""){
        this.answers.push(answer)
        this.current++   
    }
    },
    submitNumber: function submitNumber() {
      var answer = this.$refs.nbInput.value;
      if (answer != "" && answer > 1900 && answer < 2019){
        this.answers.push(answer)
        this.current++   
      }
    }
  }
});
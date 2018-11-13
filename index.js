var quiz = [
  {
    question: "Quel est votre genre ?",
    choices: ["femme", "homme", "autre"],
  },
  {
    question: "Quel est votre prénom ?",
  },
  {
    question: "Quelle est votre année de naissance ?",
  },
  {
    question: "Quelle est votre année de naissance ?",
  },
  {
    question: "Quelle est votre circonscription ?",
    choices: ["Nord-Ouest", "Ouest", "Est", "Sud-Ouest", "Sud-Est", "Massif central /  Centre", "Ile-de-France", "Outre-mer"],
  },
  {
    question: "Quelles sont vos affinités politiques ?",
    choices: ["Parti Communiste / Front de Gauche", "Parti Socialiste", "UDI / Modem / En Marche", "Les Républicains", "Rassemblement National / Les Patriotes / Debout la France", "Massif central /  Centre", "Autre / aucune proximité"],
  },

  // {
  //   question: "Depuis combien de temps travaillez-vous dans la même entreprise ?",
  //   choices: ["Entre 0 et 5 ans", "Entre 5 et 10 ans", "Plus de 10 ans", "Autres (étudiant, chômeur...)"],
  // // },
  // {
  //   question: "Quel est votre nommbre de followers Twitter ?",
  //   choices: ["Je n'ai pas de compte Twitter", "Entre 0 et 200", "Entre 200 et 500", "Entre 500 et 1000", "Entre 1000 et 5000", "Entre 5000 et 10000", "Plus de 10000"],
  // },
];

var vm = new Vue({
  el: '.app',
  data: function () {
    var now = new Date();
    var days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
    var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    return  {
      intro: "Et il nous reste seulement quelque mois avant d'élire nos députés européens, souvent décriés pour leur manque de représentativité. D'ailleurs, X% des Français affirment ne pas leur faire confiance et X% ne pas se sentir représentés par eux. Nous vous proposons d'explorer la galaxie des députés européens élus en France, pour trouver celui qui vous ressemble le plus. Nous avons déterminé et pondéré plusieurs critères. Maintenant, à vous de jouer !",
      now: now,
      day: days[now.getDay()],
      month: months[now.getMonth()]
    };
  }
})

var app = new Vue({
  el: '#app',
  data: {
    score: 0,
    quiz: quiz, 
    answers: [],
    current: 0
  },
  computed: {
    step: function step () {
      console.log(this)
      return this.quiz[this.current];
    }
  },
  methods: {
    submitButton: function submitButton (answer) {
      this.answers.push(answer)
      this.current++
      console.log(this.answers)
    },
    getFormValues () {
      var result = this.$refs.textInput.value
      this.answers.push(result)
      this.current++
      console.log(this.answers)
    }
  }
});

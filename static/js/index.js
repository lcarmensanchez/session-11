var vm = new Vue({
  el: '.intro',
  data: function () {
    var now = new Date();
    var days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
    var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    return  {
      intro: "Et il nous reste seulement quelque mois avant d'élire nos députés européens. En France, le scrutin aura lieu le 26 mai : 79 personnes seront élues, soit cinq de plus qu'actuellement. D'autres nouveautés sont à noter : désormais les députés européens seront élus à l'échelle nationale - et non plus dans des circonscriptions régionales, comme l’avait instauré une loi de 2003 pour « favoriser l’ancrage territorial des élus », souvent critiqués pour leur éloignement des citoyens. Qu’en est-il actuellement ? Quel eurodéputé français vous ressemble le plus ? Découvrez la réponse en répondant à quelques questions (rien n’est enregistré).",
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
    submitButton: function submitButton (answer) {
      this.answers.push(answer)
      this.current++
      if (this.current == this.quiz.length){
        tab = calculateMostAdapted(this.answers)
        num_match = tab[0]
        this.same_firstname = tab[2]
        this.lector_name = this.answers[1]
        this.lector_gender = this.answers[0]
        this.match_name = liste_dep[num_match].name
        this.match_party = liste_dep[num_match].national_party
        this.match_circo = liste_dep[num_match].circo
        this.match_gender = liste_dep[num_match].gender
        this.match_date_birth = liste_dep[num_match].date_birth
        this.match_place_birth = liste_dep[num_match].place_birth
        this.match_eurodep_depuis = liste_dep[num_match].eurodep_depuis
      }
    },
    submitText: function submitText () {
      var answer = this.$refs.textInput.value;
      this.answers.push(answer)
      this.current++ 
    },
    submitNumber: function submitNumber() {
      var answer = this.$refs.nbInput.value;
      this.answers.push(answer)
      this.current++
    }
  }
});
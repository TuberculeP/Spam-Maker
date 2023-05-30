import { createStore } from 'vuex'

export default createStore({
  state: {
    who: [
      'Emmanuel Macron',
      'Jean Castex',
      'Olivier Véran',
      'Bruno Le Maire',
      'Gérald Darmanin',
      'Barbara Pompili',
      'Roselyne Bachelot',
      'Jean-Michel Blanquer',
      'Élisabeth Borne',
      'Frédérique Vidal',
      'Éric Dupond-Moretti',
      'Sébastien Lecornu',
      'Jacqueline Gourault',
      'Annick Girardin',
      'Marlène Schiappa',
      'Amélie de Montchalin',
      'Jean-Jacques Goldman',
      'Maitre Gims',
      'Cyril Hanouna',
      'Nagui',
      'Michel Cymes',
      'Jean-Luc Reichmann',
      'Jean-Pierre Pernaut',
      'Jean-Pierre Foucault',
      'Nikos Aliagas',
      'Laurent Ruquier',
      'Arthur',
      'Yann Barthès',
      'Cyril Lignac',
      'Stéphane Plaza',
      'Michel Drucker',
      'Patrick Sébastien',
      'Jean-Marc Morandini',
      'Jean-Pierre Elkabbach',
      'Jean-Michel Aphatie',
      'Christophe Barbier'
    ],
    // une liste de choses qu'on promet généralement dans les arnaques et les spam internet
    what: [
      'financer vos panneaux solaires',
      'gagner énormément d\'argent',
      'voyager gratuitement pendant 10 ans',
      'gagner un iPhone 12',
      'gagner un iPhone 12 Pro',
      'gagner un iPhone 12 Pro Max',
      'gagner un iPhone 12 Mini',
      'gagner le dernier iPhone',
      'partir en vacances',
      'partir en vacances à l\'étranger',
      'partir en vacances en France',
      'investir dans l\'immobilier',
      'investir dans le Bitcoin',
      'investir dans les cryptomonnaies',
      'investir dans les actions',
      'investir dans les obligations',
      'investir dans les fonds',
      'investir dans les ETF',
      'investir dans les SCPI',
      'investir dans les FIP',
      'investir dans les FCPI',
      'investir dans les PME',
      'investir dans les PME françaises'
    ],
    thanks: [
      'grâce aux nouvelles aides de l\'État',
      'grâce à la nouvelle loi sur le travail',
      'grâce à une nouvelle faille d\'Internet',
      'grâce à la nouvelle loi sur le climat',
      'avec cette nouvelle méthode',
      'd\'après une nouvelle étude',
      'grâce à la nouvelle loi sur la santé'
    ],
    templates: [
      'Vous ne croirez jamais ce que {who} a fait pour {what} {thanks} !',
      '{who} : {what} ? C\'est possible {thanks} !',
      'Interview de {who} : {thanks}, {what} est désormais possible !'
    ],
    illustrations: [
      'https://randompicturegenerator.com/img/people-generator/g228d1bbd144ee68a74d03504a87fdbb7cd8dedb81c692c4f93b82e83f636b7834be88ff378f1fd60a4f25c33d2bf9e57_640.jpg',
      'https://randompicturegenerator.com/img/people-generator/g5ed164e2a8dd9efa94ec8fd1fac2c66c699d08d3efa92a462fee77a08685f704a71cc12b7e8f45fc18dc499fc05a8b46_640.jpg',
      'https://randompicturegenerator.com/img/people-generator/g03368a0cafac4fd1c2c3ec2630038abf163a0942344ad925260ae309715157fcf3b503920a66003c556838b4c6272ad7_640.jpg',
      'https://randompicturegenerator.com/img/people-generator/g4278cac58ea610f661e8115c01ce0218887e96501be9331d0cb3fbd0f6f66f8da090f3b8596982e192a4c788edb26be8_640.jpg'
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

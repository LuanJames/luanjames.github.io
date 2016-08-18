import Ember from 'ember';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),

  model_data: {
      "experiences": [
        {
          "id": 2,
          "title": "Engenheiro de Software",
          "subtitle": "Lab. de Desenvolvimento de Software",
          "period": "05/2016 - Atual",
          "description": "Trabalhando em projetos com desenvolvimento Android e PHP.",
          "acts": ["PHP", "Android"]
        },
        {
          "id": 3,
          "title": "Líder Técnico",
          "subtitle": "Lab. de Inovação Tecnológica",
          "period": "02/2013 - 05/2016",
          "description": "Trabalhei com desenvolvimento web (Ruby on Rails) e mobile (Android e iOS). " +
                          "Fiz pesquisas relacionadas à Rede de Petri. Assim como participando de projetos " +
                          "envolvendo sistemas embarcados.",
          "acts": ["Ruby on Rails", "PHP", "Android", "DevOps"]
        }
      ],
      "educations": [
        {
          "id": 2,
          "title": "Engenharia de Computação",
          "subtitle": "IFCE",
          "period": "2010 - 2015",
          "description": "Formação em engenharia de computação com ênfase em análise e desenvolvimento de software."
        }
      ],
      "projects": [
        {
          "id": 1,
          "title": "Vendor",
          "period": "2015",
          "description": "Vendor é um software para dedução e supervisão de vendas. " +
                          "O principal objetivo é ajudar vendedores empresariais de " +
                          "uma forma inteligênte e em tempo real.",
          "acts": ["Ruby on Rails", "RESTful", "UML", "Android"]
        },
        {
          "id": 2,
          "title": "Flashcards WebApp",
          "url": "https://luanjames.github.io/flashcards-react/",
          "github": "https://github.com/LuanJames/flashcards-react",
          "period": "2016",
          "description": "Projeto piloto para estudo da biblioteca React. " +
                          "É um flashcard para memorização, ideal para que está aprendendo uma nova lingua.",
          "acts": ["ReactJS"]
        },
        {
          "id": 3,
          "title": "Jogo Combate",
          "url": "http://stratego-rails.herokuapp.com/",
          "github": "https://github.com/LuanJames/stratego-rails",
          "period": "2013",
          "description": "Jogo combate feito em Ruby on Rails com muito Javascript como projeto de estudo.",
          "acts": ["Ruby on Rails", "Javascript", "WebSocket"]
        },
        {
          "id": 4,
          "title": "Ceará Game Tools",
          "github": "https://github.com/hexat/projetocgt",
          "period": "2014",
          "description": "É uma ferramenta gratuita e multiplataforma para criação " +
              "de jogos 2D. Destinados à usuários com pouco/nenhum conhecimento de programação.",
          "acts": ["Ruby on Rails", "Javascript", "WebSocket"]
        },
        {
          "id": 5,
          "title": "Vestus",
          "url": "http://www.vestus.com.br",
          "period": "2013",
          "description": "Vestus é um sistema de gerenciamento empresarial para " +
                          "pequenas e médias empresas. O sistema possui uma versão " +
                          "web e outra desktop.",
          "acts": ["Ruby on Rails", "JavaFX"]
        },
        {
          "id": 6,
          "title": "Portal da História",
          "url": "http://portal.ceara.pro.br",
          "period": "2012",
          "description": "Sistema de envío, análise e consulta de tokens em documentos históricos.",
          "acts": ["PHP", "Javascript"]
        }

      ]
    },
    // model_data: Ember.RSVP.hash(Ember.$.getJSON('data/index_pt.json')),
    model_data_en: {
      "experiences": [
        {
          "id": 2,
          "title": "Software engineer",
          "subtitle": "Software Development Labs",
          "period": "05/2016 - Current",
          "description": "Here, I'm working on projects with Android and Web Development.",
          "acts": ["PHP", "Android"]
        },
        {
          "id": 3,
          "title": "Technical leader",
          "subtitle": "Technological Innovation Labs",
          "period": "02/2013 - 05/2016",
          "description": "Worked with Web (Ruby on Rails) and mobile development " +
              "(Android and iOS). I was involved in research related to Petri net. " +
              "Also I participated in automation system projects.",
          "acts": ["Ruby on Rails", "PHP", "Android", "DevOps"]
        }
      ],
      "educations": [
        {
          "id": 2,
          "title": "Computer Engineering",
          "subtitle": "IFCE",
          "period": "2010 - 2015",
          "description": "Computer engineering degree with an emphasis on analysis and software development."
        }
      ],
      "projects": [
        {
          "id": 1,
          "title": "Vendor",
          "period": "2015",
          "description": "Vendor is a software for prediction and supervision of "+
              "sales. The main goal is to provide intelligent and real-time " +
              "information to the salesperson.",
          "acts": ["Ruby on Rails", "RESTful", "UML", "Android"]
        },
        {
          "id": 2,
          "title": "Flashcards WebApp",
          "url": "https://luanjames.github.io/flashcards-react/",
          "github": "https://github.com/LuanJames/flashcards-react",
          "period": "2016",
          "description": "This is a sample Web App with ReactJS with Alt for Flux implementation.",
          "acts": ["ReactJS"]
        },
        {
          "id": 3,
          "title": "Stratego WebSocket Game",
          "url": "http://stratego-rails.herokuapp.com/",
          "github": "https://github.com/LuanJames/stratego-rails",
          "period": "2013",
          "description": "It's a web implementation for the classical strategy board game Stratego.",
          "acts": ["Ruby on Rails", "Javascript", "WebSocket"]
        },
        {
          "id": 4,
          "title": "Ceará Game Tools",
          "github": "https://github.com/hexat/projetocgt",
          "period": "2014",
          "description": "Ceará Game Tools (CGT) is a free and multiplatform " +
              "software made to enable users, without programming knowledge, " +
              "creates 2D games.",
          "acts": ["JavaFX", "Android", "Petri Net"]
        },
        {
          "id": 5,
          "title": "Vestus",
          "url": "http://www.vestus.com.br",
          "period": "2013",
          "description": "Vestus is an Enterprise Resource Planning software " +
              "created for micro and small enterprises. Providing a Web and " +
              "addiction desktop version.",
          "acts": ["Ruby on Rails", "JavaFX"]
        },
        {
          "id": 6,
          "title": "History WebSystem",
          "url": "http://portal.ceara.pro.br",
          "period": "2012",
          "description": "Software for archiving, analysing and creating search " +
              "tokens historical documents.",
          "acts": ["PHP", "Javascript"]
        }

      ]
    },
  model() {
    return this.get('i18n.locale') === 'en' ? this.model_data_en : this.model_data;
  },

  setupController(controller, model) {
    // var data_pt = Ember.RSVP.hash(Ember.$.getJSON('data/index_pt.json'));
    this.addObserver('i18n.locale', function(){
          controller.set('model', this.get('i18n.locale') === 'en' ? this.model_data_en : this.model_data);
    });

    controller.set('model', this.model_data);
  }
});

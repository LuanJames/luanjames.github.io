import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let data = {
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
      ]
    };
    return data;
  }
});

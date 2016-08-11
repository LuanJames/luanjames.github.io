import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let data = {
      "profile": "Atualmente moro em Fortaleza mas tenho disponibilidade para mudanças. " +
          "Sou graduado em engenharia de computação pelo Instituto Federal do Ceará; " +
          "tenho como principais qualidades: criatividade, dedicação e aprendizagem contínua. " +
          "Desde 2013 trabalho como lider técnico em vários projetos onde obtive muita " +
          "experiência com desenvolvimento web e mobile. Minhas principais áreas de interesse são: " +
          "engenharia de software e análise e desenvolvimento de algoritmos.",
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

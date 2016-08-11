import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  actions: {
    changeLang() {
      this.set('i18n.locale', this.get('i18n.locale') == 'en' ? 'br' : 'en');
    }
  }
});

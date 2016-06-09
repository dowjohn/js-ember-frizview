import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        commenter: this.get('commenter'),
        comment: this.get('comment'),
        blog: this.get('blog'),
      };
      this.sendAction('save', params);
    }
  }
});

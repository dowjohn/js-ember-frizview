import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        storelink: this.get('storelink'),
        image: this.get('image'),
      };
      this.sendAction('save', params);
    }
  }
});

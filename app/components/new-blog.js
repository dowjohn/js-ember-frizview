import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        storelink: this.get('storelink'),
        image: this.get('image'),
      };
      this.sendAction('save', params);
    }
  }
});

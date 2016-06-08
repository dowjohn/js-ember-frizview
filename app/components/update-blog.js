import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        title: this.get('titleUpdate'),
        author: this.get('authorUpdate'),
        content: this.get('contentUpdate'),
        storelink: this.get('storelinkUpdate'),
        image: this.get('imageUpdate'),
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', blog, params);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      blogs: this.store.findAll('blog')
    });
  },
  actions: {
    save(params) {
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('admin');
    },
    delete(blog) {
      blog.destroyRecord();
      this.transitionTo('admin');
    }
  }
});

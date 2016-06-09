import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      blogs: this.store.findAll('blog')
    });
  },
  actions: {
    save(params) {
      console.log(params);
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('admin');
    },
    delete(blog) {
      var comment_deletions = blog.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return blog.destroyRecord();
      });
      this.transitionTo('admin');
    },
    update(blog, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          blog.set(key,params[key]);
        }
      });
      blog.save();
      this.transitionTo('admin');
    }
  }
});

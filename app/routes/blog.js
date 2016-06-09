import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      console.log(params);
      var newComment = this.store.createRecord('comment', params);
      var blog = params.blog;
      blog.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return blog.save();
      });
      this.transitionTo('blog', params.blog);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newComment = this.store.createRecord('comment', params);
      var blog = params.blog;
      blog.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return blog.save();
      });
      this.transitionTo('blog', params.blog);
    },
    destroyComment(comment, blog) {
      comment.destroyRecord();
      this.transitionTo('blog', blog);
    }
  }
});

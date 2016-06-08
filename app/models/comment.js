import DS from 'ember-data';

export default DS.Model.extend({
  commenter: DS.attr(),
  comment: DS.attr(),
  blog: DS.belongsTo('blog', {async: true})
});

import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  text: DS.attr(),
  storelink: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  link: DS.attr(),
  description: DS.attr(),
  venue: DS.attr()

});

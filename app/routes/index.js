import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [{
      title: 'Ember Hack Night',
      location: 'Iron Yard, Durham, in the basement',
      description: 'come hack with us'
    }];
  }
});

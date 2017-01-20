import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('members');
  this.route('projects');
  this.route('jobs');
  this.route('talks');
});

export default Router;

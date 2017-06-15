import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new-order');
  this.route('new-entry');
  this.route('entry-list');
  this.route('order-list');
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('todos', function() {
    this.route('list');
    this.route('new');
    this.route('view', {path: '/:todo_id'});
    this.route('edit', {path: '/edit/:todo_id'});
  });
});

export default Router;

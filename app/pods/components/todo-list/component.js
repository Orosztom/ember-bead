import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deletetodo(todo) {
            //console.log(todo);
            todo.deleteRecord();
            todo.save();
        }
    }
});

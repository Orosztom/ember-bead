import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyTodo(formData) {
            // console.log(formData);
            let todo = this.get('model');
            console.log(todo);
            todo.setProperties(formData);
            return todo.save().then(() => {
                this.transitionToRoute('todos.list');
            });
        }
    }
});

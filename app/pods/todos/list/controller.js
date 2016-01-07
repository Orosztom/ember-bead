import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTodo(formData) {
            var todo = this.store.createRecord(
                'todo', 
                Object.assign(
                    {
                        status: 'new',
                        //date: Date.now().toLocaleString(),
                        owner: 'labor',
                        description: 'rossz'
                    }, 
                    formData
                )
            );
            todo.save();
            $('.modal').modal('hide');
            //this.transitionToRoute('todos.list');
        }
    }
});

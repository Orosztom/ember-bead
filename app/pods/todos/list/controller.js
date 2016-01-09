import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTodo(formData) {
            var todo = this.store.createRecord(
                'todo', 
                Object.assign(
                    {
                        status: 'new',
                        //date: Date.now().toISOString(), nemtomménemjó
                        owner: 'Tomi',
                        description: 'Moss fel!',
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

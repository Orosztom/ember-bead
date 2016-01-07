import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTodo(formData) {
            console.log(formData);
            // formData.status = 'new';
            // formData.date = Date.now().toLocaleString();
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
            this.transitionToRoute('todos.list');
        }
    }
});

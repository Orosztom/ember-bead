import Ember from 'ember';

export default Ember.Component.extend({
    todos: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                owner: this.$('#helyszin').val(),
                description: this.$('#leiras').val(),
            });
        }
    },
    
    validate() {
        var owner = this.$('#helyszin').val();
        var description = this.$('#leiras').val();
        
        this.set('todos.owner', owner === '' ? 'Tennivaló felelőse kötelező' : '');
        this.set('todos.description', description === '' ? 'Tennivaló leírása kötelező' : '');
        
        return this.get('todos.owner') === '' &&
               this.get('todos.description') === '';
    }
});

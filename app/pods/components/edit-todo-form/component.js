import Ember from 'ember';

export default Ember.Component.extend({
    todos: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                
                owner: this.$('#owner').val(),
                description: this.$('#leiras').val(),
                status: 'updated',
            });
        }
    },
    
    validate() {
        var owner = this.$('#owner').val();
        var description = this.$('#leiras').val();
        var status = 'updated';
        this.set('todos.owner', owner === '' ? 'Tennivaló felelőse kötelező' : '');
        this.set('todos.description', description === '' ? 'Tennivaló leírása kötelező' : '');
        this.set('todos.status', status);
        
        return this.get('todos.owner') === '' &&
               this.get('todos.description') === '';
    }
});

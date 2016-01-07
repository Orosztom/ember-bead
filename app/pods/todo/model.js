import DS from 'ember-data';

const TodoModel = DS.Model.extend({
  owner: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('string'),
  status: DS.attr('string'),
});

TodoModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            date: '2021.12.12',
            owner: 'Tomi',
            description: 'rossz',
            status: 'new',
        },    
        {
            id: 2,
            date: '2012.12.12',
            owner: 'pc2',
            description: 'rossz',
            status: 'assigned',
        },    
        {
            id: 3,
            date: '2015.12.12',
            owner: 'pc9',
            description: 'rossz',
            status: 'success',
        },    
    ]
});

export default TodoModel;
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
            date: '2025.12.12',
            owner: 'Tomi',
            description: 'Moss fel!',
            status: 'new',
        },    
        {
            id: 2,
            date: '2015.12.12',
            owner: 'Sanyi',
            description: 'Takaríts!',
            status: 'assigned',
        },    
        {
            id: 3,
            date: '2015.12.12',
            owner: 'Peti',
            description: 'Hozz kaját! :)',
            status: 'success',
        },    
    ]
});

export default TodoModel;
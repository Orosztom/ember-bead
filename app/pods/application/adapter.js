import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://rest-server-orosztom.c9users.io',
    namespace: ''
});

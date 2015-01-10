import DS from 'ember-data';

/*App.ApplicationSerializer = DS.LSSerializer.extend();

App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'oneline'
});*/

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://oneline.sparkrevolutions.com',
    namespace: 'api',
    headers: {
     Authorization: 'Basic ' + btoa('liam:123liam123') 
    }
});

export default ApplicationAdapter;
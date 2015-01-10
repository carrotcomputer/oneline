import DS from 'ember-data';

App.ApplicationSerializer = DS.LSSerializer.extend();

App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'oneline'
});
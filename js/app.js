App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('feature');
  }
});

App.Feature = DS.Model.extend({
    icon: DS.attr('string'),
    title: DS.attr('string'),
    content: DS.attr('string'),
    status: DS.attr('number')
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Feature.FIXTURES = [
    {
        id: 1,
        icon: 'icon1',
        title: 'Request Management',
        content: 'Request Management setup automation & workflows for each category of Incidents and minimize business impact.',
        status: 0
    },
    {
        id: 2,
        icon: 'icon2',
        title: 'Asset Management',
        content: 'ServiceDesk Plus gives you various options for scanning, discovery, tracking and adding to your asset database.',
        status: 1
    },
    {
        id: 3,
        icon: 'icon3',
        title: 'Change Management',
        content: 'Change management module, provide structured and prompt handling of all changes in your IT infrastructure.',
        status: 1
    },
    {
        id: 4,
        icon: 'icon4',
        title: 'Project Management',
        content: 'Project Management integrated with Service Desk Plus, managing projects is simpler for IT Admins.',
        status: 1
    },
    {
        id: 5,
        icon: 'icon5',
        title: 'Service Catalog',
        content: 'Showcase the offered IT services to your end user and give a new face to your IT.',
        status: 1
    },
    {
        id: 6,
        icon: 'icon6',
        title: 'Integrations',
        content: 'Showcase the offered IT services to your end user and give a new face to your IT.',
        status: 0
    }
]
    
App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('features');
  }
});

App.Features = DS.Model.extend({
    icon: DS.attr('string'),
    title: DS.attr('string'),
    content: DS.attr('string'),
    status: DS.attr('number')
});

App.Feature = DS.Model.extend({
    feature-title: DS.attr('string'),
    feature-content: DS.attr('string');
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Features.FIXTURES = [
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
];

App.Feature.FIXTURES = [
    {
        id: 1,
        feature-title: 'Request Management',
        feature-content: 'Request module manages Requests raised by users. A request can be raised to denote a failure of a service (Incident Request) or need for a new resource (Service Request). Request module helps IT team to restore normal service operation or to supply the requested resource as soon as possible. This allows users to continue their work leading to better productivity and higher satisfaction level.'
    },
    {
        id: 2,
        feature-title: 'Asset Management',
        feature-content: 'Managing your assets will become harder as you scale up your IT resources. Asset module ensures effortless management of your entire IT infrastructure, by providing in-depth visibility of your assets present in the environment. Integrated CMDB module provides the ability to mark relationship between Services, Assets and Users. With this you can easily know the business impact of a service or an asset or an user.'
    },
    {
        id: 3,
        feature-title: 'Change Management',
        feature-content: 'Change module assist your team to ensure proper procedures are analyzed and applied when doing changes in IT Infrastructure. Proper planning and approved Changes help to reduce service disruption and avoid unauthorized infrastructure changes.'
    },
    {
        id: 4,
        feature-title: 'Project Management',
        feature-content: 'SDP supports easy way to track IT projects through Project module. Project module helps to collaborate with various teams and experts irrespective of the team size. You can configure different roles for different project members based on their scope for the project.'
    },
    {
        id: 5,
        feature-title: 'Service Catalog',
        feature-content: 'Using Service Catalog you can showcase the IT services offered to your end users and give a new face to your IT service. You can customize your workflow of delivering the service request specific to each service category. You can also setup approval process and service level agreements for each service offering.'
    },
    {
        id: 6,
        feature-title: 'Extension and Integration',
        feature-content: 'SDP can be configured to integrate with other ManageEngine products seamlessly. Data can be feed to SDP or SDP triggers action in other application. Also SDP allows you to plug in customer script or custom java action in the server side and to include custom javascript in the client side to manage your own workflows. These makes SDP application a powerful platform to extend the functions.'
    }
];
    
    
management.factory('Home', ["railsResourceFactory", "railsSerializer", function(railsResourceFactory, railsSerializer) {
  var home = railsResourceFactory({
    url: '/home',
    name: 'home',
  });
  return home;
}]);

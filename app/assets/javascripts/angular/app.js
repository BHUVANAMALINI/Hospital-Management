var management = angular.module('management',['rails']);

management.config(["railsSerializerProvider", function(railsSerializerProvider) {
    railsSerializerProvider.underscore(angular.identity).camelize(angular.identity);
}]);

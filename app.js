// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function(){
        
        // sample cities
        // London   = 2643743
        // Chicago  = 4887442
        // Dallas   = 4853335
        // New York = 5128638
        
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$resource', 'mapperService', function($scope, cityService, $resource, mapperService) {
    $scope.city = cityService.city;
    
    $scope.id = mapperService.cityMapper($scope.city);
    
    $scope.weatherAPI = $resource("http://openweathermap.org/data/2.5/forecast/daily", 
        { callback : "JSON_CALLBACK" }, 
        { get :{ method : "JSONP" }}
    );
    
    $scope.weatherResults = $scope.weatherAPI.get({ id : $scope.id, appid : 'b1b15e88fa797225412429c1c50c122a1'});
//    console.log($scope);
    
    $scope.convertToFahrenheitFromCelcius = function (degC) {
        return Math.round (1.8*degC + 32); 
    };
    
    $scope.convertToDate = function(dt){
       return new Date(dt * 1000); 
    };
}]);





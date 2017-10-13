// DIRECTIVES
weatherApp.directive('displayWeatherEnrty', function(){
    return {
        restrict : 'AECM',
        templateUrl : 'pages/directive/displayWeatherEntry.html',
        replace : true,
        scope : {
            weatherEntrySin : "=",
            convertToDate : "&",
            convertToFahrenheit : "&",
            dateFormat : "@"
        }
    }
});

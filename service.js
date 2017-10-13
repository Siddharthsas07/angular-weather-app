// SERVICES  
weatherApp.service('cityService', function() {
    this.city = "New York, NY";
});

weatherApp.service('mapperService', function() {
    this.mapper = {'London'      : 2643743,
                  'Chichago'    : 4887442,
                  'Dallas'      : 4853335,
                  'New York, NY': 5128638};
    
    this.cityMapper = function(city) {
        return this.mapper[city];                
    }
                                   
});
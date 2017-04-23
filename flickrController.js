angular
    .module('flickrSearch')
    .controller('flickrController', function($scope, $http) {
    var photos;
    $scope.images = []
    
    $scope.setTag = function(searchTag) {
        var flickrUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=188843a1a5f0b6cd12b9346dc0f9cc81&tags=" + searchTag  + "&format=json&nojsoncallback=1";
        
        $http.get(flickrUrl).success(function(data, status, headers, config) {
            photos = (data["photos"]["photo"]);
            console.log(photos);
            angular.forEach(photos, function(value) {
                images.push(`https://www.flickr.com/photos/${value['owner']}/${value['id']}`);
            });
        })
        .error(function(data, status, headers, config) {
            console.log(data);
        });
    }
});
angular
    .module('flickrSearch')
    .controller('flickrController', function($scope, flickrFactory) {
        $scope.searchTag;
        
        $scope.setTag = function() {
            flickrFactory.setTag($scope.searchTag);
        };
        
        flickrFactory.getPhotos().success(function(data) {
            console.log(data);
        }).error(function(error) {
            console.log(error);
        });
});
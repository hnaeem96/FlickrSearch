angular
    .module('flickrSearch')
    .controller('flickrController', function($scope, flickrFactory) {
        $scope.searchTag;
        
        flickrFactory.getPhotos().success(function(data) {
            
        }).error(function(error) {
            console.log(error);
        });
});
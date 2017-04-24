(function(angular) {
    'use strict';
    angular
    .module('flickrSearch', [])
    .controller('flickrController', function($scope, $http) {
        var photos;
        $scope.images = [];

        $scope.setTag = function(searchTag) {
            var flickrUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=188843a1a5f0b6cd12b9346dc0f9cc81&tags=" + searchTag  + "&format=json&nojsoncallback=1";

            $http.get(flickrUrl).success(function(data, status, headers, config) {
                $scope.photos = photos = (data["photos"]["photo"]);
                angular.forEach(photos, function(value) {
                    //                $scope.images.push(`https://www.flickr.com/photos/${value['owner']}/${value['id']}`);
                    $scope.images.push(`https://farm${value['farm']}.staticflickr.com/${value['server']}/${value['id']}_${value['secret']}.jpg`);
                });
                console.log($scope.images);
            })
                .error(function(data, status, headers, config) {
                console.log(data);
            });
        }
    });
})(window.angular);

angular
    .module('flickrSearch')
    .factory('flickrFactory', function($http) {
        
        var searchTag = '';
    
        function setTag(tag) {
            searchTag = tag;
            console.log(tag);
        }
    
        function getPhotos() {
            return $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=71978388bebe441396682f0f606bb462&tags='+ searchTag + '&format=json&nojsoncallback=1');
        }
    
        return {
            getPhotos : getPhotos
        };
});
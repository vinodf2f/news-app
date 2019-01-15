
var myApp = angular.module("myApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/india', {
                templateUrl: './template/news.html',
                controller: 'india'
            })
            .when('/usa', {
                templateUrl: './template/news.html',
                controller: 'usa'
            })
            .otherwise({
                redirectTo: '/',
                template: '<h1>root<h1>'
            });
    });


myApp.controller('india', ['$scope', function ($scope) {
    var title;
    var count = 0;
    var url;
    var imgUrl;
    
    $scope.news = [];
    // window.onload($scope.getNews())
     $scope.getNews = async () => {

        var res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.NEWSAPI_KEY}`);
        // console.log(res);

        var data = res.data;
        // console.log(data);
        
        var totalResults = data.totalResult;
       // console.log(data.totalResults)

       
           
             title = data.articles[count].title
             url = data.articles[count].url;
             imgUrl = data.articles[count].urlToImage;
            //  console.log(title, url, imgUrl);


            // console.log(imgUrl);
            $scope.news.push({ title, url, imgUrl });
           // console.log($scope.news);
            
        
        $scope.$apply(() => {
            $scope.news = $scope.news;
        })
        count++;

    }
   
}])
myApp.controller('usa', ['$scope', function ($scope) {
    var title;
    var count = 0;
    var url;
    var imgUrl;
    $scope.news = [];
    // window.onload($scope.getNews())
     $scope.getNews = async () => {

        var res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWSAPI_KEY}`);
        // console.log(res);

        var data = res.data;
        // console.log(data);
        
        var totalResults = data.totalResult;
       // console.log(data.totalResults)

       
           
             title = data.articles[count].title
             url = data.articles[count].url;
            imgUrl = data.articles[count].urlToImage;
             // console.log(title, url, imgUrl);


            // console.log(imgUrl);
            $scope.news.push({ title, url, imgUrl });
           // console.log($scope.news);
            
        
        $scope.$apply(() => {
            $scope.news = $scope.news;
        })
        count++;

    }
}])


// myApp.service('getNews', () => {

//     $scope.getNews = async () => {

//         var res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f2b65bfda2604d60a2d6fc4deddd68c5`);
//         console.log(res);

//         var data = res.data;

//         return data;

//     }
// });

    // $scope.getNews = async () => {

    //     var res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f2b65bfda2604d60a2d6fc4deddd68c5`);
    //     console.log(res);

    //     var data = res.data;

    //     return data;
    // }







angular.module('bookexchange')

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MybooksCtrl', function($scope) {
  $scope.mybooks = [
    {"id":3,"isbn":"1234","title":"asdf","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":4,"isbn":"1235","title":"fdsa","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":5,"isbn":"96879876","title":"lkjh","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":3,"isbn":"1234","title":"asdf","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":4,"isbn":"1235","title":"fdsa","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":5,"isbn":"96879876","title":"lkjh","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":3,"isbn":"1234","title":"asdf","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":4,"isbn":"1235","title":"fdsa","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":5,"isbn":"96879876","title":"lkjh","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":3,"isbn":"1234","title":"asdf","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":4,"isbn":"1235","title":"fdsa","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":5,"isbn":"96879876","title":"lkjh","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"}
  ];
})

.controller('MybookCtrl', function($scope, $stateParams) {
  $scope.book = {"id":3,"isbn":"1234","title":"asdf","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/300x100"};
})

.controller('NewBook', function($scope, $stateParams) {
	$scope.issell=null;
	$scope.book = {"id":3,"isbn":"","title":"Title.input","author":"Author.input","qualitiy":"data.qualitiy_select","status":"data.status_select","price":"price.input","prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/300x100"};
	$scope.issell = ("data.status_select"=="sell");

})

.controller('SearchCtrl', function($scope) {
  $scope.search_term = {};
  $scope.search_by = "";
  $scope.results = [];
    $scope.mybooks = [
    {"id":3,"isbn":"1234","title":"cc","author":"aa","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":4,"isbn":"1235","title":"dd","author":"bb","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":5,"isbn":"96879876","title":"lkjh","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":3,"isbn":"1234","title":"asdf","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":4,"isbn":"1235","title":"fdsa","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":5,"isbn":"96879876","title":"lkjh","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":3,"isbn":"1234","title":"asdf","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":4,"isbn":"1235","title":"fdsa","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":5,"isbn":"96879876","title":"lkjh","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":3,"isbn":"1234","title":"asdf","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":4,"isbn":"1235","title":"fdsa","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"},
    {"id":5,"isbn":"96879876","title":"lkjh","author":"qewr","qualitiy":"broken","status":"sell","price":null,"prixFix":null,"away":null,"deleted":null,"image":"http://placehold.it/80x80"}
  ];
  $scope.search_by_author = function () {
	  $scope.search_by = 'author';};
  $scope.search_by_title = function () {
	  $scope.search_by = 'title';};
  $scope.search = function(search_term){
    $scope.results = [];
  	if($scope.search_by == 'author'){
      for (var i=0; i<$scope.mybooks.length; i++){
        if($scope.mybooks[i].author==$scope.search_term.query){
          $scope.results.push($scope.mybooks[i]);
        }
      }
    }	else if($scope.search_by == 'title'){	
      for (var i=0; i<$scope.mybooks.length; i++){
        if($scope.mybooks[i].title==$scope.search_term.query){
          $scope.results.push($scope.mybooks[i]);
        }
      }	
    }
  };
});

app.controller('mainCtrl', function($scope, mainSvc) {

  $scope.testing = "hey, check me out";

  $scope.getQuotes = function() {
    $scope.quotes = mainSvc.getData();
  };
  $scope.getQuotes();

  $scope.removeData = function(deleteQuote) {
    mainSvc.removeData(deleteQuote);
  };

  $scope.addQuote = function() {
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    };
    if (mainSvc.addData(newQuote)) {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    }
  };

});

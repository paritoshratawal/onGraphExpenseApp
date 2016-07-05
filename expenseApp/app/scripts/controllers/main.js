app.controller('appCtrl',['$scope','appFactory',function($scope,appFactory){
  $scope.expenseObj={
    expenseList:[],
    add:function(){
      console.log('in ctrl');
      var exname = $scope.exname;
      var exid = $scope.exid;
      var category = $scope.category;
      var date = $scope.date;
      var time = $scope.time;
      var data=appFactory.
    }
  };
}]);

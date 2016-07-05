app.controller('appCtrl',['$scope','appFactory','$filter',function($scope,appFactory,$filter){
  $scope.expenseObj={
    expenseList:[],
    add:function(){
      console.log('in ctrl');
      var exname = $scope.exname;
      var exid = $scope.exid;
      var category = $scope.category;
      var date = $filter('date')($scope.date,'dd MMM,yyyy');
      console.log('date is',date);
      var time = $filter('date')($scope.time,'hh:mm:a');
      var data=new appFactory(exname,exid,category,date,time);
      console.log('data is:',data);
      this.expenseList.push(data);
    },
    save:function(){

    }
  };
}]);

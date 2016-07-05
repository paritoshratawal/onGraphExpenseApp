app.factory('appFactory',function(){
  function setData(exname,exid,category,date,time){
  console.log('in factory');
    this.exname=exname;
    this.exid=exid;
    this.category=category;
    this.date=date;
    this.time=time;
  }
  return setData;
});

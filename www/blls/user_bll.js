/**
 * Created by CNY on 2017/5/17.
 */
angular.module('user_bll'
  ,[{files:[
   'daos/dao.js'
  ],cache:false
  }])
  .factory('user_ser',['ser_api',function (ser_api) {
    return{
      getUserData: function () {
         ser_api.get('/User/Post',{});
      }
    }
  }]);

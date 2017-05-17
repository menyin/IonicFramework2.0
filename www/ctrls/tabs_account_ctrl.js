/**
 * Created by CNY on 2017/5/17.
 */
angular.module('tabs_account_ctrl'
  /*此处可加载angular模块或者js文件*/
  ,[{  files: [
    'css/tabs_account.css',
    'blls/user_bll.js',
    'testjs.js'
  ], cache: false
  }]
)
  .controller('tabs_account_index_act', ['$scope','user_ser',function ($scope,user_ser) {
    $scope.data = user_ser.getUserData();
  }]);

/**
 * Created by Administrator on 2017/7/11 0011.
 */
var myApp = angular.module('my',[]);
myApp.controller('liList',function ($scope) {
    $scope.nameList = [
        {
            id:1,
            name:'小明',
            carse:'上海'
        },
        {
            id:2,
            name:'小花',
            carse:'北京'
        },
        {
            id:3,
            name:'小李',
            carse:'广州'
        }
    ]
})
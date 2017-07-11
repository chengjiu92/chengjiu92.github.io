var my = angular.module('my',[]);
my.controller('first',function ($scope) {
    $scope.name='输入';
    $scope.count=0;
    $scope.$watch('name',function (newValue,oldValue) {
        console.log(newValue,oldValue);
        ++$scope.count;
        if($scope.count>30){
            $scope.count=30;
            $scope.name='输入不能大于30个字符';
        }
    })
})
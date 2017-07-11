/**
 * Created by Administrator on 2017/7/11 0011.
 */
var shop = angular.module('shop',[]);
shop.controller('first',function ($scope) {
    $scope.cart=[
        {
            id:100,
            name:'iphone5s',
            quantity:3,
            price:4300
        },
        {
            id:130,
            name:'iphone5',
            quantity:1,
            price:2100
        },
        {
            id:200,
            name:'imac',
            quantity:5,
            price:14300
        },
        {
            id:110,
            name:'ipad',
            quantity:30,
            price:3300
        }
    ];
    //总数量
    $scope.totalPrice=function () {
        var total=0;
        angular.forEach($scope.cart,function (item) {
            total += item.quantity * item.price;
        });
        return total;
    };
    $scope.totalQuantity=function () {
        var total=0;
        angular.forEach($scope.cart,function (item) {
            total+=item.quantity;
        });
        return total;
    }

    //id封装
    function findIndex(id) {
        var index=0;
        angular.forEach($scope.cart,function (item,key) {
            if (item.id===id){
                index=key;
                return;
            }
        })
        return index;
    };
    $scope.remove =function (id) {
        var index=findIndex(id);
        $scope.cart.splice(index,1);
    };
    $scope.liAdd=function (id) {
        var index=findIndex(id);
        ++$scope.cart[index].quantity;
    }
    $scope.liRepeat=function (id) {
        var index=findIndex(id);
        if($scope.cart[index].quantity>1){
            --$scope.cart[index].quantity;
        }else{
            var fun = confirm('是否删除');
            if (fun){
                $scope.remove(id);
            }
        }

    }
});
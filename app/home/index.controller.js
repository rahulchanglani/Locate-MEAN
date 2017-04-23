(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', function ($scope, UserService, $http) {
            var vm = this;

            vm.user = null;

            $scope.place = null;
            $scope.autocompleteOptions = {
                // componentRestrictions: { country: 'in' },
                types: ['geocode']
            };

            initController();
            function initController() {
                // get current user
                UserService.GetCurrent().then(function (user) {
                    vm.user = user;
                });
            }

            $scope.searchPlace = function () {
                if ($scope.place !== null && $scope.place !== "") {
                    UserService.SaveSearchPlace(vm.user._id, $scope.place).then(function (res) {
                        // console.log('conroller res...', res);
                    })
                }
            }


        }
        );


})(); 

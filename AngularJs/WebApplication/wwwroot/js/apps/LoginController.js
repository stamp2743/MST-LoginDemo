"use strict";

myApp.controller('LoginController', function ($scope, $http) {

    $scope.user = {
        username: "",
        password: ""
    };

    $scope.Login = function () {
        if ($scope.user.username == "jisoo" && $scope.user.password == "1234") {
            Swal.fire({
                title: 'Login Successfully',
                icon: 'success',
                showConfirmButton: false,
                timer: 1200
            }).then((result) => {
                window.location.href = "/Home/Test";
            })
        }
        else {
            Swal.fire({
                title: 'Plese input Username/Password',
                icon: 'error',
                showConfirmButton: false,
                timer: 1200
            }).then((result) => {
                window.location.href = "/Home/Login";
            })
        }
    };
});
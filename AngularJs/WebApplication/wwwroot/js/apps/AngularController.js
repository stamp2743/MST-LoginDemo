"use strict";

myApp.controller('AngularController', function ($scope, $http) {


    $scope.user = {}
    $scope.alives = [{ Text: "YES", Value: "Y" }, { Text: "NO", Value: "N" }]
    $scope.model = {
        Items: []
    };
    $scope.mode = "show";

    $scope.Init = function () {

        $scope.GetEmployee();
        $scope.GetDepartment();

    };

    $scope.GetEmployee = function () {
        $scope.mode = "show";

        $http.get(window.baseUrl + 'Home/GetEmployee', {}).then(function (res) {

            $scope.model.Items = res.data;
            console.log("Home/GetEmployee", res.data);

        });
    };

    $scope.GetDepartment = function () {

        $http.get(window.baseUrl + 'Home/GetDepartment', {}).then(function (res) {

            $scope.model.Departments = res.data;
            console.log("Home/GetDepartment", res.data);

        });

    };

    $scope.InsertEmployee = function () {

        $http.post(window.baseUrl + 'Home/InsertEmployee', $scope.user).then(function (res) {
            if ($scope.user == null) {

                alert("Please completed input first");
                return;
            }
            
            $scope.GetEmployee();
            $scope.user = {};

        });
    };

    $scope.UpdateEmployee = function () {
        $http.post(window.baseUrl + 'Home/UpdateEmployee', $scope.model.Items).then(function (res) {
            $scope.GetEmployee();
            $scope.mode = "show";
        });
    };

    $scope.Delete = function (item) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.post(window.baseUrl + 'Home/DeleteEmployee', item).then(function (res) {
                    $scope.GetEmployee();
                });
            }
        })

    };

});
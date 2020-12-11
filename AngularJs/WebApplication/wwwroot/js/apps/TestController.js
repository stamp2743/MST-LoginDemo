"use strict";

myApp.controller('TestController', function ($scope, $http, $filter) {

    $scope.model = {
        Items: [],
        Machines: []
    };

    $scope.example8model = [];

    $scope.example8data = [{
        id: 1, label: "Problem"
    }, {
        id: 2, label: "Cause"
    }, {
        id: 3, label: "Manual No."
    }, {
        id: 2, label: "Machine"
    }];
    $scope.example8settings = { checkBoxes: true, };

    $scope.Init = function () {
        $scope.model.Items = [
            {
                id: 1, number: '000001', status: 'confirmed', date: '12/feb/2020', creator: 'jisoo', ext: '4344', requestor: 'jisoo',
                problem: 'a', cause: 'b', solution: 'c', eff: 'd', approver: 'e', approved: 'f', machine: { id: 1, Name: "ADEPT Robot" }
            },
            {
                id: 2, number: '000002', status: 'confirmed', date: '12/feb/2020', creator: 'jisoo', ext: '4344', requestor: 'jisoo',
                problem: 'g', cause: 'h', solution: 'i', eff: 'j', approver: 'k', approved: 'l', machine: { id: 2, Name: "Advantest PC" }
            },
            {
                id: 3, number: '000003', status: 'confirmed', date: '12/feb/2020', creator: 'jisoo', ext: '4344', requestor: 'jisoo',
                problem: 'm', cause: 'n', solution: 'o', eff: 'p', approver: 'q', approved: 'r', machine: { id: 3, Name: "Cleanline" }
            }
        ];

        $scope.Machines = [
            { id: 1, Name: "ADEPT Robot" },
            { id: 2, Name: "Advantest PC" },
            { id: 3, Name: "Cleanline" },
        ];

    };

    $scope.SaveasDraft = function () {
        Swal.fire({
            title: 'Save Successfully',
            icon: 'success',
            showConfirmButton: false,
            timer: 1200
        }).then((result) => {
            $scope.model.Items.push($scope.tb);
            console.log($scope.tb);
            $scope.tb = {};
        })

    };

    $scope.checkAll = function () {
        $scope.selectedAll = false;
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.model.Items, function (item) {
            item.selected = $scope.selectedAll;
        });
    }
    $scope.singleTroubleSelected = false;

    $scope.setSelectedTrouble = function (item) {
        if ($scope.model.Items.filter(x => x.selected).length > 1) {
            $scope.selectedTrouble = null;
            $scope.singleTroubleSelected = false;
        } else {
            $scope.selectedTrouble = angular.copy($scope.model.Items.find(x => x.selected));
            $scope.singleTroubleSelected = !!$scope.selectedTrouble;
        }
    }

    $scope.edit = function () {
        if (!!$scope.model.Items.find(x => x.number === $scope.selectedTrouble.number && x.problem === $scope.selectedTrouble.problem
            && x.cause === $scope.selectedTrouble.cause && x.solution === $scope.selectedTrouble.solution)) {
            //alert('already eixsts');
            $scope.errorMessage = true;
            return;
        }
        var employeeToEdit = $scope.model.Items.find(x => x.id === $scope.selectedTrouble.id);
        employeeToEdit.number = $scope.selectedTrouble.number;
        employeeToEdit.problem = $scope.selectedTrouble.problem;
        employeeToEdit.cause = $scope.selectedTrouble.cause;
        employeeToEdit.solution = $scope.selectedTrouble.solution;
    }
});
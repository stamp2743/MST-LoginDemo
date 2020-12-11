"use strict";

myApp.controller('NewtroubleController', function ($scope, $http) {
	$scope.tb = {}
	$scope.model = {
		Items: [],
		Machines: []
	};

	$scope.Init = function () {
		$scope.model.Items = [
			{
				number: '000001', status: 'confirmed', date: '12/feb/2020', creator: 'jisoo', ext: '4344', requestor: 'jisoo',
				problem: 'a', cause: 'b', solution: 'c', eff: 'd', approver: 'e', approved: 'f', machine: { id: 1, Name: "ADEPT Robot" }
			},
			{
				number: '000002', status: 'confirmed', date: '12/feb/2020', creator: 'jisoo', ext: '4344', requestor: 'jisoo',
				problem: 'g', cause: 'h', solution: 'i', eff: 'j', approver: 'k', approved: 'l', machine: { id: 2, Name: "Advantest PC" }
			},
			{
				number: '000003', status: 'confirmed', date: '12/feb/2020', creator: 'jisoo', ext: '4344', requestor: 'jisoo',
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
		$scope.model.Items.push($scope.tb);
		console.log($scope.tb);
		$scope.tb = {};

	};
});
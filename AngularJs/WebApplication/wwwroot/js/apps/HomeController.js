"use strict";

myApp.controller('HomeController', function($scope, $http) {
		$scope.text = "Hello World!";

		$scope.user = {
			username: "",
			password: "",
			type: ""
		};

		$scope.model = {
			items: []
		};

		$scope.is = {
			CanSubmit: function() {
				return $scope.user.username !== "" && $scope.user.password !== "";
			}
		}

		$scope.items = [{
			id: 1,
			label: 'Admin',
			subItem: { name: 'SubAdmin' }
		}, {
			id: 2,
			label: 'Member',
			subItem: { name: 'SubMember' }
		}];



		$scope.Submit = function() {
			alert($scope.text);
		};

		$scope.Login = function () {
			console.log($scope.user);
			$scope.user = {};
			alert($scope.user.username + "/n" + $scope.user.password);
		};

	});
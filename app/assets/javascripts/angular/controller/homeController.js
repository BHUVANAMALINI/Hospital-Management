// management.controller('homeController',["$scope","Home", function($scope,Home){

//   $scope.initJson = function() {
//     if (typeof json != 'undefined') {
//       angular.forEach(json, function(obj_value, obj_key) {
//         $scope[obj_key] = obj_value;
//       });
//     }
//   }
//   $scope.initJson();

//   $scope.createPatient = function(data) {
//     Home.$get("/home/create_patient", {patient:data}).then(function(data) {
//       console.log("hi")
//     })
//   }


// }])



management.controller('homeController',["$scope","Home","$window", function($scope,Home,$window){
    $scope.initJson = function() {
      if (typeof json != 'undefined') {
        angular.forEach(json, function(obj_value, obj_key) {
          $scope[obj_key] = obj_value;
        });
      }
    }
    $scope.initJson();

    $scope.createPatient = function(details) {
      var patient_details = { patient_details: details }

      Home.$get("/home/create_patient", patient_details).then(function(patient) {
        $window.location.reload()
      })
    }

    $scope.createDoctor = function(details) {
      var doctor_details = { doctor_details: details }

      Home.$get("/home/create_doctor", doctor_details).then(function(doctor) {
        $window.location.reload()
      })
    }

    $scope.createAppointment = function(details) {
      var appointment_details = { appointment_details: details }

      Home.$get("/home/create_appointment", appointment_details).then(function(appointment) {
        $window.location.reload()
      })
    }

  }])

/**
 * Created by saipuck on 7/9/14.
 */
'use strict';

app.controller( 'AuthCtrl',
  function( $scope, $location, Auth ) {
//   if( Auth.signedIn() ) { // user already logged in
//     $location.path( '/' );
//   }

    $scope.$on('firebaseSimpleLogin:login', function () {
      $location.path('/');
    });

    $scope.login = function () {
      Auth.login( $scope.user ).then( function () {
        $location.path( '/' );
      }, function( error ) {
        $scope.error = error.toString();
      });
    };

    $scope.register = function () {
      Auth.register( $scope.user ).then( function( authUser ) {
        console.log( authUser );
        Auth.login( $scope.user );
        $location.path( '/' );
      }, function( error) {
        $scope.error = error.toString();
      });
    };


  });
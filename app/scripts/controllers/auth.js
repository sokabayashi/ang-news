/**
 * Created by saipuck on 7/9/14.
 */
'use strict';

app.controller( 'AuthCtrl',
  function( $scope, $location, Auth ) {
   if( Auth.signedIn() ) { // user already logged in
     $location.path( '/' );
   }

    $scope.register = function () {
      Auth.register( $scope.user ).then( function( authUser ) {
        console.log( authUser );
        $location.path( '/' );
      });
    };

  });
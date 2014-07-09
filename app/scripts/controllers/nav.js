/**
 * Created by saipuck on 7/8/14.
 */

'use strict';

app.controller( 'NavCtrl', function( $scope, $location, Post, Auth ) {  // Post is angularFire stuff
  $scope.post = { url: 'http://', title: '' };

  $scope.submitPost = function() {
     // angularFire stuff
     Post.create( $scope.post ).then( function( ref ) {
       $location.path( '/posts/' + ref.name() );     // Set view to single post view after submit
        $scope.post = { url: 'http://', title: '' }; // reset input boxes to original state
     });
  };

  $scope.logout = function () {
    Auth.logout();
  };

});
/**
 * Created by saipuck on 7/8/14.
 */
'use strict';

app.controller( 'PostViewCtrl', function( $scope, $routeParams, Post ) {

  $scope.post = Post.find( $routeParams.postId );

});
/**
 * Created by saipuck on 7/8/14.
 */
'use strict';

app.controller( 'PostsCtrl', function($scope, $location, Post) {
  $scope.posts = Post.all;
  $scope.post = {url: 'http://', title: '' };

  $scope.submitPost = function() {
    Post.create( $scope.post ).then( function(ref) {
      $location.path( 'posts/' + ref.name() );
//      $scope.post = {url: 'http://', title: '' };
    });
  };

  $scope.deletePost = function(postId) {
    Post.delete( postId );
  };
});

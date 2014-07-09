/**
 * Created by saipuck on 7/8/14.
 */
'use strict';

app.controller( 'PostsCtrl', function($scope, $location, Post) {
  $scope.posts = Post.all;  // angularFire get command
  $scope.post = {url: 'http://', title: '' };

  $scope.deletePost = function(postId) {
    Post.delete( postId );
  };
});

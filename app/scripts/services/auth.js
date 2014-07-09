/**
 * Created by saipuck on 7/9/14.
 */

'use strict';

app.factory( 'Auth',
  function( $firebaseSimpleLogin, FIREBASE_URL, $rootScope ) {

    var ref = new Firebase( FIREBASE_URL );

    var auth = $firebaseSimpleLogin( ref );

    var Auth = {
      register: function ( user ) {
        return auth.$createUser( user.email, user.password );
      },
/*
      signedIn: function () {
        auth.$getCurrentUser().then( function( currentUser ) {
          console.log( currentUser );
        }, function() {
          console.log( 'Cannot get user' );
        });
 },
 */
      signedIn : function() {
        console.log( auth.user );
        console.log( auth.$getCurrentUser() );
        return auth.user !== null; // not null means user signed in
      },


      login: function (user) {
        return auth.$login('password', user);
      },

      logout:   function () {
        auth.$logout();
      }
    };

    // will want to know user sign in status across our app
    $rootScope.signedIn = function () {
      return Auth.signedIn();
    };

    return Auth;
});
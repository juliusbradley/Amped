window.fbAsyncInit = function() {
FB.init({
  appId            : '109983719111185',
  autoLogAppEvents : true,
  xfbml            : true,
  version          : 'v2.9'
});
FB.AppEvents.logPageView();
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// const APP_SECRETS = {
//   FB_CLIENT_ID: ,
//   FB_CLIENT_SECRET: '8e83ad2af9bf9afb2394e4cf0579399b'
// }

//database or save locally on server
//show view for the song file
//share button on show view page
//route /:song_name
//

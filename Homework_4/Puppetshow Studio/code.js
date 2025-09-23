setTimeout(function() {
  setScreen("Loginorsignupscreen");
}, 1000);
onEvent("loginbutton", "click", function( ) {
  setScreen("Loginscreen");
  onEvent("LaunchButton", "click", function( ) {
    onEvent("Usernameinput", "input", function( ) {
      setText("Usernameinput", "text");
    });
    setScreen("HomeScreen");
  });
});
onEvent("Signupbutton", "click", function( ) {
  setScreen("SignupScreen");
  onEvent("Launchmakeaccount", "click", function( ) {
    onEvent("Usernamemake", "input", function( ) {
      setText("Usernameinput", "text");
    });
    setScreen("HomeScreen");
  });
});
onEvent("Logo/Home", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("Homebuttonveiw", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("Homefromsearch", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("Backhomeanime", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("Homemusic", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("BacktohomeButtonwrite", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("homefromreader", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("homeaccount", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("Searchbutton", "click", function( ) {
  setScreen("Searchscreen");
});
onEvent("Account", "click", function( ) {
  setScreen("Accountscreen");
});
onEvent("Read", "click", function( ) {
  setScreen("Bookscreen");
  onEvent("Book1", "click", function( ) {
    setScreen("ReaderveiwScreen");
  });
  onEvent("Book2", "click", function( ) {
    setScreen("ReaderveiwScreen");
  });
});
onEvent("Listen", "click", function( ) {
  setScreen("Musicscreen");
});
onEvent("Watch", "click", function( ) {
  setScreen("AnimationScreen");
});
onEvent("Write", "click", function( ) {
  setScreen("WriteABookScreen");
});
onEvent("backtobook", "click", function( ) {
  setScreen("Bookscreen");
});

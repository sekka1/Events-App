// use a closure to (a) test it and (b) not expose this into global scope

(function()
{
        // window container
        var welcomeWindow = Titanium.UI.createWindow({
		backgroundImage: '/main_windows/Home_Icons/Default.png',
                touchEnabled:false
        });

        // black view
        var indView = Titanium.UI.createView({
                opacity:0.8,
                touchEnabled:false
        });
        welcomeWindow.add(indView);

        // message
        var message = Titanium.UI.createLabel({
                text:'WedVite',
                color:'#000000',
                textAlign:'center',
                font:{fontSize:32,fontWeight:'bold'},
        });
        welcomeWindow.add(message);
        welcomeWindow.open();

        var animationProperties = {delay: 2500, duration: 1000, opacity: 0.1};
        if (Ti.Platform.osname == "iPhone OS") {
                animationProperties.transform = Ti.UI.create2DMatrix().translate(-200,200).scale(0);
        }
        welcomeWindow.animate(animationProperties, function()
        {
                welcomeWindow.close();
        });
})();


# SkyGameSDK
> developed for the ENCODE and the Built to Explore hackathons.

> With SkyGameSDK, you can easily add tons of features to Unity WebGL games; multiplayer, screenshots, leaderboards, achievements, etc,,,

# Inner workings
The cross-communication between the browser and Unity works through the WebGLPluginJS.jslib file in Unity's Assets/Plugins/WebGL file and the SendMessage() function in the game instance.

# Setup
Download [this](https://siasky.net/AAB659zUOymZQY8zU9MX16MhJZoOBTRmFvFslGfunJ2Taw) file, unzip it, install WebGL for Unity, switch platform to WebGL, press "Build and Run" in Unity, swap out the generated .html file to the one provided in the project.

# License
This is covered by the MIT license. Feel free to use it almost however you like ;)

# Demos
* [Early P2P Demo - SkyDB testing](https://100ccrtto8qqedqa84kb6sjcl609kbqirbevn2rv79avqu1fq5iikko.account.siasky.net/)
* [Working "Color-Sharing" Demo - completed Unity<>SkyDB](https://60061g6oprj2pi50jku6el64c81f94r10kfgmtkqp5pij6sch8jfk00.siasky.net/)
* [Video of "Color-Sharing"](https://siasky.net/AADbQgkgExh2Oo8wXcdot641m40Bzys7d_8JvYmnA7abHw)

# Potential additions // TODO(partly)
* HTML cleanup
* Integrate to webapp(right now having CORS issues, as I had been loading it as an <iframe>)
* Real-time connections(might require websockets, as not everyone can connect with P2P without TURN/STUN servers)
* MySky for communication instead of skyDB
* Screenshots (possible in Unity, and can then communicate to the browser with the WebGLPluginJS library)
* Lobbies(done via mysky, host whitelists friends, friends posts publickey to skydb,,,)
* Working chess example (should be here 27th-30th april, and then recieve updates)
* Extrapolation parameters in networking to simulate sync? (inclusion of time on send)
* Make it work as a .js import to .html & .ts

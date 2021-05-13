# SkyGameSDK
> developed for the ENCODE and the Built to Explore hackathons.

> With SkyGameSDK, you can easily add tons of features to Unity WebGL games; multiplayer, screenshots, leaderboards, achievements, etc,,,

# Inner workings
The cross-communication between the browser and Unity works through the PluginJS.jslib file in Unity's Assets/Plugins/WebGL file and the SendMessage() function in the game instance.

DACs will currently only be implemented to send entries to the leaderboard. Will use it for a lobby system/screenshot feed/etc in the future once those added features come.

Getting/setting MySky data can be used for something suchas stats, names or any other mutable data that should persist through multiple games.

# Planned features [similar to the roadmap](https://github.com/figurestudios/SkyGameSDK/wiki/Roadmap)
Screenshots will be implemented by using the passthrough using the Plugin.jslib, which will get the data for the screenshot and then get uploaded to Skynet.

Leaderboards will work through publishing a feed to a DAC, although there will be obvious problems with trusting that leaderboard as there's no way to verify how legitimate it is.

Realtime multiplayer will work through WebRTC, but since I can't add a decentralized TURN/STUN server I don't know how to make it acccessible to everyone, might work with websockets if those get added to Skynet.

A friendlist could be added with MySky, adding all friends to a path and then looping through them to see if they've done the same.

Lobbies could be built with DAC feeds once those are added, but might be hacky with unresponsive clients.

Chess can be built from the demo below right now, just needs to pass either moves or full states of the game and add a chess engine to the project and it should basically be working.

# Setup (check open-source examples for inspiration)
Fork this project

Download version 2019.3.9f1 for Unity or a similar version(WebGL differs a lot from version to version);

In Unity, make sure platform is set to WebGL. You can access all functions through the Plugin class, running for example "Plugin.SetFastData("test")".

Then press "Build" and once that's completed, run $ serve in your commandline

Lastly, swap the index.html file to the one in this repo

Join this [discord server](https://discord.gg/fpqXNtFepM) for 1-on-1 support.

# License
This is covered by the MIT license. Feel free to use it almost however you like ;)

# Demos
* [Color-Sharing Demo](https://abughadiyah.hns.siasky.net/)
* [Polished Connect-4](https://skorn.hns.siasky.net/)

# Community projects
> If you want to be seen here, just push an edit with your project linked =) Ideas? Tic-tac-toe, rock-paper-scissors, anything luck-based using [this](https://entropybeacon.hns.siasky.net/), etc...
* [Army Clash](https://github.com/mikopeck/ArmyClash) - a simple turn-based multiplayer game you can [play here](blakerasor.hns.siasky.net).

# Potential additions // TODO(partly)
* Integrate to webapp(right now having CORS issues, as I had been loading it as an <iframe>) [develop branch](https://github.com/figurestudios/SkyGameSDK/tree/develop)
* Real-time connections(might require websockets, as not everyone can connect with P2P without TURN/STUN servers)
* Screenshots (possible in Unity, and can then communicate to the browser with the WebGLPluginJS library)
* Lobbies(done via mysky, host whitelists friends, friends posts publickey to skydb,,,)
* Extrapolation parameters in networking to simulate sync? (inclusion of time on send)
* Make it work as a .js import to .html & .ts
* [Roadmap](https://github.com/figurestudios/SkyGameSDK/wiki/Roadmap)

# Special Thanks <3
> Thanks to ChrisChrisChris#7003 for helping me for massively with the develop branch and further motivating me with this project
> 
> Thanks to Froggy#3210 for being the first person to use SkyGameSDK
> 
> Thanks to redsolver#0372 for helping me pitch ideas & make use of the registry
> 
> Thanks to dghelm#8125 and pjbrone#3584 for helping me with their API
> 
> Thanks to everyone else who's helped me & given suggestions

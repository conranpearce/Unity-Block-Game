const body = document.getElementsByTagName('body')[0];
var placeholder = document.querySelector('.placeholder');
var nav = document.getElementsByTagName('header')[0];
var width = window.innerWidth;

window.onscroll = function () { 
};

// var unityInstance = UnityLoader.instantiate("unityContainer", "Build/WebBuild.json", {onProgress: UnityProgress});

function startGame() {
    var unityInstance = UnityLoader.instantiate("unityContainer", "Build/WebBuild.json", {onProgress: UnityProgress});

}
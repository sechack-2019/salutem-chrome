chrome.extension.onMessage.addListener(function() {
    hide();
});

function hide(){
    product = [...document.getElementsByClassName('sg-col-inner')].slice(4);
    product[0].className = "suspicious";
};


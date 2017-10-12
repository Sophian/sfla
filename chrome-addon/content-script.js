var port = chrome.runtime.connect();

window.addEventListener('message', function (event) {
    //if( event.data === 'check-addon-installed' ) {
    //    window.postMessage( 'addon-installed', '*' );
    //} else if (event.source === window) {
    //    port.postMessage( event.data );
    //}
  if(event.source === window) {
    port.postMessage(event.data);
  }
});

port.onMessage.addListener(function (message) {
    window.postMessage(message, '*');
});


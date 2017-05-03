import "core-js/shim";

// IE10 Polyfil : http://tosbourn.com/a-fix-for-window-location-origin-in-internet-explorer/
if (!window.location.origin) {
  window.location.origin = `${window.location.protocol}//${window.location.hostname}${(window.location.port ? `:${window.location.port}` : ``)}`;
}

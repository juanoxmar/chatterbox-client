// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', 'f7b21f3a80d12fde9e86955b5f0f05b2bad808e0');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', '62d724a819f304c0e65d3015414127b322ac2706');
});

// Put your campus prefix here
window.CAMPUS = 'sea';
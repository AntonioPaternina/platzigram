var page = require('page');
var empty = require('empty-element');

var template = require('./template');

page('/signup', function(ctx, next) {
    var main = empty(document.getElementById('main-container'));
    main.appendChild(template);
});

var page = require('page');
var empty = require('empty-element');
var title = require('title');

var template = require('./template');

page('/signup', function(ctx, next) {
    title('Platzigram - Signup');
    var main = empty(document.getElementById('main-container'));
    main.appendChild(template);
});

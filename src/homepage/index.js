var page = require('page');
var empty = require('empty-element');
var title = require('title');

var template = require('./template');

page('/', function(ctx, next) {
    title('Platzigram');
    var main = empty(document.getElementById('main-container'));

    var pictures = [
      {
          user: {
            username: 'acpat88',
            avatar: 'http://www.aceshowbiz.com/images/still/avatar114.jpg'
          },
          url: 'office.jpg',
          likes: 10,
          liked: true
      },{
          user: {
            username: 'fukkatsu1',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Avatar_girl_face.png'
          },
          url: 'office.jpg',
          likes: 2,
          liked: true
      }

    ];

    main.appendChild(template(pictures));
});

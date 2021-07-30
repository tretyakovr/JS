'use sctrict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
};

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let post1 = new Post('post1_author', 'post1_text', 'post1_date');
console.log(post1);

post1.edit('new text to post1');
console.log(post1);

let post2 = new AttachedPost('post2 author', 'post2 text', 'post2 date');
console.log(post2);
post2.edit('new text to post 2');
post2.makeTextHighlighted();
console.log(post2);

'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
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

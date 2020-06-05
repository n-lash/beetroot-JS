'use strict';

// let url = 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=cdd51a91c3d54d9a84856b4b0e8e4f3b' ;

// let url = './js/data.json';
let url = './js/data1.json';

fetch(url)
    .then( result => result.json() )
    .then( showNews );

function showNews(data) {

    const list = document.querySelector('[data-list]');
    const tmpl = document.querySelector('[data-tmpl]').innerHTML;
    
    console.log(data);

    if(data.status != 'ok') return;

    let listHtml = '';

    for (const post of data.articles) {

        // console.log(post);
        // console.log(post.title);
        // console.log(post.description);
        listHtml += tmpl
                        .replace(/{{title}}/gi, post.title)
                        .replace(/{{date}}/gi, post.publishedAt)
                        .replace(/{{description}}/gi, post.description)
                        .replace(/{{img}}/gi, post.urlToImage)
                        .replace(/{{url}}/gi, post.url)
                        .replace(/{{author}}/gi, post.author);
    }
    list.innerHTML = listHtml;
}

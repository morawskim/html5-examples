import React from 'react';

export default function Article(props) {
    const article = props.articles.find(article => article.id == props.match.params.id);
    return <h1>{article.title}</h1>;
}

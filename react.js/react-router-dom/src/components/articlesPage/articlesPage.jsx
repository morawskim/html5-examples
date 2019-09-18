import React from 'react';
import {Link} from "react-router-dom";

export default function Articles(props) {
    const articles = props.articles.map((article) => {
        return (
            <p key={article.id}>
                <Link to={`/article/${article.id}`}>{article.title}</Link>
                <br/>
            </p>
        )
    });
    return (
        <>
            <h1>Articles</h1>
            {articles}
        </>
    );
}

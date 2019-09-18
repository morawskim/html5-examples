import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import About from './components/aboutPage/aboutPage';
import Article from './components/articlePage/articlePage';
import Index from './components/indexPage/indexPage';
import Articles from './components/articlesPage/articlesPage';

const articles = [
    {id: 1, title: "lorem ipsum"},
    {id: 2, title: "React router dom is awesome"},
    {id: 3, title: "New version of react"},
];

function Header() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
            <hr/>
        </>
    );
}


function AppRouter() {
    return (
        <Router>
            <div>
                <Header/>
                <Route exact path="/" component={Index}/>
                <Route path="/about" component={About}/>
                <Route path="/articles" render={props => <Articles {...props} articles={articles}/>}/>
                <Route path="/article/:id" render={props => <Article {...props} articles={articles}/>}/>
            </div>
        </Router>
    );
}

render(
    <AppRouter/>,
    document.getElementById('react')
);

import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
        <h1 className='text register'>welcome to my blogs</h1>
        <div className='blog'>
            <div className='context'>
                <h1> Q-1 : Difference between javascript and nodejs </h1>
                <p>
                    <span>Ans:</span> <br />
                    JavaScript is a language.node.js is not a language or a special dialect of JavaScript - it's just a thingamabob that runs normal JavaScript.All browsers have JavaScript engines that run the JavaScript of web pages.
                    Node.js is simply the V8 engine bundled with some libraries to do I/O and networking.
                    so that you can use JavaScript outside of the browser, to create shell scripts, backend services or run on hardware.

 
                </p>
            </div>
            <div className='context'>
                <h1> Q-2 : When should you use nodejs and when should you use mongodb</h1>
                <p>
                <span>Ans:</span> <br />
                MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.NodeJS's responsibilty is especially to execute your application.




                </p>
            </div>
            <div className='context'>
                <h1> Q-3 :  Differences between sql and nosql databases.</h1>
                <p>
                <span>Ans : </span> <br />
                  SQL databases are relational, NoSQL databases are     non-relational.
                  SQL databases are vertically scalable, NoSQL databases are horizontally scalable.
                  SQL databases are table-based,  NoSQL databases are document, key-value, graph, or wide-column stores.
                  SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.





                </p>
            </div>
        </div>
    </div>
    );
};

export default Blog;
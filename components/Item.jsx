import React,{useState} from 'react';
import './Item.css';

const Item = ({post}) => {
   
    return (
        <div className="item">
            <h1>{post.id}. {post.title}</h1>
            <p>{post.desc}</p>
        </div>
    );
};

export default Item;
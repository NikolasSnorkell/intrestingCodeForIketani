import React from 'react';
import Item from './Item';

const Itemlist = ({posts}) => {

    

    return (
        <div className="itemlist">
           { posts.map((post)=>
            <Item post={post} key={(post.id).toString()}/>
        )}
        </div>
        
    );
};

export default Itemlist;
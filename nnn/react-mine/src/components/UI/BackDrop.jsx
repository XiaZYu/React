import React from 'react';

const BackDrop = (props) => {
    return (
        <div className="left-0 right-0 top-0 bottom-0 absolute bg-black/30">
            {props.children}
        </div>
    );
};

export default BackDrop;
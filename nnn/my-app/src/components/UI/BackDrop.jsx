import React from 'react';

const BackDrop = (props) => {
    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 m-auto bg-black/50 z-10">
            {props.children}
        </div>
    );
};

export default BackDrop;
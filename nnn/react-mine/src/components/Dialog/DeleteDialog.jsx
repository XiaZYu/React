import React from 'react';
import BackDrop from "../UI/BackDrop";
import { createPortal } from 'react-dom';

const backdropRoot = document.getElementById('drop-root');
const DeleteDialog = ({
    setState,
    onClick
}) => {
    return (
        createPortal(
            <BackDrop>
                <div className='absolute p-8 left-1/3 top-1/3 bg-orange-300 w-96 h-32 text-center'>
                    <p>确认要删除吗?</p>
                    <div className="mt-10 gap-20 flex justify-end">
                        <button onClick={() => {
                            onClick();
                            setState(false)
                        }}>确认</button>
                        <button onClick={() => {
                            setState(false);
                        }}>取消</button>
                    </div>
                </div>
            </BackDrop>
            ,backdropRoot)
    );
};

export default DeleteDialog;
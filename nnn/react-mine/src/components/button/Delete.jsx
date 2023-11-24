import React, {useState} from 'react';
import DeleteDialog from "../Dialog/DeleteDialog";

const Delete = ({
    List,
    index,
    onChange
}) => {
    const [state, setState] = useState(false);
    return (
        <div>
            <div className="text-black cursor-pointer" onClick={() => {
                setState(true)
                // const newLogs = List.filter((_, i) => (i !== index))
                // onChange(newLogs)
            }}>x
            </div>
            {state && <DeleteDialog setState={setState} onClick={() => {
                const newLogs = List.filter((_, i) => (i !== index))
                onChange(newLogs)
            }}/>}
        </div>
    );
};

export default Delete;
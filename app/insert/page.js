'use client';
import { insPost } from "@/_actions/insertAction";

import { useState } from "react";

export default function Insert(){
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {insert,errMsgi} = await insPost(msg);
        if(errMsgi){
            return <h1>{errMsgi}</h1>
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <h1>Hello gooys</h1>
            MSG: 
            <input
                className="text-black"
                type="text"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <button type="submit">Add data</button>
        </form>
    );
}

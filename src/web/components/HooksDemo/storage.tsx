import React, {FC, useEffect} from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';
import useAsyncTask from '../../hooks/useAsyncTask';
function myApiRequest(data: string){
    return new Promise((resolve, reject)=>{
        resolve(data)
    });
}
const Storage: FC<{}> = () => {
    const [name, setName] = useLocalStorage<string>("name", "test");
    
    const task = useAsyncTask(async (data: string) => await myApiRequest(data));
    task.run("");
    useEffect(() => {
        console.log(task.status)
    }, [task.status]);
    return (
        <div>
            <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
            ></input>
        </div>
    )
}

export default Storage;
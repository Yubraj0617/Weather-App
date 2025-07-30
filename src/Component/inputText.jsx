
import { useState } from 'react'

function inputText({ sendinput }) {
    const [input, setinput] = useState("");

    const handleData = (e) => {
        let value = e.target.value;
        setinput(value);
        sendinput(value);
        
    }
    return (
        <div className=''>
            <input
                className='border rounded md:scale-120'
                onChange={handleData}
                value={input}
                type="text"
                placeholder='Enter your place name'
            />
        </div>
    )
}

export default inputText
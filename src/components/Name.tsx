import React from 'react'

const Name = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        // stype object key is written by camel-case
        <div style={{padding: '16px', backgroundColor: 'gray'}}>
            {/* substitute htmlFor for for*/}
            <label htmlFor='name'>名前</label>
            <input id ="name" className='input-name' type="text" onChange={onChange}>
            </input>
        </div>
    )
}

export default Name

import React from 'react';
import "./Timer.css"

const Timer = () => {
    let time = new Date().toLocaleTimeString();
    const [current , setCurrent] = React.useState(time);


    const updateTime = ()=>{
        time  = new Date().toLocaleTimeString();
        setCurrent(time);

    };
    setInterval(updateTime,1000)

  return (
    <div className='time'>
       <label>Time: </label> {current}
    </div>
  )
}

export default Timer
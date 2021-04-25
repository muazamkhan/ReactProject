import React from "react";
import '../App.css';
const Hoc =(OrignalComponent)=>
{


        // return this.state.Primary?(
        // <button className='btn'>Click Me</button>) : (<button>Click Me</button>)

    return OrignalComponent.Primary?(<button className='btn'>Click Me</button>):(<button className='btn1'>Click Me</button>)

}
export default Hoc;

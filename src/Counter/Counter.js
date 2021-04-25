import React, {useState} from "react";
import '../App.css';
import classes from "../Counter/Counter.module.css";
const Count =()=>{
    const [count, setcount]=useState(0)
// if(count===0)
// {
//     count(0);
// }
    return(
        <div>
              <div className={classes.dev}>
               <p className={classes.p}>
                      counter<br/>{count}
               </p>

                  <button className={classes.btn} onClick={()=>{
                      let temp=count+1;
                      if (temp>10)
                      {
                          setcount(10);
                      }
                      else
                      {
                          setcount(temp);
                      }
                  }}>Increase</button>

                  <button className={classes.btn} onClick={() => {let temp=count-1;
                      if (temp<0)
                      {
                          setcount(0);
                      }
                      else {
                          setcount(temp);
                      }
                  }

                  }
                      >Decrement</button>

              </div>
        </div>
    );


}
export default Count;
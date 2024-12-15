import { useDispatch,useSelector } from "react-redux";
import {CounterActions} from "../store/counterStore";

export default function Counter (){
    const counter=useSelector((state)=>state.counter.counter);
    const toggle=useSelector((state)=>state.counter.isActive);
    const dispatch=useDispatch();

     const increment=()=>{
        dispatch(CounterActions.increment());
     };
     const decrement=()=>{
        dispatch(CounterActions.decrement());
     };

     return(
        <div>
            <h1 className="">

            </h1>
        </div>
     )
}
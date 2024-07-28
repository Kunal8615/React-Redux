let initialstate = 0;

const ChangeTheNumber = (state= initialstate,action)=>{
switch(action.type){
    case "Increment" : return state +1;
    case "decrement" : return state-1;
    default : return StaticRange;
}
}

export default ChangeTheNumber;
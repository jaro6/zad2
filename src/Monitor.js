const Monitor = ({lives, score}) => {


    if(lives === 0){
      return (<strong>YOU LOSE!!!</strong>)
    }
    if(score === 6){
      return (<span className="winning">YOU WIN!!!</span>)
    }
    else{
      return (<span>You have <strong> { lives } </strong> lives left.</span>)
    }
  }

  export default Monitor;
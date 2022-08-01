import Msg from "./Msg";

const Person = ({name,img,tel}) => {
    // const {name,img,tel} = props;
  return (
    <div>
        <Msg name={name}/>
        
        <img src={img} alt="" />
        <h3>{tel}</h3>
    </div>
  )
}

export default Person
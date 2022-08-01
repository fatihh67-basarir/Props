

const msg = (props) => {
    // console.log(props);
    const {mesaj} = props;
  return (
    <div>
        <h3>Merhaba {mesaj}</h3>
    </div>
  )
}

export default msg
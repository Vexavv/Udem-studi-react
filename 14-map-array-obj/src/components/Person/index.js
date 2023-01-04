function Person(props) {
    const {firstName, lastName, email, img} = props
    return (<div className="card">
        <img src={img} alt=""/>
        <h3>{`Name ${firstName} Last name ${lastName}`}</h3>
        <h4>{email}</h4>
    </div>)
}

export default Person
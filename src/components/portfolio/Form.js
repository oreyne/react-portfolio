import './../../css/portfolio/Form.css'

const Form = () => {
  return (
    <div className="form">
      <form className="port-form">
        <label>Your name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Details</label>
        <textarea rows="6" placeholder="Type a short message here"/>
        <button className="port-btn">Submit</button>
      </form>
    </div>
  )
}

export default Form

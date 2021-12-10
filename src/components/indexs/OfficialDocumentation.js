import { useState } from 'react'

const Welcome = ({name}) => {
  const [names, setNames] = useState('Oreyne')

  return (
    <span>{names}</span>
  )
}

function Greeting(props) {
  const isLogged = props.isLoggedIn
  if (isLogged) {
      return  <UserGreetings />
  }
  return  <GuestGreetings />
}

const UserGreetings = (props) => {
  return <h3>Can I do this?</h3>
}

const GuestGreetings = (props) => {
  return <h3>Please sign uo</h3>
}

const LoginButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

const LogoutButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

const LoginControl = () => {
  const [state, setState] = useState({
    isLoggedIn: false
  })

  const handleLoginClick = () => {
    setState({isLoggedIn: true});
  }

  const handleLogoutClick = () => {
    setState({isLoggedIn: false});
  }

  const isLoggedIn = state.isLoggedIn;
  let button;
  // if (isLoggedIn) {
  //   button = <LogoutButton onClick={handleLogoutClick} />;
  // } else {
  //   button = <LoginButton onClick={handleLoginClick} />;
  // }
  {isLoggedIn ? (button = <LogoutButton onClick={handleLogoutClick} />) : (button = <LoginButton onClick={handleLoginClick} />)}

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

const NumberList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((number) => <li key={number.toString()}>{number}</li>)}
    </ul>
  )
}

const OfficialDocumentation = () => {
  const [myText, setMyText] = useState('')
  const [selectedItem, setSelectedItem] = useState('mango')

  const handleChange = (e) => {
    setMyText(e.target.value)
  }

  function formatName(user) {
    if (user.age > 22)
      return <h2>Mi edad es {user.age}</h2>
    return <h2>I'm a child</h2>
  }

  const other = formatName({age: 23})
  const name = 'Hello, world!'

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('stop sending the data')
    console.log(myText)
  }

  const test = (e) => {
    console.log(e)
  }

  const numbers = [1,3,6,4,23]

  const handleSelection = (e) => {
    setSelectedItem(e.target.value)
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>{name}</h1>
      {other}
      <Welcome name="Yo la quiero"/>
      <Welcome name="Yo no voy a estar con nadie"/>
      <Greeting isLoggedIn={true} />
      <LoginControl />
      <NumberList  numbers={numbers}/>
      <form onSubmit={handleSubmit}>
        <input type="text" value={myText} onChange={handleChange}></input>
        <button onClick={test}>Test</button>
        <button type="submit">Send</button>
        <textarea value={myText} onChange={handleChange}/>
        <select value={selectedItem} onChange={handleSelection}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </form>
    </div>
  )
}

export default OfficialDocumentation

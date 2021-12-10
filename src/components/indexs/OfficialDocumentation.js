import { useState } from 'react'

const Welcome = ({name}) => {
  const [names, setNames] = useState('Oreyne')

  return (
    <span>{names}</span>
  )
}

const OfficialDocumentation = () => {
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
  }

  return (
    <div>
      <h1>{name}</h1>
      {other}
      <Welcome name="Yo la quiero"/>
      <Welcome name="Yo no voy a estar con nadie"/>
      <form onSubmit={handleSubmit}>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default OfficialDocumentation

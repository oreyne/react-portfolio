const Welcome = (props) => {
  return <div>{props.name}</div>
}

const OfficialDocumentation = () => {
  function formatName(user) {
    if (user.age > 22)
      return <h2>Mi edad es {user.age}</h2>
    return <h2>I'm a child</h2>
  }

  const other = formatName({age: 23})
  const name = 'Hello, world!'

  return (
    <div>
      <h1>{name}</h1>
      {other}
      <Welcome name="Yo la quiero"/>
      <Welcome name="Yo no voy a estar con nadie"/>
    </div>
  )
}

export default OfficialDocumentation

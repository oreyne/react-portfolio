import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click')
  }
  
  return (
    <div className='header'>
      <h1 style={headingStyle}>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

const headingStyle = {
  color: 'red',
  backgroundColor: 'black'
}

export default Header;

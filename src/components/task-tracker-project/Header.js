import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1 style={headingStyle}>{title}</h1>
      {location.pathname === '/tracker' && (<Button color={showAddTask ? 'green' : 'red'} text={showAddTask ? 'Add' : 'Close'} onClick={onAdd} />)}
    </header>
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

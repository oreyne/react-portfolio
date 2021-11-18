import Button from './Button'

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className='header'>
      <h1 style={headingStyle}>{title}</h1>
      <Button color={showAddTask ? 'green' : 'red'} text={showAddTask ? 'Add' : 'Close'} onClick={onAdd} />
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

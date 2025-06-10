import './App.css'

const Card = ({ title }) => {
  return (
    <div style={{
      margin: '10px',
      padding: '20px',
      minHeight: '100px',
      borderRadius: '10px',
      backgroundColor: '#31363f',
      border: '1px solid #4b5d62'
    }}>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div className='card-container'>
      <Card title='Card 1' />
      <Card title='Card 2' />
      <Card title='Card 3' />
    </div>
  )
}

export default App // This is a simple React component that renders a list of cards.
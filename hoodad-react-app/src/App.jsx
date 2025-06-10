import './App.css'

const Card = ({ title }) => {
  return (
    <div>
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
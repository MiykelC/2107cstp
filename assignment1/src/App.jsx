
import './App.css'
import Card from './components/card'
import Data from './Data/assignmentData.json'
import Header from './components/header/header'

function App() {

console.log(Data[0].data)
const Users = Data[0].data
console.log(Users)

  return (
    
   <>
   <Header/>
   
   {Users.map(users =>
    <div className="card-con2" key={users.id}>
      <Card {...users}/>
    </div>
    )}
   </>
  )
}

export default App

import './App.css'
import { ChatBox } from './components/ChatBox'
import { Header } from './components/UI/Header'

function App() {
  return (
    <div id="main" className="bg-grey-100 h-screen">
      <Header />
      <div className='flex flex-col flex-wrap m-1 justify-items-center content-center h-full w-full'>
        <ChatBox />
      </div>
    </div>
  )
}

export default App

import { ContentMain } from "./components/ContentMain"
import { Header } from "./components/Header"


function App() {

  return (
    <main className="w-screen flex flex-col items-center gap-20 h-screen">
      <Header/>
      <ContentMain/>
    </main>
  )
}

export default App

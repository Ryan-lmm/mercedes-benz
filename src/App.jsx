import Navbar from './components/Navbar'
import Banner from './components/Banner'

const App = () => (
    <div className={`w-full bg-primary`}>
      <div>
        <Navbar/>
      </div>
      <div className={`w-full h-full bg-primary`}>
        <Banner/>
      </div>
    </div>
)


export default App
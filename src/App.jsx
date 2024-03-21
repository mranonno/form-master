import './App.css'
// import HooksForm from './Components/HooksForm'
import ReUsableForm from './Components/ReUsableForm'
// import RefForm from './Components/RefForm'
// import SimpleForm from './Components/SimpleForm'
// import StatefulForm from './Components/StatefulForm'

function App() {
  return (
    <>
      <h1 className='text-blue-500'>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HooksForm></HooksForm> */}
      <ReUsableForm formTitle={'Sign Up'} submitBtnText={'Sign Up Now'}>
        <div>
          <h3> props name must be children</h3>
        </div>
      </ReUsableForm>
      <ReUsableForm formTitle={'Sign In'} submitBtnText={'Sign In Now'}></ReUsableForm>
    </>
  )
}

export default App

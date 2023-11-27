import './App.css';
import Page1 from './Page1/Page1.js';
import Page2 from './Page2/Page2.js';
function App({data}) {
  console.log(data, "in app")
  return (
    <div className="App">
      <Page1 />
      <div className='border-line'></div>
      <Page2 data={data}/>
    </div>
  );
}

export default App;

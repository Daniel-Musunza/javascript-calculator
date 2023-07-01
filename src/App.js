import './App.css';
import { useEffect , useState} from 'react';

function App() {
   const [activeKey, setActiveKey] =useState('');
    useEffect(() => {
      document.addEventListener('keydown', (event) => {
        addValue(event.key);
      })
    }, []);
    const buttons = [
    {
      name: "one",
      text: "1",
    },
    {
      name: "two",
      text: "2",
    },
    {
      name: "three",
      text: "3",
    },
    {
      name: "add",
       text: "+" 
     },
    {
      name: "four",
      text: "4",
    },
    {
      name: "five",
      text: "5",
    },
    {
      name: "six",
      text: "6",
    },
      {
        name: "subtract",
        text: "-",
      },
    {
      name: "seven",
      text: "7",
    },
    {
      name: "eight",
      text: "8",
    },
    {
      name: "nine",
      text: "9",
    },
      {
        name: "divide",
        text: "/",
      },
      {
        name: "decimal",
        text: ".",
      },
    {
      name: "zero",
      text: "0",
    },
   
      {
        name: "equals",
        text: "="
      },
      {
        name: "multiply",
        text: "*"
      },
      {
        name: "clear",
        text: "AC"
      },
  ];
    function addValue(selector){
    // const value = document.getElementById(selector);
    // value.
    setActiveKey(selector);
    }
  return (
    <div className="App">
      <header className="App-header" id="my-calculator" >
        <h2>Javascript Calculator</h2>
       <div className="preview" id="preview">
         <div className="results"></div>
          <div className="input" id="display">{activeKey}</div>
       </div>
        <div className='buttons'>
          {buttons.map((button) => (
            <div onClick={() => {addValue(button.text)}} className='button' id={button.name}>
              {button.text}
            </div>
          ))}
       </div>
      </header>
    </div>
  );
}

export default App;

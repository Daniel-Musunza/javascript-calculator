import './App.css';
import { useEffect , useState} from 'react';

function App() {
   const [input, setinput] =useState('');
   const [result, setResult] =useState('');
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
  ];
  function addValue(selector) {
    if (selector === "=") {
      try {
        let result = input.replace(/[^-()\d./*+]/g, '');
        result = result.replace(/([*/+])-+/g, "$1"); // Remove multiple consecutive negative signs
        result = result.replace(/([*/+])-([*/+])/g, "$2"); // Remove consecutive operators, excluding the negative sign
        result = eval(result);
        result = parseFloat(result.toFixed(4)); // Rounding to 4 decimal places
        setResult(result);
        setinput(result.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (selector === "AC") {
      setinput("");
      setResult("");
    } else {
      if (selector === "0" && input === "0") {
        return;
      } else if (selector === "." && input.includes(".")) {
        const lastNumber = input.split(/[-+*/]/).pop();
        if (lastNumber.includes(".")) {
          return;
        }
      
      } else if (/[+*/-]$/.test(input) && /[-+*/]/.test(selector)) {
        // Remove all consecutive operators except for the negative sign
        const prevInput = input.replace(/([*/+])-+/g, '$1');
        setinput(prevInput);
      
      } else if (/[+/*-]$/.test(input) && selector === "-") {
        setinput((prevInput) => prevInput + selector);
      }
      setinput((prevInput) => prevInput + selector);
    }
  };
  
  
   
  return (
    <div className="App">
      <header className="App-header" id="my-calculator" >
        <h2>Javascript Calculator</h2>
       <div className="preview" id="preview">
         <div className="results">{result || "0"}</div>
         <div className="input" id="display">{input || "0"}</div>
       </div>
       <div onClick={() => {addValue("AC")}} className='clear-button' id="clear">
             AC
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

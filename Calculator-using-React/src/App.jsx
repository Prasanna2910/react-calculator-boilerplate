import React from 'react';

function App() {
  const [allBtnClicked, setallBtnClicked] = useState('');
  const handleclick = (event) => {
    console.log(event.target.value);
    let strBtn = event.target.value;
    let newSettingString = allBtnClicked + strBtn;

    let symbols = '+-/*.';
    for (let i = 0; i < newSettingString.length; i++) {
      if (
        symbols.includes(newSettingString[i]) &&
        symbols.includes(newSettingString[i + 1])
      ) {
        newSettingString = newSettingString.slice(0, -1);
        alert('Two symbols cannot be together');
      }
    }
    let exampleNum = newSettingString;
    let numString = '123456789';
    for (elt i = 0;i<exampleNum.lenght;i++){
      if(!symbols.includes(exampleNum[i])&&!symbols.includes(exampleNum[i+1])){
        
      }
    }
  };
  return (
    <div>
      <div>
        <button value="AC" onClick={handleclick}>
          AC
        </button>
        <button value="DEL" onClick={handleclick}>
          DEL
        </button>
        <button value="1" onClick={handleclick}>
          1
        </button>
        <button value="2" onClick={handleclick}>
          2
        </button>
        <button value="3" onClick={handleclick}>
          3
        </button>
        <button value="4" onClick={handleclick}>
          4
        </button>
        <button value="5" onClick={handleclick}>
          5
        </button>
        <button value="6" onClick={handleclick}>
          6
        </button>
        <button value="7" onClick={handleclick}>
          7
        </button>
        <button value="8" onClick={handleclick}>
          8
        </button>
        <button value="9" onClick={handleclick}>
          9
        </button>
        <button value="0" onClick={handleclick}>
          0
        </button>
        <button value="+" onClick={handleclick}>
          +
        </button>
        <button value="-" onClick={handleclick}>
          -
        </button>
        <button value="*" onClick={handleclick}>
          *
        </button>
        <button value="/" onClick={handleclick}>
          /
        </button>
        <button value="." onClick={handleclick}>
          .
        </button>
        <button value="=" onClick={handleclick}>
          =
        </button>
      </div>
    </div>
  );
}
export default App;

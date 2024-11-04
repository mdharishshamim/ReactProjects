import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = 
    "ABCDEFGHIJKLNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+"
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str[char] ;
      }
      setPassword(pass);
  },[length, numberAllowed, charAllowed, setPassword])

  return (
      <>
      <div className="w-full flex max-w-md mx-auto shadow-md rounded-lg
      px-4 my-3 text-orange-500 bg-gray-700 h-full">
      <div className=" flex flex-shadow rounded-lg overflow-hidden mb-4">  
          <input 
          type="text"
          value={password} 
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly/>
          <button
          className="outline-none bg-blue-700 text-white
          px-3 py=0.5 shrink-0">
            copy
          </button>
        </div>
      </div>
      </>

)
}
export default App;
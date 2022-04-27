import {useState} from 'react'



function Anagram()
{
    const [value, setValue] = useState('');

    // const onChange = e =>{
    //     setValue(e.target.value)
    //   }
   

function gram(s){

  if(s.toLowerCase().split('').reverse().join('')===s.toLowerCase()){return 'yes'}else{
    return 'no'
  }
    
  
}
return (
<div>
    <p>1. Написать код, который определяет является ли переданное слово анаграммой.</p>
    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>        

    <p>anagram:{gram(value)}</p>        

    </div>
)

}

export default Anagram

import {useState} from 'react'



function IdendLetters()
{
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

   

function ident(str1, str2){
    
        const letters = str1.split('');
        return [...new Set(letters.filter(s => str2.includes(s)))].length;
    
  }
    
  

return (
<div>
    <p>2. Написать код, определяющий количество одинаковых букв в двух словах.</p>
    <input type="text" value={value1} onChange={(e)=>setValue1(e.target.value)}/>        
    <input type="text" value={value2} onChange={(e)=>setValue2(e.target.value)}/>        
    <p>ident: {ident(value1, value2)}</p>        

    </div>
)

}

export default IdendLetters

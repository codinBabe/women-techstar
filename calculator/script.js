const output = document.querySelector('section.output');
const input = document.querySelector('section.input')
output.innerHTML = '0';

const inputText = ['+','-','x','/',1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', 'C', '='];

function displayInputText(){
    inputText.forEach((val)=>{
        const text = document.createElement('button');
        text.innerHTML = val
        text.className = val;
        input.appendChild(text);
        text.addEventListener('click',()=> {
            if (val == 'C' || val == '='){
                ;
            }else{
                output.innerHTML = val
            }
        })
    });
}
displayInputText();


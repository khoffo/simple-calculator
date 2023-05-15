let buttons= document.querySelectorAll('.get');
let display=document.getElementById('display')

for(let btn of buttons){
    btn.addEventListener('click',()=>{

        switch (btn.innerText) {
            // case '7':
            //     display.value +="gghfct";
            //     break;
            // case '2':
            //     display.value += btn.innerText;
                // break;
                case 'AC':
                    display.value = '';
                    break;
                    case 'DE':
                     (display.value)
                       display.value = display.value.slice(0, -1);
                       break;
                       case '=':
                       try{
                        display.value = eval(display.value);
                       } catch {
                        display.value = 'Error!';
                       }
                       break;
            default:
                display.value += btn.innerText;
                break;
        }

    
    })
}

let plsBtn = document.getElementsByClassName("plsBtn")[0];
let checklist = document.getElementsByClassName("checklist")[0];
const testtt = document.getElementsByClassName("left")

function addCheck() {
    checklist.innerHTML = "fuck!"
}

const tempArray = ["1", "2", "&nbsp", "4", "5", "&nbsp", "&nbsp", "test5", "test4", "test3", "test2", "test1"]

// for (let i = 0; i < tempArray.length; i++) {
//     console.log([i].innerHTML);
//     document.querySelectorAll("#amBox div")[i].innerHTML=tempArray[i];
// }  

function showSchedule()
{
    const pmBox = document.getElementsByClassName('pmBox');

    const removedamBox=document.getElementById('amBox');
    removedamBox.remove();
    const leftBox = document.getElementsByClassName('leftBox');
    const amBox = document.createElement('div'); 
    amBox.setAttribute("id" , "amBox");
    leftBox[0].appendChild(amBox)

    for(i=0;i<12;i++){
    const newTodo = document.createElement('div'); 
    
    newTodo.innerHTML = 
          `<input type='checkbox' name='dd' value='dd' style='margin:6px;'/><p>`+i+`~</p><br><br>     `;

    document.getElementById(`amBox`).appendChild(newTodo);
    }


    const allBox = Array.from(amBox).concat(Array.from(pmBox));
    Array.from(allBox).forEach((element) => {
        if(true){
             
            element.style.visibility = 'visible';
            // for(var i=1; i<=12; i++){
            //     if(document.getElementById("1a").innerHTML !== "")
            //         document.getElementById("1a").innerHTML = "you 01a do"
            //     else
            //         console.log("test")
            // }
            
        }else{
            con.style.visibility = 'hidden';
        }
    });
}

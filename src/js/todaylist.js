let plsBtn = document.getElementsByClassName("plsBtn")[0];
let checklist = document.getElementsByClassName("checklist")[0];
const testtt = document.getElementsByClassName("left")

function addCheck() {
    checklist.innerHTML = "fuck!"
}

const tempArray = ["test1", "test3", "test5"]

for (let i = 0; i < tempArray.length; i++) {
    document.getElementById(tempArray[i]).innerHTML=tempArray[i];
}  

function showSchedule()
{
    const con = document.getElementsByClassName('pmBox');
    Array.from(con).forEach((element, index) => {
        if(true){
            console.log(element)
            // element.style.visibility = 'visible';
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

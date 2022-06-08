let plsBtn = document.getElementsByClassName("plsBtn")[0];
let checklist = document.getElementsByClassName("checklist")[0];

function addCheck() {
    checklist.innerHTML = "fuck!"
}

const tempArray = ["test12", "test11", "test10", "test9", "test8", "test7", "test6", "test5", "test4", "test3", "test2", "test1"]

for (let i = 0; i < tempArray.length; i++) {
    document.querySelectorAll("#amBox div")[i].innerHTML=tempArray[i];
}  

function showSchedule()
{
    const pmBox = document.getElementsByClassName('pmBox');
    const amBox = document.getElementsByClassName('amBox');
    const allBox = Array.from(amBox).concat(Array.from(pmBox));
    Array.from(allBox).forEach((element) => {
        if(true){
            console.log(element)
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

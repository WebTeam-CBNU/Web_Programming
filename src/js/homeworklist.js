

//체크리스트 만드는 함수
function createHomework(subjectId) {
    const newHomework = document.createElement('div'); 

    let homeworkIndex = document.querySelectorAll(`#${subjectId} .homework`)
    let fuck = document.getElementsByClassName("add-homework")[0]
    const homeworkNum='homework'+(homeworkIndex.length+1)
    fuck.innerHTML = homeworkNum

    newHomework.setAttribute("class", "homework");
    
    newHomework.innerHTML = 
          `<input type='checkbox' name='${subjectId}' value='${homeworkNum}' style='margin:6px;'/><p>새로운 과제~</p>`;

    document.getElementById(`${subjectId}`).appendChild(newHomework);
  } 

  function createSubject() {

    const deletedSubject = document.getElementById('subject-plus');
    deletedSubject.remove();


    const newSubject = document.createElement('div'); 

    let SubjectIndex = document.querySelectorAll(`#subject-list .subject-block`)
    const subjectNum='subject'+(SubjectIndex.length+1)

    newSubject.setAttribute("class", "subject-block");
    newSubject.innerHTML = `
    <div class="subject-title">과목 이름</div>
    <div id='${subjectNum}'>
    </div>
    <div class="add-homework" onclick="createHomework('${subjectNum}')">+</div>`;          
    document.getElementById("subject-list").appendChild(newSubject);


    const createBlock = document.createElement('div'); 
    createBlock.setAttribute("id", "subject-plus");
    createBlock.setAttribute("class", "subject-block");
    createBlock.innerHTML = `<div class='subject-plus' onclick='createSubject()'>+</div>`;          
    document.getElementById("subject-list").appendChild(createBlock);
  } 
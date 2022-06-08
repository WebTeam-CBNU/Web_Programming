

//체크리스트 만드는 함수
function createHomework() {
    const newHomework = document.createElement('div'); 

    const subjectArray = ["subject1, subject2"];

    // test 줄입니다
    let testElement = document.querySelectorAll(`#subject1 .homework`)
    let fuck = document.getElementsByClassName("add-homework")[0]
    fuck.innerHTML = testElement.length

    newHomework.setAttribute("class", "homework");
    // 1. 몇번째 child인지 알 수 있는 방법 찾기
    // 2. 몇번째 차일드인지 저장하는 변수 구현
    // 3. 그 변수를 밑에 subjectArray에 적용

    newHomework.innerHTML =
          `<input type='checkbox' name='${subjectArray[0]}' value='homework1' style='margin:6px;'/><p>새로운 과제~</p>`;
    // 4. <body>에 1에서 만든 <div> element 붙이기
    document.getElementById("subject1").appendChild(newHomework);
  } 
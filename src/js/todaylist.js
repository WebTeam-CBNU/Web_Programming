function makeTable() {
  var computer_id = 1;
  td_html = "<input type='checkbox' name='radios[]'  class='radios' id='radio" + computer_id + "'>";

  const weekly_date = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT','nothing']


  for (var i = 0; i < 3; i++) {
      var table = document.createElement("table");
      document.getElementsByClassName("seat-table")[i].appendChild(table);
      for (var j = 0; j < 4; j++) {
          var tr = document.createElement("tr");
          table.appendChild(tr);

          var td1 = document.createElement("td");
          td1.innerHTML = "<input type='checkbox' name='radios[]' value='123' class='radios' id='radio" + computer_id + "'><label for='radio" + computer_id + "'> " + `${weekly_date[j]}</label>`; //td_html
          computer_id += 1;

          var td2 = document.createElement("td");
          td2.innerHTML = "<input type='checkbox' name='radios[]' value='123' class='radios' id='radio" + computer_id + "'><label for='radio" + computer_id + "'> " + `${weekly_date[j+4]}</label>`; //td_html
          computer_id += 1;

          tr.appendChild(td1);
          tr.appendChild(td2);
      }
  }

  // �����ϱ� ��ư�� �̺�Ʈ�ֱ�
  let book_btn = document.getElementById("book");
  book_btn.addEventListener('click', function(){
      let checked=[];
      let checked_message="";
      let radios=document.querySelectorAll(".radios");
      for(let i=0; i<radios.length; i++){
          if(radios[i].checked){
              checked.push(radios[i]);
              checked_message += (i+1)+" ";
          }
      }
      //���õ� �� �ֳ� ���� �˻�
      if(checked.length!=0){  //���� �����ߴ�
          alert(checked_message+"���õ�")
      } else{
          alert("�ƹ��͵� ����");
      }
  })
}

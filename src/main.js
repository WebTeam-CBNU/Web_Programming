function darkMode() {
    document.body.classList.toggle("body_dark_mode");
    document.getElementById('box').classList.toggle("box_dark_mode");

    const button_default_list = document.getElementsByClassName('button_default');
    const button_default_list_length = button_default_list.length;
    for(let i = 0; i < button_default_list_length; i++)  {
        button_default_list[i].classList.toggle("button_default_dark_mode");
    }

    const button_clicked_list = document.getElementsByClassName('button_clicked');
    const button_clicked_list_length = button_clicked_list.length;
    for(let i = 0; i < button_clicked_list_length; i++)  {
        button_clicked_list[i].classList.toggle("button_clicked_dark_mode");
    }

    const alert_box_list = document.getElementsByClassName('alert_box');
    const alert_box_list_length = alert_box_list.length;
    for(let i = 0; i < alert_box_list_length; i++)  {
        alert_box_list[i].classList.toggle("alert_box_dark_mode");
    }
}

function mouseDown(id) {
    if(document.getElementById(id).classList.contains("button_default_dark_mode")){
        document.getElementById(id).classList.remove("button_default_dark_mode");
        document.getElementById(id).classList.add("button_clicked_dark_mode");
    }
    else if(document.getElementById(id).classList.contains("button_default")){
        document.getElementById(id).classList.remove("button_default");
        document.getElementById(id).classList.add("button_clicked");
    }
  }
  
  
  function mouseUp(id) {
    if(document.getElementById(id).classList.contains("button_clicked_dark_mode")){
        document.getElementById(id).classList.remove("button_clicked_dark_mode");
        document.getElementById(id).classList.add("button_default_dark_mode");
    }
    else if(document.getElementById(id).classList.contains("button_clicked")){
        document.getElementById(id).classList.remove("button_clicked");
        document.getElementById(id).classList.add("button_default");
    }
  }

  
  
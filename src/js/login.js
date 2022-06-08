const favDialog = document.getElementById('favDialog');
const loginBtn = document.getElementById('loginbutton')

if ( typeof favDialog.showModal !== 'function' ) {
    favDialog.hidden = true;
    /* a fallback script to allow this dialog/form to function
       for legacy browsers that do not support <dialog>
       could be provided here.
    */
  }

  loginBtn.addEventListener('click', ()=> {
    if (typeof favDialog.showModal === "function") {
      favDialog.showModal();
      // Cancel button
      // Confirm button
    } else {

    }
    console.log("fuck")
  })

  favDialog.addEventListener('close', function onClose() {
});
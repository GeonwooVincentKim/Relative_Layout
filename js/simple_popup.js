console.log("Access to Simple Popup js page")

function Popup(){
    window.open(
        './js/simple_popup.js', "", 
        'width=250px, height=300px, left=50%, top=50%'
        .concat(' toolbar=0, status=yes, menubars=0,')
        .concat('scrollbars=0, resizable=0, location=0, directories=0')
    )    
}

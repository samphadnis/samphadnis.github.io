function ShowHideDiv() {
    
    var option = document.getElementById('navigate-summary');

    var checked_summary = document.querySelector('input[name = "summary"]:checked');

    if(checked_summary != null) {

        document.getElementById('states').style.visibility="hidden";
    } else if (document.querySelector('input[name = "states"]:checked') != null){
        
        document.getElementById('summary').style.visibility="hidden";
        document.getElementById('states').style.visibility="visible";
    }

}
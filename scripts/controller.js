function ShowHideDiv() {

    console.log("ShowHideDiv");
    
    var option = document.getElementById('navigate-summary');

    var checked_summary = document.querySelector('input[name = "summary"]:checked');

    console.log("checked_summary");

    if(checked_summary != null) {

        document.getElementById('states').style.visibility="hidden";

        console.log("checked_summary not null");
    } else if (document.querySelector('input[name = "states"]:checked') != null){
        
        document.getElementById('summary').style.visibility="hidden";
        document.getElementById('states').style.visibility="visible";

        console.log("checked_summary null");
    }

}
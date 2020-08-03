function ShowHideDiv() {

    console.log("ShowHideDiv");
    
    var option = document.getElementById('navigate-summary');

    var checked_summary = document.querySelector('input[id = "navigate-summary"]:checked');

    console.log("checked_summary");

    if(checked_summary != null) {

        document.getElementById('states').style.display="none";
        document.getElementById('comparison').style.display="none";
        document.getElementById('summary').style.display="block";

        console.log("checked_summary not null");
    } else if (document.querySelector('input[id = "navigate-states"]:checked') != null){
        
        document.getElementById('summary').style.display="none";
        document.getElementById('comparison').style.display="none";
        document.getElementById('states').style.display="block";

        console.log("checked_summary null");
    }  else if (document.querySelector('input[id = "navigate-comparison"]:checked') != null){
        
        document.getElementById('summary').style.display="none";
        document.getElementById('states').style.display="none";
        document.getElementById('comparison').style.display="block";

        loadComparisonData();

        console.log("checked_summary null");
    }

}
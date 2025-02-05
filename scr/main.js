document.addEventListener ("DOMContentLoaded",function(){
     document.getElementById("Perfectpuppyform").addEventListener('submit',function(event)//event listener to listen to the submit form
     {event.preventDefault()
     userinput()}
    )
})
function userinput(){
    const dogtype = document.getElementById( "dogtype").value;
    const Areatype = document.getElementById("Areatype").value;
    const timetype = document.getElementById("timetype").value;
    const plantype = document.getElementById("plantype").value;

    console.log(dogtype,Areatype,timetype,plantype, )
    if(!dogtype || ! Areatype || !timetype || plantype){
        alert("Please fill out details ")
        return
    }
}


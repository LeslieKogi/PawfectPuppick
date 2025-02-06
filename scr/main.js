document.addEventListener ("DOMContentLoaded",function(){
     document.getElementById("Perfectpuppyform").addEventListener('submit',function(event)//event listener to listen to the submit form
     {event.preventDefault()
     userinput()}
    )
})
function userinput(){
    const dogtype = document.getElementById( "dogtype").value;
    const areatype = document.getElementById("areatype").value;
    const timetype = document.getElementById("timetype").value;
    const plantype = document.getElementById("plantype").value;

    console.log(dogtype,areatype,timetype,plantype, )
    if(!dogtype || ! areatype || !timetype || !plantype){
        alert("Please fill out details ") //ensures the form is filled
        return
    }

//Determination of breeds 

let possibleBreeds=[];

//based on gaurd/house dog preference

if(dogtype==="Gaurd dog"){
    possibleBreeds = ["German Shepherd", "Doberman", "Rottweiler", "Great Dane"];
} else if (dogtype==="house dog")
{
    possibleBreeds = ["Labrador Retriever", "Beagle", "Poodle", "Pug"];
}

//based on area type
possibleBreeds=possibleBreeds.filter(breed=>{
    if(areatype=="hot"){
        return ["Rottweiler", "Doberman", "Labrador Retriever", "Beagle"].includes(breed);

    }else if(Areatype=="cold"){
        return ["German Shepherd", "Great Dane", "Poodle", "Pug"].includes(breed);
    }
    return false;
});

// based on frequennt vet visits
if (timetype==="No"){
    possibleBreeds = possibleBreeds.filter(breed => !["Poodle", "Great Dane"].includes(breed));
}

//based on exercise needs
if(plantype==="No"){
    possibleBreeds=possibleBreeds.filter(breed=>!["German Shepherd","Labrador Retriever"].includes(breed));
}
//Stores the breeds in local storage

if(possibleBreeds.length>0){
    localStorage.setItem('idealBreeds',possibleBreeds.join(","))

    alert("Your ideal dog breed(s): " + possibleBreeds.join(","));
} else {
    alert("No matches. Try adjusting preferences.");
}
}

addSeasonField()
addRoundField()
addSubmitButton()

function addSeasonField(){
    input = document.createElement('input');
    input.placeholder="Enter Season";
    input.name="season_year";
    input.classList.add("form-control");
    document.body.appendChild(input);
}

function addRoundField(){
     input = document.createElement('input');
     input.placeholder="Enter Round";
    input.name="round_number";
     input.classList.add("form-control");
    document.body.appendChild(input);
}

function addSubmitButton(){
    button = document.createElement('button');
    button.innerText = "Submit"
    button.classList.add('form-control', 'btn', 'btn-primary');
    button.addEventListener("click", (event)=>handleSubmit(event))
    document.body.appendChild(button);

}

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("Form was submitted")
    console.log(document.getElementsByName("round_number").value, ("season_year").value)
}

function createRacerTable(){
    table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    document.body.appendChild(table)

    thead.appendChild(thead);

    tr = document.createElement('tr');
    thread.appendChild(tr)
}

// async function doAPICall(roundSeason){
//     let result = await axiosCallWithAsyncAwait.get('url': 'http://ergast.com/api/f1/2008/5/driverstandings.json')
// }
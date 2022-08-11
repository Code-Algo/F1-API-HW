racerField()
submit()
racerTable()

function racerField(){
    document.getElementsByName('season')
    document.getElementsByName('round')
    input.id="1"
    input.id="2"
}

function submit(){
    document.getElementByTag('button');
    button.addEventListener('click', (event)=>handleSubmit(event))
}

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("Form Was Submitted")
    const season = document.getElementsByName("season")[0].value
    console.log(season)
    doAPICall(season)
    const round = document.getElementsByName("round")[0].value
    console.log(round)

}


async function doAPICall(season, round){
    let result = await axios.get(`http://ergast.com/api/f1/${season}/${round}/driverstandings.json`)
    console.log(result)
    result=result.data

    let tbody = document.getElementsByTagName('tbody')[0]

}
const countryInput = document.getElementById('country_input');
const stateInput = document.getElementById('state_input');
const searchButton = document.getElementById('search_button');
const universityInfo = document.getElementById('university_info');
const order = document.getElementById('order');
init();

function init(){
    searchButton.addEventListener('click', getUniversities);
}

async function getUniversities(){
    const name = countryInput.value;
    const streamResponse = await fetch(`http://universities.hipolabs.com/search?country=${name}`);
    const textBody = await streamResponse.text();
    const jsonData = JSON.parse(textBody);
    console.log(jsonData.length);
    var state = stateInput.value;
    let stname =state.charAt(0).toUpperCase() + state.slice(1);
    console.log(state);
    let html="";
    if(state.length>2){
        for(let i=0;i<jsonData.length;i++){
            let stateName = jsonData[i]['state-province'];
            let  universityName = jsonData[i]['name'];
            let universitySite = jsonData[i]['web_pages'];
            if(stname===stateName){
                html+=`<ol id='order'>
            <li><b>State name:</b> ${stateName}</li>
            <li><b>University name:</b> ${universityName}</li>
            <li><b>University site:</b> ${universitySite}</li>
            </ol>`
            }
        }
    }
    else{
        for(let i=0;i<jsonData.length;i++){
            let stateName = jsonData[i]['state-province'];
            let  universityName = jsonData[i]['name'];
            let universitySite = jsonData[i]['web_pages'];
            html+=`<ol id='order'>
            <li><b>State name:</b> ${stateName}</li>
            <li><b>University name:</b> ${universityName}</li>
            <li><b>University site:</b> ${universitySite}</li>
        </ol>`
        }
    }
    universityInfo.innerHTML=html;
}
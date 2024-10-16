window.addEventListener('DOMContentLoaded', (event =>{
    getVisitCount();
}))
const functionAPIUrl = "https://rcoresume.azurewebsites.net/api/GetResumeCount?code=bZsy3sg5MhfTJtDBVLyDaAOU630W0qsP2ZjqUIQ_SPvVAzFut_Gt3g%3D%3D"
const localfunctionAPI = "http://localhost:7071/api/GetResumeCount";

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPIUrl).then(Response => {
        return Response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("rcoresumeCounter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}

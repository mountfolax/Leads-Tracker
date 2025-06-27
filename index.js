let myLeads = []
let input = document.getElementById("input")
let saveInput = document.getElementById("save-input");
let saveTab = document.getElementById("save-tab")
let deletes = document.getElementById("delete")
let ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


 if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage;
   render(myLeads);
 }

saveInput.addEventListener("click", function(){
    myLeads.push(input.value);
    input.value = "";
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    console.log(myLeads)
    render(myLeads);
})


saveTab.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads);
    });
})

deletes.addEventListener("dblclick", function (){
    //alert("i am back")
     localStorage.clear();
     myLeads = []
     ulEl.innerHTML = ""
})

function render(leads) {
    let listItem = "";
    for(let i = 0; i < myLeads.length; i++){
        listItem += `<li><a href="${leads[i]}" target="_blank">${leads[i]}</a></li>`;
    }

    ulEl.innerHTML= listItem
}



// console.log(myLeads)



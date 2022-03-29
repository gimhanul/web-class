const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

let myLeads = [];

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

inputBtn.addEventListener("click", function() {
    const text = inputEl.value;
    myLeads.push(text);
    render(myLeads);
    inputEl.value = "";
    saveMyLeadsToLocalStorage(myLeads);
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        saveMyLeadsToLocalStorage(myLeads);
        render(myLeads);
    });
})

function render(leads) {
    let listItems = "";
    ulEl.innerHTML = "";

    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">${leads[i]}</a>
            </li>
        `
        ulEl.innerHTML = listItems;
    }
}

function saveMyLeadsToLocalStorage(leads) {
    localStorage.setItem("myLeads", JSON.stringify(leads));
}
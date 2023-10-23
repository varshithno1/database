const listContainer = document.getElementById("main-list");

for(i = 0; i < 5; i++){
    var listElement = document.createElement('li');
    listElement.innerText = `O task${i+1}`;
    listContainer.append(listElement);
}
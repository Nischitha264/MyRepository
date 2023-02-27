const todo=document.getElementById("todo");
const add=document.getElementById("addButton")
const itemsList=document.getElementById("TODO-items");
const TODOsArray= localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[];




console.log(TODOsArray);

add.addEventListener("click", () => {
    const item= document.querySelector("#item");
    createItem(item);
});

function createItem(item){
    TODOsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(TODOsArray));
    location.reload();
    
}


function displayItem(){
    let items= "";
    for(let index=0; index<TODOsArray.length ; index++){
       items +=     `<div class="item">
                        <div class="inputController">
                            <textarea disabled> ${TODOsArray[index]} </textarea>
                            <div class="editor">
                            <i class="fa-solid fa-trash deleteButton"></i>
                            <i class="fa-solid fa-pen-to-square editButton"></i>
                            <i class="fa-solid fa-check checkButton"></i>
                            </div>
                        </div>
                        <div class="update">
                            <i class="fa-solid fa-floppy-disk save"></i>
                            <i class="fa-solid fa-ban cancel"></i>

                        </div>
                    </div>`

    }

    document.querySelector(".todo-items").innerHTML = items;

    deleteBtn();
    editBtn();
    saveBtn();
    cancleBtn();
    checkBtn()
}
   

function checkBtn(){
    
    let checkButton = document.querySelectorAll(".checkButton")
    checkButton.forEach((cb,index) => {
        cb.addEventListener("click" , () => {
            let input = document.querySelectorAll(".inputController textarea")
            checkitem(input[index])})
        
    })

    console.log(checkButton)

}

function checkitem(index){
    
    // let input = document.getElementsByName(TODOsArray[index]);
    let input = document.querySelector(".inputController textarea")
    console.log(input)
    input.style.color= "red";
    

}





function deleteBtn(){
    let deleteButton = document.querySelectorAll(".deleteButton")
    deleteButton.forEach((db,index) => {
        db.addEventListener("click", ()=>{deleteItem(index)})

        console.log("deleteButton")
        
    });
}


function editBtn(){
    let editButton = document.querySelectorAll(".editButton")
    let update = document.querySelectorAll(".update")
    let input = document.querySelectorAll(".inputController textarea")

    editButton.forEach((eb,index) => {
        eb.addEventListener("click", () => {
            update[index].style.display = "block";
            input[index].disabled= false;
            
        })
        console.log("editButton")
    })
}






function cancleBtn(){
    const cancelButton = document.querySelectorAll(".cancel")
    let update = document.querySelectorAll(".update")
    let input = document.querySelectorAll(".inputController textarea")

    cancelButton.forEach((cb, index)=> {
        cb.addEventListener("click", () =>{
            update[index].style.display = "none";
            input[index].disabled= true;
        })

    })

}

function saveBtn(){
    const saveButton = document.querySelectorAll(".save")
    const input = document.querySelectorAll(".inputController textarea")

    saveButton.forEach((sb, index) => {
        sb.addEventListener("click", () => {
            saveItem(input[index].value, index)
            console.log(saveButton)
        })
    })
}
function saveItem(text, index){
    TODOsArray[index]= text;
    localStorage.setItem("items", JSON.stringify(TODOsArray))
    location.reload()


}



function deleteItem(index){
    TODOsArray.splice(index,1)
    localStorage.setItem("items", JSON.stringify(TODOsArray));
    location.reload();
}







window.onload = function(){
    displayItem();
    
}









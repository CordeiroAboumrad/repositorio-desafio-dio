function add_task(text){
    insert_id = document.getElementById("insert_after")
    
    const div = document.createElement("div")
    div.id = text
    div.style.margin = "10px"
    div.style.width = "100%"
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.onclick = checkclick
    
    const item_text = document.createElement("label")
    item_text.id = `${text}_label`
    item_text.innerHTML = text
    item_text.style.width = "500px"
    item_text.style.padding = "10px"
    
    
    div.appendChild(checkbox)
    div.appendChild(item_text)
    
    insert_id.after(div)
}


function checkclick(event){
    if(this.checked == true){
        document.getElementById(this.parentNode.id + '_label').style.textDecoration = 'line-through'
    }else{
        document.getElementById(this.parentNode.id + '_label').style.textDecoration = 'none'
    }
    
}

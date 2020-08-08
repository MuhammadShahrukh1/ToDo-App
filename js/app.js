var list = document.getElementById('todo_item')
function addbtn(){
    var todo_item = document.getElementById('todo')
    var li = document.createElement('li')
    li.setAttribute('class','row')
    //li tag ban gaya

    // column k div bnana start first text ka div
    var divForText = document.createElement('div')
    divForText.setAttribute('class','col-sm-12 col-md-6')
    var p =document.createElement('p')
    p.setAttribute('class','text')
    var text = document.createTextNode(todo_item.value)
    p.appendChild(text)
    divForText.appendChild(p)
    //first div completed

    //now create a add button div
    var divForAdd = document.createElement('div')
    divForAdd.setAttribute('class','col-sm-6 col-md-3')
    var btnForAdd = document.createElement('button')
    btnForAdd.setAttribute('type','button')
    btnForAdd.setAttribute('class','btn btn-outline-primary w-100 libtn')
    btnForAdd.setAttribute('onclick','updateText(this)')
    var iForAdd = document.createElement('i')
    iForAdd.setAttribute('class','fas fa-edit')
    var addBtnText = document.createTextNode(' Edit')
    btnForAdd.appendChild(iForAdd)
    btnForAdd.appendChild(addBtnText)
    divForAdd.appendChild(btnForAdd)
    //Add button div created
    
    //Now start to create a delete button div
    var divForDlt = document.createElement('div')
    divForDlt.setAttribute('class','col-sm-6 col-md-3')
    var btnForDlt = document.createElement('button')
    btnForDlt.setAttribute('type','button')
    btnForDlt.setAttribute('class','btn btn-outline-danger w-100 libtn')
    btnForDlt.setAttribute('onclick','deleteli(this)')
    var iForDlt = document.createElement('i')
    iForDlt.setAttribute('class','fas fa-trash')
    var dltBtnText = document.createTextNode(' Delete')
    btnForDlt.appendChild(iForDlt)
    btnForDlt.appendChild(dltBtnText)
    divForDlt.appendChild(btnForDlt)
    // Delete button div created


    li.appendChild(divForText)
    li.appendChild(divForAdd)
    li.appendChild(divForDlt)
    list.appendChild(li)
    todo_item.value = ''
    todo_item.focus()
}
function clearall(){
    var ol = document.getElementById('todo_item')
    ol.innerHTML = ''
}
function deleteli(dltbtn){
    dltbtn.parentNode.parentNode.remove()
}

function updateText(editbtn){
    // console.log(editbtn.parentNode.parentNode.firstChild.firstChild.firstChild.nodeValue)
    var value = editbtn.parentNode.parentNode.firstChild.firstChild.firstChild
    var updatedValue = prompt("Update Value if You want", value.nodeValue)
    value.nodeValue = updatedValue
}
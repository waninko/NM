

function updateViewItem(){
    document.getElementById('hovedSide').innerHTML = '' ;
    document.getElementById('selectResult').innerHTML ='';
    let html = '';
    for(let i = 0; i < Equipments.Ability.length; i++){
        console.log(Equipments.Ability[i], " test")

    }
    // :<img src="${Equipments.file}
    
    html += `<div id="Equipments"`
    html +=`<div class="Equip">Item</div>`
    html +=`<div class="Equip">${Equipments.Ability}</div>`
           html +=`<div class="Equip"></div>`
           html +=`<div class="Equip">Item</div>`
           html +=`<div class="Equip">item</div>`
           html +=`<div class="Equip">item</div>`
    html += `</div>`;
    
    html+= `<button onclick ="runViews()">Save Equipment list</button>`
    
   



hovedSide.innerHTML = html;
    document.getElementById('hovedSide').innerHTML = html;
    
    // html= `<select onchange="selectEquipment(this.value)">` 
    
   
   
   
     }




//  makeDivs();/*send you back to main*/ 
// function selectEquipment(clickedEquipment) {
//     selectedEquipment = clickedEquipment;
    
//     }
   


//     function runViews() {
// MakeDropDown()
// selectNinja()
// makeDivs(){} 
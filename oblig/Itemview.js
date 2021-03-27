







function updateViewItem(){
    document.getElementById('hovedSide').innerHTML = '' ;
    document.getElementById('selectResult').innerHTML ='';
    let html = '';
    html += `<div id="Equipments"`
    html +=`<div class="Equip">Item</div>`
    html +=`<div class="Equip">${Object.keys(Equipment.Ability): ${Object.values(Equipment.Ability)[i]}}</div>`
           html +=`<div class="Equip"></div>`
           html +=`<div class="Equip">Item</div>`
           html +=`<div class="Equip">item</div>`
           html +=`<div class="Equip">item</div>`
    html += `</div>`;
    
    html+= `<button onclick ="runViews()">Save Equipment list</button>`
    
   








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
// makeDivs()
// }








function updateViewItem(){
    document.getElementById('hovedSide').innerHTML = '' ;
    document.getElementById('selectResult').innerHTML ='';
    let html = '';
//     function makeDivs(){
//        let html = ``;
//        //tenge opp stats utifra anvn
//        //mellomlagre id osv i hver sin - dollare ut i viewloop
//      for(let option of Ninjas){ //gir muligheten til og dra ut single string av en flere objektet arrey
//            if(option.NinjaName == selectedNinja){}

    
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
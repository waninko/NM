
    function makeDivs(){
        let html = ``;
        //tenge opp stats utifra anvn
        //mellomlagre id osv i hver sin - dollare ut i viewloop
        html += `<div id="bearDiv">`;
        for(let option of Ninjas){ //gir muligheten til og dra ut single string av en flere objektet arrey 
            if(option.NinjaName == selectedNinja){
                html += `<div Class=Cost>Cost</div>`
                html += `<div Class=chakra>Chakra: ${option.Chakra}</div>`
                html += `<div Class=quarter1>can be quartered?: </div>`
                html += `<div Class=NY>true or false</div>`
                html += `<div Class=quarter2>can be quartered?: </div>`
                html += `<div Class=YN>true or false</div>`
                html += `<div Class=qq>Stats+Used</div>`
                html += `<div Class=used> number used </div>`;
                
          html += `</div>`;
                html += `<div class=Statpoints-Point>Statspoint Used>`;
                html += `<div Class=N/A>N/A</div>`
                html += `<div Class=s02>in</div>`
                html += `<div Class=s03>in</div>`
                html += `<div Class=s04>in</div>`
                html += `<div Class=s05>in</div>`
                html += `<div Class=s06>in</div>`
                html += `<div Class=s07>in</div>`
                html += `<div Class=s08>in</div>`
                html += `<div Class=s09>in</div>`
                html += `<div Class=s10>in</div>`
                html += `<div Class=s11>in</div>`
                html += `<div Class=s12>in</div>`
                // html += `<div Class=s13>in</div>`
                // html += `<div Class=s14>in</div>`
                // html += `<div Class=s15>in</div>` additional stat puts
                // html += `<div Class=s16>in</div>`
                // html += `<div Class=s17>in</div>`
                // html += `<div Class=s18>in</div>`
                // html += `<div Class=s19>in</div>`
                // html += `<div Class=s20>in</div>`
                // html += `<div Class=s21>in</div>`
                // html += `<div Class=s22>in</div>`
            
          html += `</div>`;
               
                html += `<div id="selectResult">`;
                html += `<div Class=avrdmg>Avrage dmg :in</div>`
                html += `<div Class=D-R>Damage range :in</div>`
                html += `<div Class=avrdmgcritt>Avrage dmg on critt :in</div>`
                html += `<div Class=Dmgran>Dmg range :in</div>`
                html += `<div Class=low-dmg>low dmg in</div>`
                html += `<div Class=high-dmg>high dmg in</div>`
                html += `<div Class=avrcrit-dmg>avrage critt in</div>`
                html += `<div Class=dmg-rng-critt> dmg range critt in</div>`
                html += `<div Class=low-critt>low critt in</div>`
                html += `<div Class=high-critt>high critt inn</div>`
                

                html += `<div class=position>Position: ${option.Position}</div>`
                html += `<div class=seal>Seal: ${option.Seal}</div>`
                //loope ut stats
                let currentStat = ""; // mellomlagringsvar 
                for(stat in option.Stats){
                    //get key
                //     currentStat = stat; // - ta vare på "current stat" fra løkka
                //     html += `<div>${currentStat}: ${option.Stats[stat]}</div>`;
                // }                   //  name       stat value 
                // let currentGrowth = "";  
                currentStat = stat; 
                    html += `<div class="StatNames">${currentStat}: </div>`;
                }                 
               
            html+= `<div>Identifier ${option.Identifier}</div>`
            html+= `<div>NinjaName ${option.NinjaName}</div>`
            let currentAbility = "";
        //     for(Ability in option.Ability){
        //         currentAbility =Ability;
        //     html+= `<div>Ability ${option.Ability[Ability]}</div>`
        // }
         html+=`<div>fixed Chakra?: ${option.FixedChakra}</div>`
         
         html+=`<div> Forbidden?: ${option.Forbidden}</div>`
       
        
         html += `</div>`;
                
        html+=`<input type="text" id="LVL" /><br> <input class="button" type="button" onClick="multiplyBy()" Value="LVL" />`
          html+=`<div ID="rsesult"> </div>` 
        
         
          html += `</div>`;
        selectResult.innerHTML =  html;          
       
    }
    }

}
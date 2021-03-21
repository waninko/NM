
    function makeDivs(){
        let html = ``;
        //tenge opp stats utifra anvn
        //mellomlagre id osv i hver sin - dollare ut i viewloop
      for(let option of Ninjas){ //gir muligheten til og dra ut single string av en flere objektet arrey 
            if(option.NinjaName == selectedNinja){
                html += `<div Class=Cost>Cost</div>`
                html += `<div Class=chakra>${option.Chakra}</div>`
                html += `<div Class=quarter1>can be quartered?: </div>`
                html += `<div Class=NY> ${option.Forbidden}</div>` 
                html += `<div Class=quarter2>can be quartered?: </div>`
                html += `<div Class=YN>${option.FixedChakra}</div>`
                html += `<div Class=qq>Stats+Used</div>`
                html += `<div Class=used> number used </div>`
               
                
          html += `</div>`;
                html += `<div class=Statpoints-Point>Statspoint `;
                html += `<div Class=s01></div>`
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
                html += `<div Class=s13>in</div>`
                html += `<div Class=s14>in</div>`
                html += `<div Class=s15>in</div>` 
                html += `<div Class=s16>in</div>`
                html += `<div Class=s17>in</div>`
                html += `<div Class=s18>in</div>`
                html += `<div Class=s19>in</div>`
                html += `<div Class=s20>in</div>`
                // html += `<div Class=s21>in</div>`
                // html += `<div Class=s22>in</div>`
                html += `</div>`;
          html += `</div>`;
               
                // html += `<div id="selectResult">`;
                // html += `<div Class=avrdmg>Avrage dmg :in</div>`
                // html += `<div Class=D-R>Damage range :in</div>`
                // html += `<div Class=avrdmgcritt>Avrage dmg on critt :in</div>`
                // html += `<div Class=Dmgran>Dmg range :in</div>`
                // html += `<div Class=low-dmg>low dmg in</div>`
                // html += `<div Class=high-dmg>high dmg in</div>`
                // html += `<div Class=avrcrit-dmg>avrage critt in</div>`
                // html += `<div Class=dmg-rng-critt> dmg range critt in</div>`
                // html += `<div Class=low-critt>low critt in</div>`
                // html += `<div Class=high-critt>high critt inn</div>`
                

                html += `<div class=position>Position: ${option.Position}</div>`
                html += `<div class=seal>Seal: ${option.Seal}</div>`
                html += `</div>`;
                html += `<div id="txt">`;
                html += `<div class=The-Stats>STATS</div>`;
                html += `<div class=Tai>Taijutsu</div>`
                html += `<div class=Nin>Ninjutsu</div>`
                html += `<div class=Buki>Bukijutsu</div>`
                html += `<div class=Sta>Stamina</div>`
                html += `<div class=Ele>Elemental</div>`
                html += `<div class=Gen>Genjutsu</div>`
                html += `<div class=Atk>Attack</div>`
                html += `<div class=Strike>CriticalStrike</div>`
                html += `<div class=Hit>Critical Hit</div>`
                html += `<div class=roll>Reroll</div>`
                html += `<div class=Focus>Focus</div>`
                html += `<div class=Burst>Focus Burst</div>`
                html += `<div class=Range>Focus Range</div>`
                html += `<div class=Boost>Bukijutsu Boost</div>`
                html += `<div class=Rec>Bukijutsu Recovery</div>`
                html += `<div class=Act>Genjutsu Activation</div>`
                html += `<div class=Mastery>Genjutsu Mastery</div>`
                html += `<div class=Rech>Genjutsu Recharge</div>`
                html += `<div class=Endu>Endurance</div>`
                // html += `<div class=></div>`
                // html += `<div class=></div>`
                // html += `<div class=></div>`
                // html += `<div class=></div>`
                html += `</div>`;
                //loope ut stats
                let currentStat = ""; // mellomlagringsvar 
                for(stat in option.Stats){
                    //get key
                //     currentStat = stat; // - ta vare på "current stat" fra løkka
                //     html += `<div>${currentStat}: ${option.Stats[stat]}</div>`;
                // }                   //  name       stat value 
                // let currentGrowth = "";  
                currentStat = stat; 

                    html += `<div class="StatNames">${option.Stats[stat]} </div>`;
                  
                }      
                html += `</div>`;
                html += `</div>`;
                html += `</div>`;  
                html += `</div>`;  
                html += `<div id="Secondary">`;        
                let currentSecondaryStats = "";
            
                //for (Object in SecondaryStats){
                    
                    currentSecondaryStats = SecondaryStats;
                    
                html += `<div>${SecondaryStats.Attack}</div>`;
                html += `<div>${SecondaryStats.CriticalStrike}</div>`;
                html += `<div>${SecondaryStats.CriticalChance} </div>`;
                html += `<div>${SecondaryStats.Reroll}</div>`;
                html += `<div>${SecondaryStats.FocusBurst}</div>`;
                html += `<div>${SecondaryStats.FocusRange}</div>`;
                html += `<div>${SecondaryStats.BukijutsuBoost}</div>`;
                html += `<div>${SecondaryStats.BukijutsuRecovery}</div>`;  
                html += `<div>${SecondaryStats.GenjutsuActivation}</div>`;  
                html += `<div>${SecondaryStats.GenjutsuMastery}</div>`;  
                html += `<div> ${SecondaryStats.GenjutsuRecharge}</div>`;  
                html += `<div>${SecondaryStats.Endurance}</div>`;  
                html += `<div>${SecondaryStats.FatigueRecovery}</div>`;  
                html += `<div>${SecondaryStats. Offposition}</div>`;
                html += `<div>${SecondaryStats.TaijutsuImmunity}</div>`;
                html += `<div>${SecondaryStats.NinjutsuImmunity}</div>`;
                html += `<div>${SecondaryStats.BukijutsuImmunity}</div>`;
                html += `<div>${SecondaryStats.poison}</div>`;
                html += `<div>${SecondaryStats.Guard}</div>`;
                html += `<div>${SecondaryStats.Absorb}</div>`;
                html += `<div>${SecondaryStats.Death}</div>`;
                html += `<div>${SecondaryStats. BloodlineNullify}</div>`;
                html += `<div>${SecondaryStats.ItemFind}</div>`;
                html += `<div>${SecondaryStats.Gold}</div>`;
                html += `<div>${SecondaryStats.Experience}</div>`;
                html += `</div>`;  

                //}
            html+= `<div>Identifier ${option.Identifier}</div>`
            html+= `<div class= NinjaName > ${option.NinjaName}</div>`
            html+= `<div class=lvl>LVL</div>`
            let currentAbility = "";
        //     for(Ability in option.Ability){
        //         currentAbility =Ability;
        //     html+= `<div>Ability ${option.Ability[Ability]}</div>`
        // }
         html+=`<div>fixed Chakra?: ${option.FixedChakra}</div>`
         
        
       
        
         html += `</div>`;
                
        html+=`<input type="text" id="LVL" /><br> <input class="button" type="button" onClick="multiplyBy()" Value="LVL" />`
          html+=`<div ID="rsesult"> </div>` 
        
         
          html += `</div>`;
        selectResult.innerHTML =  html;          
       
    }
    }

}
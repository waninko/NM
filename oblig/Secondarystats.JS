
cons SecondaryStats=[
    
{
    "Critical Strike":25,//increase the power off critt . 1 turn only
    "Critical Chance":0, //chance to critt . 25% dmg hard cap at 100% =72% 

    
    "Reroll":0, // with 160 %increase chance to roll again 1st roll 100%RR nin range 1-100 random 
                  //2nd chance 60% . to roll 1-100  random always highest wins  

    "Focus":0, //need to be within 15% off org reroll to get 10% temp bonus nin
                // formula is (MAX_RANGE - HIGH_ROLL_DIFFERENCE) / (MAX_RANGE / 10)
    "Focus Burst":0, // 10 % of inital amount of nin added 100% = 20% nin

    "Focus Range":0,// increase the 15% prox of the reroll comp to roll +50 focus would be 22% so 7% up 

    "Bukijutsu Boost" :0,//Bukijutsu Boost is soft-capped at 60%. After that, its effect is diminished. For example, the effective buki boost of 100% is 80%.
    // Turn	Buki available	Buki used	(Bonus from BukiBoost)	Damage dealt
    // 1st turn	100               40	            (10)	            40
    // 2nd turn	 60               40	            (10)	            40
    // 3rd turn	 20               20	             (0)	            20
    // 4th turn	  0                0                 (0)                 0
    // 5th turn	  0                0                 (0)                 0

"Bukijutsu Recovery" :0, //100 Buki, 20% BukiRecovery, 0% BukiBoost
      // Turn	Buki available	Buki used	Buki recovered
      // 1st turn	100             30          	6
      // 2nd turn	76              30          	6
      // 3rd turn	52              30      	    6
      // 4th turn	28              28	            6
      // 5th turn	6                6              1


"Genjutsu Activation" :0, //Genjutsu Activation chance	Bonus activation	Final chance
            // Sharingan Copy
     //                         40%	    30%	                70%
"Genjutsu Mastery" :0, //Genjutsu Mastery reduces the cost of the genjutsu by a certain percentage, which in turn also allows ninjas with lower individual genjutsu values to activate it.

    //  Example Stats:     Cost:           Genjutsu Mastery:         Final cost:
    //  Sharingan Copy       40Genjutsu        25%                     30Genjutsu
"Genjutsu Recharge" :0, //recharge % off total Gen back

    
   

    "Endurance": , //(PENALTY_PERCENT * 200 / (200 + END))

    
 "Fatigue Recovery":0, // softcap at 30% dimninishing returns after the effective fatigue recovery of 70% is 43%
                        //exsample 10% Fat 
                        // Turn	Capacity	Capacity with added Fatigue Rec
                        // 2nd turn	Between 60% and 95%	Between 70% and 100%
                        // 3rd turn	Between 30% and 80%	Between 40% and 90%
    
    "Off-position":0,//Placing a ninja in the wrong slot (for example a Jounin on the Kage slot) requires a lot of Stamina to prevent any penalties.

    "Taijutsu Immunity":0,//Immunities reduce the attacker's stat by a percentage before the attack hits. Immunities are one of the most rare attributes.
    //If the attacker has 100 taijutsu before reductions and buffs, and the defender has 10% Taijutsu Immunity, then the attacker only hits using 90 taijutsu.

    "Ninjutsu Immunity":0, //Immunities reduce the attacker's stat by a percentage before the attack hits. Immunities are one of the most rare attributes.
    //If the attacker has 200 ninjutsu before reductions and buffs, and the defender has 10% Ninjutsu Immunity, then the attacker only hits using 180 ninjutsu.

    "Bukijutsu Immunity":0,//Immunities reduce the attacker's stat by a percentage before the attack hits. Immunities are one of the most rare attributes.

    "poisen":0%,//50%	30% buki boost used resulting in 3 turns of poison. 80% tai immunity is reduced to 40%.
    // 2nd turn	-	2/3	33%	80% tai immunity is reduced to 54%.
    // 3rd turn	-	1/3	17%	80% tai immunity is reduced to 66%.
    // 4th turn	-	-	0%	Poison has run out.
    
    "Guard":0, //Taijutsu Guard is a weaker version of Taijutsu Immunity. A set amount of taijutsu is blocked each time defending until you run out of Guard.
    
    "Absorb":0, //Ninjutsu Absorb is a weaker version of Ninjutsu Immunity. A set amount of ninjutsu is blocked each time defending until you run out of Absorb.

    "Death":0, // instant kills if hits any nin that lvl goes up in 5. 
    
    "Bloodline Nullify":0, //Gives a percentage chance to disable all genjutsus from an opponent's bloodline for the duration of the battle.

    "Morph" :0, // on LW to change some stats in to other 
    

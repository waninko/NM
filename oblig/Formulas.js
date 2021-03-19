

Focus:
(MAX_RANGE - HIGH_ROLL_DIFFERENCE) / (MAX_RANGE / 10)

endurance:
(PENALTY_PERCENT * 200 / (200 + END))

Off-Position:
Ninja Position	Penalty formula	Stamina required for no penalty on a lvl 20 ninja
Genin	50 + (LEVEL * 3)	110
Jounin	100 + (LEVEL * 3)	160
Kage	150 + (LEVEL * 3)	210
The table below shows how much penalty is added for each position a ninja is wrongly placed on.

Slot Position	Max penalty received
Genin	80%
Jounin	65%
Kage	50%

death : Formula: (50 - LEVEL_DIFFERENCE).

stamina :
Max Stamina Effectiveness formula:
60 + (LEVEL * 2.5) up until level 50.
Levels past 50 are not as harsh, with only 2.0 in the above formula. ((LEVEL - 50) * 2.0)
Example Stats:
Your Level 20 ninja with 80 Stamina is about to fight. According to the formula above, the required stamina to reach 100% effectiveness is 110. 80 of 110 stamina is 73% Stamina Effectiveness. The ninja hits for 100 damage.
Turn	Capacity range	Calculation with 73% sta eff.	Capacity used	Damage
1st turn	100% - 100%	-	100%	100
2nd turn	60% - 95%	60 + ((95 - 60) * 0.73)	86%	86
3rd turn	30% - 80%	30 + ((80 - 30) * 0.73)	67%	67
4th turn	10% - 65%	10 + ((65 - 10) * 0.73)	50%	50

buki:
* 1 BUKI = 1 damage, but by default only 30% of total bukijutsu is used per turn.
Nin:
2 NIN = 1 damage 

Tai:
2 TAI = 1 damage

Attack:
1 Attack = 1damge

Elemental:
A battle between you and and opponent where the elements are the opposite of each other.
Your affinity	Element stat	Opponent's affinity	Element stat
Fire 	200 Ele	Wind 	150 Ele
Initial damage	Element difference	Element damage	End damage
100	+50	50% of 100	150
Summary:
In an elemental clash (opposite elements), 1 ELE = 1% damage


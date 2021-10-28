# Pathfinder
An original recursive pathfinding algorithm
Works by first finding the best angles to the target. So for example if the 'player' starts at [0,0] and the target is at [4,4], an array of angles, [0, 90, 180, 270]
would be generated. Then the algorithm would recursively go through the list and update the player's position. In this case, a recommended angle of 
90 would translate to a translation of [1,0] and the player would move to [1,0]. Another key feature of this original algorithm is the list generated.
If the space above the player [1,0] is occupied by an obstacle, the algorithm will jump to the second element in the list, 90. It will continue doing this until the
list is exhausted or the player can move. 
One final feature of this algorithm is the ability to avoid 'getting stuck'. For example of 0 doesn't work but 90 does work however once the player translates to 90,
0 is the only one that works, the algorithm will prevent the player from going back to its original position for 1 move. This way, it is impossible to get stuck.


Created Summer 2021

import { DnDClass } from "data/model/dndModel";

const npcClassMapper: Record<DnDClass, string> = {
  random:
    "good,neutral,evil,class." +
    "1-5,1-5,1-10,barbarian." +
    "6-10,6-10,11-15,bard." +
    "11-30,11-15,16-35,cleric." +
    "31-35,16-25,36-40,druid." +
    "36-45,26-45,41-50,fighter." +
    "46-50,46-50,51-55,monk." +
    "51-55,0-0,0-0,paladin." +
    "56-65,51-55,56-60,ranger." +
    "66-75,56-75,61-80,rogue." +
    "76-78,76-78,81-82,sorcerer." +
    "79-80,79-80,83-85,warlock." +
    "81-100,81-100,86-100,wizard",
  /* adept:
    "npcLevel,baseAttackBonus,fortSave,refSave,willSave." +
    "1,0,0,0,2." +
    "2,1,0,0,3." +
    "3,1,1,1,3." +
    "4,2,1,1,4." +
    "5,2,1,1,4." +
    "6,3,2,2,5." +
    "7,3,2,2,5." +
    "8,4,2,2,6." +
    "9,4,3,3,6." +
    "10,5,3,3,7." +
    "11,5,3,3,7." +
    "12,6,4,4,8." +
    "13,6,4,4,8." +
    "14,7,4,4,9." +
    "15,7,5,5,9." +
    "16,8,5,5,10." +
    "17,8,5,5,10." +
    "18,9,6,6,11." +
    "19,9,6,6,11." +
    "20,10,6,6,12",
  aristocrat:
    "npcLevel,baseAttackBonus,fortSave,refSave,willSave." +
    "1,0,0,0,2." +
    "2,1,0,0,3." +
    "3,2,1,1,3." +
    "4,3,1,1,4." +
    "5,3,1,1,4." +
    "6,4,2,2,5." +
    "7,5,2,2,5." +
    "8,6,2,2,6." +
    "9,6,3,3,6." +
    "10,7,3,3,7." +
    "11,8,3,3,7." +
    "12,9,4,4,8." +
    "13,9,4,4,8." +
    "14,10,4,4,9." +
    "15,11,5,5,9." +
    "16,12,5,5,10." +
    "17,12,5,5,10." +
    "18,13,6,6,11." +
    "19,14,6,6,11." +
    "20,15,6,6,12", */
  barbarian:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha." +
    "1,13,16,4,3,3,2,1,16,1,15,14,13,10,12,8." +
    "2,20,17,5,5,4,2,1,20,1,15,14,13,10,12,8." +
    "3,28,17,6,6,4,3,2,24,2,16,14,13,10,12,8." +
    "4,35,17,8,7,5,3,2,28,2,16,14,13,10,12,8." +
    "5,43,18,9,8,5,3,2,32,2,16,14,13,10,12,8." +
    "6,50,18,10,9,6,4,3,36,3,16,14,13,10,12,8." +
    "7,58,18,11,10,6,4,3,40,3,16,14,14,10,12,8." +
    "8,73,19,12,11,8,4,3,44,3,16,14,14,10,12,8." +
    "9,81,20,13,12,8,5,4,48,4,16,14,14,10,12,8." +
    "10,90,20,14,14,9,5,4,52,4,16,14,14,10,12,8." +
    "11,98,21,15,15,9,5,4,56,4,17,14,14,10,12,8." +
    "12,107,22,16,16,10,6,5,60,5,17,14,14,10,12,8." +
    "13,115,24,17,17,10,6,5,64,5,17,14,14,10,12,8." +
    "14,124,24,19,18,11,6,5,68,5,17,14,14,10,12,8." +
    "15,132,24,21,19,11,7,6,72,6,18,14,14,10,12,8." +
    "16,141,24,24,21,12,7,6,76,6,18,14,14,10,12,8." +
    "17,149,26,26,22,12,7,6,80,6,20,14,14,10,12,8." +
    "18,158,28,27,24,13,7,6,84,7,20,14,14,10,12,8." +
    "19,166,29,30,26,13,8,6,88,7,24,16,14,10,12,8." +
    "20,175,29,31,27,14,9,7,92,7,25,16,14,10,12,8",
  bard:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha,spellsPerDay." +
    "1,7,14,1,2,1,3,1,24,1,10,13,12,14,8,15,2." +
    "2,11,14,2,3,1,4,2,30,1,10,13,12,14,8,15,3." +
    "3,16,14,3,4,2,4,2,36,2,10,13,12,14,8,16,3." +
    "4,20,14,4,5,2,5,3,42,2,10,13,12,14,8,16,3." +
    "5,25,15,4,5,2,5,3,48,2,10,13,12,14,8,16,3." +
    "6,29,15,5,6,3,6,4,54,3,10,13,12,14,8,16,3." +
    "7,34,15,6,7,3,6,4,60,3,10,13,12,14,8,17,3." +
    "8,38,15,7,8,3,7,5,66,3,10,13,12,14,8,17,3." +
    "9,43,15,7,8,4,7,5,72,4,10,13,12,14,8,17,3." +
    "10,47,15,8,9,4,8,6,78,4,10,13,12,14,8,17,3." +
    "11,52,16,9,10,4,8,6,84,4,10,13,12,14,8,20,3." +
    "12,56,17,10,11,5,9,7,90,5,10,13,12,14,8,20,3." +
    "13,61,18,10,11,5,9,7,96,5,10,13,12,14,8,20,4." +
    "14,65,19,12,12,5,10,8,102,5,10,13,12,14,8,20,4." +
    "15,70,19,13,13,6,10,8,108,6,10,13,12,14,8,21,4." +
    "16,74,20,14,14,6,11,9,114,6,10,13,12,14,8,23,4." +
    "17,79,22,14,14,6,11,9,120,6,10,13,12,14,8,25,4." +
    "18,83,23,15,15,7,12,10,126,7,10,13,12,14,8,25,4." +
    "19,88,23,16,16,7,12,10,132,7,10,13,12,14,8,25,4." +
    "20,92,23,17,17,7,13,11,138,7,10,13,12,14,8,26,4",
  cleric:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha,spellsPerDay." +
    "1,10,17,2,-1,4,-1,4,8,1,13,8,14,10,15,12,3." +
    "2,16,18,3,0,5,-1,5,10,1,13,8,14,10,15,12,4." +
    "3,23,19,4,1,5,0,5,12,2,13,8,14,10,16,12,4." +
    "4,29,19,5,2,6,0,7,14,2,13,8,14,10,16,12,5." +
    "5,36,19,5,2,6,0,7,16,2,13,8,14,10,16,12,5." +
    "6,42,20,6,3,7,1,8,18,3,13,8,14,10,16,12,5." +
    "7,49,20,7,4,7,1,8,20,3,13,8,14,10,17,12,6." +
    "8,55,21,8,5,8,1,9,22,3,13,8,14,10,17,12,6." +
    "9,62,22,8,5,8,2,9,24,4,13,8,14,10,19,12,6." +
    "10,68,22,9,6,9,2,11,26,4,13,8,14,10,19,12,6." +
    "11,75,22,10,7,9,2,11,28,4,13,8,14,10,20,12,6." +
    "12,81,23,11,8,10,3,13,30,5,13,10,14,10,20,12,6." +
    "13,88,24,11,9,10,4,13,32,5,13,10,14,10,22,12,6." +
    "14,94,24,12,10,11,4,15,34,5,13,10,14,10,22,12,6." +
    "15,101,24,13,11,11,5,15,36,6,13,10,14,10,23,12,6." +
    "16,107,26,14,12,12,5,16,38,6,13,10,14,10,25,12,6." +
    "17,114,26,14,12,12,5,17,40,6,13,10,14,10,25,12,6." +
    "18,120,26,15,13,13,6,18,42,7,13,10,14,10,25,12,6." +
    "19,127,26,16,14,13,6,18,44,7,13,10,14,10,25,12,6." +
    "20,133,26,17,15,14,6,20,46,7,13,10,14,10,26,12,6.",
  /* commoner:
    "npcLevel,baseAttackBonus,fortSave,refSave,willSave." +
    "1,0,0,0,0." +
    "2,1,0,0,0." +
    "3,1,1,1,1." +
    "4,2,1,1,1." +
    "5,2,1,1,1." +
    "6,3,2,2,2." +
    "7,3,2,2,2." +
    "8,4,2,2,2." +
    "9,4,3,3,3." +
    "10,5,3,3,3." +
    "11,5,3,3,3." +
    "12,6,4,4,4." +
    "13,6,4,4,4." +
    "14,7,4,4,4." +
    "15,7,5,5,5." +
    "16,8,5,5,5." +
    "17,8,5,5,5." +
    "18,9,6,6,6." +
    "19,9,6,6,6." +
    "20,10,6,6,6.", */
  druid:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha,spellsPerDay." +
    "1,9,17,1,3,3,2,4,20,1,10,14,13,12,15,8,3." +
    "2,14,17,2,4,4,2,5,25,1,10,14,13,12,15,8,4." +
    "3,20,17,3,5,4,3,5,30,2,10,14,13,12,16,8,4." +
    "4,25,17,4,6,5,3,6,35,2,10,14,13,12,16,8,5." +
    "5,31,17,4,6,5,3,6,40,2,10,14,13,12,16,8,5." +
    "6,36,18,5,7,6,4,7,45,3,10,14,13,12,16,8,5." +
    "7,42,18,6,8,6,4,7,50,3,10,14,13,12,17,8,6." +
    "8,47,19,7,9,7,4,8,55,3,10,14,13,12,17,8,6." +
    "9,53,20,7,9,7,5,8,60,4,10,14,13,12,17,8,6." +
    "10,58,21,8,10,8,5,10,65,4,10,14,13,12,19,8,6." +
    "11,64,21,9,11,8,5,11,70,4,10,14,13,12,20,8,6." +
    "12,69,21,10,12,9,6,13,75,5,10,14,13,12,20,8,6." +
    "13,75,22,10,12,9,6,13,80,5,10,14,13,12,22,8,6." +
    "14,80,22,12,13,10,6,15,85,5,10,14,13,12,22,8,6." +
    "15,86,23,13,14,10,7,15,90,6,10,14,13,12,23,8,6." +
    "16,91,24,14,15,11,7,16,95,6,10,14,13,12,25,8,6." +
    "17,97,25,14,15,11,7,17,100,6,10,14,13,12,25,8,6." +
    "18,102,28,15,16,12,8,18,105,7,10,14,13,12,25,8,6." +
    "19,108,28,16,17,12,8,18,110,7,10,14,13,12,25,8,6." +
    "20,113,28,17,18,13,8,20,115,7,10,14,13,12,26,8,6.",
  /* expert:
    "npcLevel,baseAttackBonus,fortSave,refSave,willSave." +
    "1,0,0,0,2." +
    "2,1,0,0,3." +
    "3,2,1,1,3." +
    "4,3,1,1,4." +
    "5,3,1,1,4." +
    "6,4,2,2,5." +
    "7,5,2,2,5." +
    "8,6,2,2,6." +
    "9,6,3,3,6." +
    "10,7,3,3,7." +
    "11,8,3,3,7." +
    "12,9,4,4,8." +
    "13,9,4,4,8." +
    "14,10,4,4,9." +
    "15,11,5,5,9." +
    "16,12,5,5,10." +
    "17,12,5,5,10." +
    "18,13,6,6,11." +
    "19,14,6,6,11." +
    "20,15,6,6,12", */
  fighter:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha." +
    "1,12,18,4,2,4,1,1,8,2,15,13,14,10,12,8." +
    "2,19,19,5,4,5,1,1,10,3,15,13,14,10,12,8." +
    "3,27,21,6,5,5,2,2,12,4,15,13,14,10,12,8." +
    "4,34,21,8,6,6,2,2,14,5,16,13,14,10,12,8." +
    "5,42,21,9,7,6,2,2,16,5,15,13,14,10,12,8." +
    "6,49,22,10,8,7,3,3,18,7,15,13,14,10,12,8." +
    "7,57,22,11,9,7,3,3,20,7,15,13,14,10,12,8." +
    "8,64,23,12,10,8,3,3,22,8,17,13,14,10,12,8." +
    "9,72,23,13,11,8,4,4,24,9,17,13,14,10,12,8." +
    "10,79,24,14,12,9,4,4,26,10,17,13,14,10,12,8." +
    "11,87,25,15,13,9,4,4,28,10,17,13,14,10,12,8." +
    "12,94,25,18,14,10,5,5,30,12,18,13,14,10,12,8." +
    "13,102,25,19,15,10,5,5,32,12,18,13,14,10,12,8." +
    "14,109,27,20,16,11,5,5,34,13,18,13,14,10,12,8." +
    "15,117,28,22,17,11,6,6,36,14,18,13,14,10,12,8." +
    "16,124,30,23,19,12,6,6,38,15,18,19,14,10,12,8." +
    "17,132,31,25,20,12,6,6,40,15,18,21,14,10,12,8." +
    "18,139,32,27,21,13,7,7,42,17,18,21,14,10,12,8." +
    "19,166,32,30,22,14,7,7,44,17,18,25,16,10,12,8." +
    "20,175,34,32,23,15,7,7,46,18,18,26,16,10,12,8",
  monk:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha,unarmedStrike,flurryOfBlows." +
    "1,9,13,3,1,3,3,4,16,2,14,13,12,10,15,8,2,0." +
    "2,14,13,4,3,4,4,5,20,3,14,13,12,10,15,8,3,1." +
    "3,20,13,5,4,4,4,5,24,4,14,13,12,10,15,8,4,2." +
    "4,25,14,5,6,5,6,6,28,4,14,14,12,10,15,8,5,3." +
    "5,31,16,5,6,5,6,6,32,4,14,14,12,10,15,8,5,4." +
    "6,36,16,7,7,6,8,7,36,7,14,14,12,10,15,8,6,5." +
    "7,42,17,8,8,6,8,7,40,7,14,14,12,10,15,8,7,6." +
    "8,47,19,9,9,7,9,10,44,7,14,14,12,10,16,8,8,7." +
    "9,53,19,9,9,7,9,10,48,8,14,14,12,10,16,8,8,7." +
    "10,58,20,11,10,7,9,10,52,8,14,14,12,10,16,8,9,9." +
    "11,64,21,12,11,7,9,10,56,8,14,14,12,10,16,8,10,10." +
    "12,69,21,13,13,8,10,11,60,9,14,15,12,10,16,8,11,11." +
    "13,75,21,13,13,8,10,11,64,9,14,15,12,10,16,8,11,11." +
    "14,80,21,15,14,10,11,12,68,9,14,15,12,10,16,8,12,12." +
    "15,86,25,16,15,10,12,13,72,10,14,17,12,10,18,8,13,13." +
    "16,91,26,17,18,11,14,14,76,10,14,18,12,10,18,8,14,14." +
    "17,97,27,18,18,12,14,14,80,10,14,18,12,10,18,8,14,14." +
    "18,102,28,20,19,12,15,15,84,11,14,18,12,10,18,8,15,15." +
    "19,127,30,22,21,13,16,16,88,11,16,20,14,10,20,8,17,17." +
    "20,133,34,23,23,14,18,18,92,11,16,22,14,10,23,8,18,18",
  paladin:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha,spellsPerDay." +
    "1,11,17,4,0,3,-1,1,8,1,14,8,12,10,13,15,0." +
    "2,17,18,5,2,6,1,3,10,1,14,8,12,10,13,15,0." +
    "3,24,18,6,3,6,2,4,12,2,14,8,12,10,13,15,0." +
    "4,30,19,7,4,7,2,5,14,2,14,8,12,10,14,15,1." +
    "5,37,19,8,5,7,2,5,16,2,14,8,12,10,14,15,1." +
    "6,43,19,9,6,8,3,6,18,3,14,8,12,10,14,15,2." +
    "7,50,20,10,7,8,3,6,20,3,14,8,12,10,14,15,2." +
    "8,56,21,11,8,10,4,7,22,3,14,8,12,10,14,16,2." +
    "9,63,22,12,9,10,5,8,24,4,14,8,12,10,14,16,2." +
    "10,69,22,13,10,11,5,8,26,4,14,8,12,10,14,16,2." +
    "11,76,22,15,11,11,5,8,28,4,14,8,12,10,14,16,2." +
    "12,82,23,16,12,13,7,10,30,5,14,8,12,10,14,19,2." +
    "13,89,24,17,13,13,7,10,32,5,14,8,12,10,14,19,2." +
    "14,95,24,19,14,14,7,10,34,5,14,8,12,10,14,19,3." +
    "15,102,26,20,15,14,9,11,36,6,14,8,12,10,14,19,3." +
    "16,108,28,21,16,16,9,12,38,6,14,8,12,10,14,20,3." +
    "17,115,29,23,17,16,9,12,40,6,14,8,12,10,14,20,3." +
    "18,121,30,25,18,17,10,13,42,7,14,8,12,10,14,20,4." +
    "19,128,30,26,20,19,12,15,44,7,14,8,12,10,14,24,4." +
    "20,134,30,27,21,20,12,15,46,7,14,8,12,10,14,25,4",
  ranger:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha,spellsPerDay." +
    "1,9,15,3,4,3,4,1,24,1,14,15,13,10,12,8,0." +
    "2,15,15,5,5,4,5,1,30,1,14,15,13,10,12,8,0." +
    "3,20,15,6,6,4,5,2,36,2,14,15,13,10,12,8,0." +
    "4,25,17,7,8,5,7,2,42,2,14,16,13,10,12,8,1." +
    "5,31,17,8,9,5,7,2,48,2,14,16,13,10,12,8,1." +
    "6,37,17,9,10,6,8,3,54,3,14,16,13,10,12,8,2." +
    "7,42,17,10,11,6,8,3,60,3,14,16,13,10,12,8,2." +
    "8,48,17,11,12,7,9,3,66,3,14,17,13,10,12,8,2." +
    "9,53,17,12,13,7,9,4,72,4,14,17,13,10,12,8,2." +
    "10,59,18,13,15,8,11,4,78,4,14,19,13,10,12,8,2." +
    "11,64,19,14,16,8,11,4,84,4,14,19,13,10,12,8,2." +
    "12,70,20,15,18,9,13,5,90,5,14,20,13,10,12,8,2." +
    "13,75,22,16,20,9,13,5,96,5,14,20,13,10,12,8,2." +
    "14,81,22,18,21,10,14,6,102,5,14,20,13,10,14,8,3." +
    "15,86,23,19,22,10,14,7,108,6,14,20,13,10,14,8,3." +
    "16,92,23,22,23,11,15,7,114,6,18,21,13,10,14,8,3." +
    "17,97,24,23,25,11,16,7,120,6,18,23,13,10,14,8,3." +
    "18,103,25,25,27,12,17,8,126,7,18,23,13,10,14,8,4." +
    "19,108,25,26,28,12,17,8,132,7,18,23,13,10,14,8,4." +
    "20,114,25,28,31,13,19,8,138,7,18,24,13,10,14,8,4",
  rogue:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha." +
    "1,7,15,2,3,1,4,0,40,1,12,15,13,14,10,8." +
    "2,11,15,3,4,1,5,0,50,1,12,15,13,14,10,8." +
    "3,16,16,4,5,2,5,1,60,2,12,15,13,14,10,8." +
    "4,20,1,5,7,2,7,1,70,2,12,16,13,14,10,8." +
    "5,25,17,5,7,2,7,1,80,2,12,16,13,14,10,8." +
    "6,29,17,6,8,3,8,2,90,3,12,16,13,14,10,8." +
    "7,34,19,7,9,3,8,2,100,3,12,16,13,14,10,8." +
    "8,38,19,8,10,3,9,2,110,3,12,17,13,14,10,8." +
    "9,43,19,8,10,4,9,3,120,4,12,17,13,14,10,8." +
    "10,47,19,9,11,4,11,3,130,4,12,17,13,14,10,8." +
    "11,52,19,10,12,4,11,3,140,4,12,17,13,14,10,8." +
    "12,56,22,11,15,5,13,4,150,5,12,20,13,14,10,8." +
    "13,61,22,12,15,5,13,4,160,5,12,20,13,14,10,8." +
    "14,65,22,13,16,5,14,4,170,5,12,20,13,14,10,8." +
    "15,70,22,14,17,6,14,5,180,6,12,20,13,14,10,8." +
    "16,74,22,15,18,6,15,5,190,6,12,21,13,14,10,8." +
    "17,79,24,15,20,6,16,5,200,6,12,21,13,14,10,8." +
    "18,83,24,16,21,7,17,6,210,7,12,23,13,14,10,8." +
    "19,88,25,18,23,7,18,6,220,7,12,25,13,14,10,8." +
    "20,92,26,19,26,7,20,6,230,7,12,26,13,14,10,8",
  sorcerer:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha,spellsPerDay." +
    "1,5,12,-1,3,1,2,3,8,1,8,14,13,10,12,15,5." +
    "2,8,12,0,4,1,2,4,10,1,8,14,13,10,12,15,6." +
    "3,12,12,0,4,2,3,4,12,2,8,14,13,10,12,15,6." +
    "4,15,13,1,5,2,3,5,14,2,8,14,13,10,12,16,6." +
    "5,19,13,1,5,2,3,5,16,2,8,14,13,10,12,16,6." +
    "6,23,13,2,6,3,4,6,18,3,8,14,13,10,12,16,6." +
    "7,26,14,2,6,3,4,6,20,3,8,14,13,10,12,16,6." +
    "8,30,14,3,7,3,4,7,22,3,8,14,13,10,12,17,6." +
    "9,33,15,3,7,4,5,7,24,4,8,14,13,10,12,17,6." +
    "10,37,15,4,8,4,5,8,26,4,8,14,13,10,12,17,6." +
    "11,40,16,4,8,4,5,8,28,4,8,14,13,10,12,17,6." +
    "12,44,17,5,9,5,6,9,30,5,8,14,13,10,12,20,6." +
    "13,47,18,6,9,5,6,9,32,5,8,14,13,10,12,20,6." +
    "14,51,19,7,11,5,7,10,34,5,8,16,13,10,12,20,6." +
    "15,54,19,7,11,6,8,10,36,6,8,16,13,10,12,22,6." +
    "16,58,19,8,12,6,8,11,38,6,8,16,13,10,12,23,6." +
    "17,61,21,8,12,6,8,11,40,6,8,16,13,10,12,23,6." +
    "18,65,22,9,13,7,9,12,42,7,8,16,13,10,12,25,6." +
    "19,68,22,9,13,7,9,12,44,7,8,16,13,10,12,25,6." +
    "20,72,22,10,14,7,9,13,46,7,8,16,13,10,12,26,6",
  warlock:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha,spellsPerDay." +
    "1,5,12,-1,3,1,2,3,8,1,8,14,13,10,12,15,5." +
    "2,8,12,0,4,1,2,4,10,1,8,14,13,10,12,15,6." +
    "3,12,12,0,4,2,3,4,12,2,8,14,13,10,12,15,6." +
    "4,15,13,1,5,2,3,5,14,2,8,14,13,10,12,16,6." +
    "5,19,13,1,5,2,3,5,16,2,8,14,13,10,12,16,6." +
    "6,23,13,2,6,3,4,6,18,3,8,14,13,10,12,16,6." +
    "7,26,14,2,6,3,4,6,20,3,8,14,13,10,12,16,6." +
    "8,30,14,3,7,3,4,7,22,3,8,14,13,10,12,17,6." +
    "9,33,15,3,7,4,5,7,24,4,8,14,13,10,12,17,6." +
    "10,37,15,4,8,4,5,8,26,4,8,14,13,10,12,17,6." +
    "11,40,16,4,8,4,5,8,28,4,8,14,13,10,12,17,6." +
    "12,44,17,5,9,5,6,9,30,5,8,14,13,10,12,20,6." +
    "13,47,18,6,9,5,6,9,32,5,8,14,13,10,12,20,6." +
    "14,51,19,7,11,5,7,10,34,5,8,16,13,10,12,20,6." +
    "15,54,19,7,11,6,8,10,36,6,8,16,13,10,12,22,6." +
    "16,58,19,8,12,6,8,11,38,6,8,16,13,10,12,23,6." +
    "17,61,21,8,12,6,8,11,40,6,8,16,13,10,12,23,6." +
    "18,65,22,9,13,7,9,12,42,7,8,16,13,10,12,25,6." +
    "19,68,22,9,13,7,9,12,44,7,8,16,13,10,12,25,6." +
    "20,72,22,10,14,7,9,13,46,7,8,16,13,10,12,26,6",
  /* warrior:
    "npcLevel,baseAttackBonus,fortSave,refSave,willSave." +
    "1,1,2,0,0." +
    "2,2,3,0,0." +
    "3,3,3,1,1." +
    "4,4,4,1,1." +
    "5,5,4,1,1." +
    "6,6,5,2,2." +
    "7,7,5,2,2." +
    "8,8,6,2,2." +
    "9,9,6,3,3." +
    "10,10,7,3,3." +
    "11,11,7,3,3." +
    "12,12,8,4,4." +
    "13,13,8,4,4." +
    "14,14,9,4,4." +
    "15,15,9,5,5." +
    "16,16,10,5,5." +
    "17,17,10,5,5." +
    "18,18,11,6,6." +
    "19,19,11,6,6." +
    "20,20,12,6,6", */
  wizard:
    "level,hp,ac,melee,ranged,fortSave,refSave,willSave,skillPoints,feats,str,dex,con,int,wis,cha,spellsPerDay." +
    "1,5,12,0,2,1,2,3,16,1,10,14,13,15,12,8,3." +
    "2,8,12,1,4,1,2,4,20,1,10,14,13,15,12,8,4." +
    "3,12,12,1,4,2,3,4,24,2,10,14,13,15,12,8,4." +
    "4,15,13,2,5,2,3,5,35,2,10,14,13,16,12,8,4." +
    "5,19,13,2,5,2,3,5,40,3,10,14,13,16,12,8,4." +
    "6,23,13,3,6,3,4,6,45,4,10,14,13,16,12,8,4." +
    "7,26,14,3,6,3,4,6,50,4,10,14,13,16,12,8,4." +
    "8,30,14,4,7,3,4,7,55,4,10,14,13,17,12,8,4." +
    "9,33,15,4,7,4,5,7,60,5,10,14,13,17,12,8,4." +
    "10,37,15,5,8,4,5,8,65,6,10,14,13,17,12,8,4." +
    "11,40,16,5,8,4,5,8,70,6,10,14,13,17,12,8,4." +
    "12,44,17,6,9,5,6,9,105,7,10,14,13,20,12,8,4." +
    "13,47,18,7,9,5,6,9,112,7,10,14,13,20,12,8,4." +
    "14,51,19,8,11,5,7,10,119,7,10,16,13,20,12,8,4." +
    "15,54,20,8,11,6,8,10,144,8,10,16,13,22,12,8,4." +
    "16,58,20,9,12,6,8,11,152,8,10,16,13,23,12,8,4." +
    "17,61,22,9,12,6,8,11,160,8,10,16,13,23,12,8,4." +
    "18,65,23,10,13,7,9,12,189,10,10,16,13,25,12,8,4." +
    "19,68,23,10,13,7,9,12,198,10,10,16,13,25,12,8,4." +
    "20,72,23,11,14,7,9,13,230,11,10,16,13,26,12,8,4",
} as const;

export default npcClassMapper;

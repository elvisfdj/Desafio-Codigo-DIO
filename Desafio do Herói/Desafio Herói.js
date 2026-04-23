console.log("Desafio do Herói");
let heroName = "Dave Oliveira";
let heroXp = 9000;
const msg = "O  Herói de nome "
const msgF = " está no nível: "

if (heroXp < 1000){
console.log(msg + heroName + msgF + "Ferro" )    
}
else if (heroXp <= 2000){
console.log(msg + heroName + msgF + "Bronze")    
}
else if (heroXp <= 5000){
console.log(msg + heroName + msgF + "Prata")    
}
else if (heroXp <= 7000){
console.log(msg + heroName + msgF + "Ouro")    
}
else if (heroXp <= 8000){
console.log(msg + heroName + msgF + "Platina")    
}
else if (heroXp <= 9000){
console.log(msg + heroName + msgF + "Ascendente")    
}
else if (heroXp <= 10000){
console.log(msg + heroName + msgF + "Imortal")    
}
else if (heroXp >= 10001){
console.log(msg + heroName + msgF + "Radiante")    
}
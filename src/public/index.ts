interface   IFighter {
        readonly name: string;
        power: number;
        health: number;
        setDamage: (damage) => void;
        hit: (enemy, point) => void;
   
}

class Fighter implements IFighter {
    readonly name: string;
    readonly power: number;
    health: number;
    constructor(name: string,power: number = 100,health: number = 200 ) {     
        this.name = name;
        this.power = power;
        this.health = health;
    }        
   

     setDamage(damage:number) :void {
        this.health -= damage;
   } 
     hit(enemy, point:number):void {       
       let damage:number = point * enemy.power ;
        enemy.setDamage(damage) 
       console.log(`${this.name} inflict ${damage} damage  to ${enemy.name}. ${enemy.name} health: ${enemy.health}`);
   } 
}
 
class ImprovedFighter extends Fighter { 
   
   doubleHit(enemy, point:number) {
     return super.hit(enemy, point * 2)
   } 
} 
 
let fighter = new Fighter("Baks", 10, 3000);
let improvedFighter = new ImprovedFighter("Axe", 10, 2000);
  
function fight(defaultFidhter, upgradeFighter, ...points:Array<number>) {
    let round:number = 1;

    for (let point of points) {
        console.log(`_______________________Round ${round} Start:___________________________________`);

        defaultFidhter.hit(upgradeFighter, point)
            if (upgradeFighter.health < 0) {
                return console.log(`${upgradeFighter.name} lose. ${defaultFidhter.name} win!!!Congratulations!`);
            }
        
        upgradeFighter.doubleHit(defaultFidhter, point)
            if (defaultFidhter.health < 0) {
                return console.log(`${upgradeFighter.name} lose. ${defaultFidhter.name} win!!!Congratulations!`);
         }

       console.log(`_______________________Round ${round++} End:_____________________________________ `);
   }
}
 
 
 
 
 
 
fight(fighter, improvedFighter, 10, 10, 600)
 
 
 
 

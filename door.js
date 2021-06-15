class Door{

        openedDoors() {
            let doors = "";
            let openedDoor = "*,";


            for (let x = 0; x < 100; x++) 
            {
               
                if(x < 99){
                    doors = doors + openedDoor;
                }
                else{
                doors = doors + openedDoor.slice(0, -1) 
                }

            }
        
            let arr = doors.split(',');
            return arr;



    }


    closedDoors() {
        
        let array = this.openedDoors();

        for (let x = 0; x < 100; x++) 
        {
           let doorNumber = x+1;
            if(doorNumber % 2 === 0){
                array[x] = "#";
            }

        }

        return array;
        
        }



        toggle() {
        
            let array = this.closedDoors();
    
            for (let x = 0; x < 100; x+= 3) 
            {
                    let arrayT = this.closedDoors();
                    if(arrayT[x] == "*")
                    {
                        array[x] = "#";
                    }
                    else if(arrayT[x] == "#")
                    {
                        array[x] = "*";
                    }
                
                    return arrayT[x];
            }
    
            console.log(array[x]);

           

            
            }
}

        
  let door = new Door();
  
  console.log(door.openedDoors());
  console.log(door.closedDoors());
  console.log(door.toggle());

module.exports = Door


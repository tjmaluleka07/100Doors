let Door = require ("./door");

describe("100 Doors", function () {
    it("should return arr if all doors are opened", function () {
        
        let doors = "";
        let openedDoor = "*,";
        for (let x = 0; x < 100; x++) 
        {
           
            if(x < 99){
                doors = doors + openedDoor;
            }
            else
            {
                doors = doors + openedDoor.slice(0, -1) 
            }

        }
    
        let arr = doors.split(',');

        let door = new Door();
        let doorResult = door.openedDoors(100);
        expect(doorResult.toString()).toBe(doors);
    });

    it("should return arr if all doors are closed", function () {
        let door = new Door();
        let array = door.openedDoors(); 

        for (let x = 0; x < 100; x++) 
        {
           let doorNumber = x+1;
            if(doorNumber % 2 === 0){
                array[x] = "#";
            }

        }

       // return array;
        
        
        let doorResult = door.closedDoors(100);
        expect(doorResult.toString()).toBe(array.toString());
    });

    it("Toggle every third door", function () {
        let door = new Door();
        let array = door.closedDoors(); 

        for (let x = 0; x < 100; x++) 
        {
           let doorNumber = x+1;
            if(doorNumber % 3 === 0){
                array[x] = "#";
            }
            else
            {
                array[x] = "*";
            }

        }

       // return array;
        
        
        let doorResult = door. toggle(100);
        expect(doorResult.toString()).toBe(array.toString());
    });



});
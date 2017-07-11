const eventEmitter = require('events');
const elevator = new eventEmitter();
// console.log(elevator);


function ElevatorRide(elevator, currentFloor, riderInfo){
    this.elevator = elevator;
    // this.tenants = [];
    this.currentFloor = currentFloor;
    this.riderInfo = riderInfo;
    // this.floors = floors;

    this.message = function(){
        console.log('This is floor ' + this.currentFloor)
    }

    this.goToFloor = function(){
        var len = this.riderInfo.length;
        for(var i = 0; i < len; i++){
            console.log('Tenant floors are ' + this.riderInfo[i].destination )
        }
    }

    // this.announcement = function(){
    //     console.log('hello world')
    //     var name = '';
    //     var len = this.tenants.length;

    //     for(var i = 0; i<len; i++){
    //         console.log(this.tenants[i]);
    //     }

    // }
}

var myElevator = new ElevatorRide();

// console.log(myElevator.announcement())

const elevRiders = [
                  {name: 'Jerry', destination: 4},
                  {name: 'Kramer', destination: 10},
                  {name: 'Newman', destination: 2}
                   ]

// const tenantNames = ['Jerry', 'Karamer', 'Newman'];
// const tenantFloors = [4,10,2];

const passengers = new ElevatorRide(elevator, 1)

// passengers.tenants = tenantNames;
// passengers.floors = tenantFloors;
passengers.riderInfo = elevRiders;

passengers.goToFloor()

// const handleButtonPress = function(floor) {
//    const interval = setInterval(function(){
//         passengers.currentFloor++;
        // console.log('you are now on ' + passengers.currentFloor)  --------------------- >
//         passengers.message();

//         if(passengers.currentFloor === 4){
//             passengers.elevator.removeListener('buttonPress', handleButtonPress);
//             clearInterval(interval);
//         }

//     }, 1000)
// }

// passengers.elevator.on('buttonPress', handleButtonPress);

// passengers.elevator.emit('buttonPress', passengers.currentFloor);



// var currentFloor = 1;

// elevator.on('buttonPress', function(floor){
//     currentFloor++;
//     setTimeout(function(){
//         console.log('you are now on ' + currentFloor)
//     })

// });

// var topFloor = function(){
//     if(currentFloor === 5){
//         elevator.removeListener('buttonPress', currentFloor);
//     }
// }

// elevator.emit('buttonPress', currentFloor)
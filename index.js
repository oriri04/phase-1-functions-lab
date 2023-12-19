let headQuarters = 42
let feetsPerBlock = 264
function distanceFromHqInBlocks (distance){
    if (distance > headQuarters){
        return distance - headQuarters
    } else {
        return Math.abs(distance - headQuarters)
    }
}
// let result = distanceFromHqInBlocks(32)
// console.log(result)

function distanceFromHqInFeet(distance){
    if (distance > headQuarters){
        return (distance - headQuarters) * feetsPerBlock;
    } else {
        return Math.abs(distance - headQuarters) * feetsPerBlock;
    }
}

// let result = distanceFromHqInFeet(50)
// console.log(result)

function distanceTravelledInFeet(start, destination){
    let feet = Math.abs(start - destination) * feetsPerBlock;
    return feet;
}

// let result = distanceTravelledInFeet(20, 45)
// console.log(result)

function calculatesFarePrice(start, destination) {
    let distanceTravelledInFeet = Math.abs(start - destination)* feetsPerBlock;
    if (distanceTravelledInFeet <= 400) {
        return 0;
    } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
        return (distanceTravelledInFeet - 400) * 0.02;
    } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet <=2500) {
        return 25;
    } else if (distanceTravelledInFeet > 2500) {
        return "cannot travel that far"
    }
}

let result = calculatesFarePrice(17, 23);
console.log(result)
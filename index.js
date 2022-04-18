// Code your solution here
function findMatching(driverNames, name){
    return driverNames.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
} 

function fuzzyMatch (driverNames, name){
    return driverNames.filter(driverName => driverName.toLowerCase().slice(0, name.length) === name.toLowerCase())
}

function matchName(drivers, name){
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}
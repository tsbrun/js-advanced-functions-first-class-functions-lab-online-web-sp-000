const returnFirstTwoDrivers = (drivers) => {
    let firstTwoDrivers = drivers.slice(0, 2)
    return firstTwoDrivers
}

const returnLastTwoDrivers = (drivers) => {
    let lastTwoDrivers = drivers.slice(drivers.length - 2, drivers.length)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

// If I didn't return the function returned by createFareMultiplier(), then the result of fareDoubler would be 'undefined'

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}
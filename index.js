// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };
  
  // Example 
  const driversArray = ["driver1", "driver2", "driver3", "driver4"];
  console.log(returnFirstTwoDrivers(driversArray));  // Output: ["driver1", "driver2"]
  console.log(returnLastTwoDrivers(driversArray));   // Output: ["driver3", "driver4"]
  
  console.log(fareDoubler(10));  // Output: 20
  console.log(fareTripler(10));  // Output: 30
  
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers));  // Output: ["driver1", "driver2"]
  console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers));   // Output: ["driver3", "driver4"]
  
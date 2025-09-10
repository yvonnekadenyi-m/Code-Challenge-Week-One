function calculateDemeritPoints(speed) {
    const speedLimit = 70; 
    const kmPerDemeritPoint = 5; 
   // const speedLimit = 70;
    // const kmPerDemeritPoint = 5; 
    const demeritPointsThreshold = 12; 
    // Return 'ok' if the speed limit is less than 70
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
    // Demerit points are arrived at by dividing the difference between speed and speedlimit and dividing it by kmPerDemeritPoint. 
        const demeritPoints = ((speed - speedLimit) / kmPerDemeritPoint);
    // If the demeritPoints is greater than 12 ( demeritPointsThreshold), then the return should be suspension of license
    // If the demeritPoints is > 12 ( demeritPointsThreshold), lisence is suspended.
        if (demeritPoints > demeritPointsThreshold) {
            console.log("License suspended"); 
        } else {
            console.log("Points" + demeritPoints); // Output demerit points
        }
    }
}
// Test cases
calculateDemeritPoints(60); // Output: "Points: 2"
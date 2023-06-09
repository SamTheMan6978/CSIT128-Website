// Declare a variable to store the coach data
let coachData;
          
// Fetch coach data from JSON file
fetch('coaches.json')
  .then(response => response.json())
  .then(data => {
    // Assign the coach data to the variable
    coachData = data.coaches;
    console.log('Coach data:', coachData);

    // Perform any desired operations with the data
    // ...
  })
  .catch(error => {
    console.log('Error fetching coach data:', error);
  });
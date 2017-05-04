const friends = require("../data/friends");

module.exports = function(app) {
	//get request to api/friends path, responds with data from friends.js
	app.get("/api/friends", function(request, response) {
		response.json(friends);
	});
	//post request to api/friends path
	app.post("/api/friends", function(request, response) {
		//new survey data is stored in variable newFriend
		let newFriend = request.body;
		//empty array to push the numeric difference between 
		//each newFriend score vs each friend score from friends array
		let differencesArray = [];
		//loop through friends object
		for(let x = 0; x < friends.length; x++) {
			//friend being compared against newFriend stored in variable
			let friendToCompare = friends[x];
			//setting total difference variable to 0
			let totalDiff = 0;
			//for each friend in friends array,
			//we loop through their scores
			for(let y = 0; y < friendToCompare.scores.length; y++) {
				//and take the absolute value of the difference between
				//the newFriend's score and the score of friend being compared and store in variable
				let difference = Math.abs(friendToCompare.scores[y] - newFriend.scores[y]);
				//the difference gets added to totalDiff
				totalDiff += difference;
			};
			//add total difference to the differences array in the same position of the
			//friend being compared from friends array
			differencesArray[x] = totalDiff;
		};
		
		console.log("----------------------\nNew User Name: " + newFriend.name)
		console.log("New User Scores: " + newFriend.scores)
		console.log("Score Differences: " + differencesArray);

		//take the value in first position of differences array and store in variable friendScore
		let friendScore = differencesArray[0];
		//create new variable for friend index and set to 0 
		let friendMatchIndex = 0;
		//loop through the differences array to find best match (lowest number)
		//because we set the friendScore variable to 0, we start the loop at 1
		for(let i = 1; i < differencesArray.length; i++) {
			//compare two numbers, if less than current friend score
			if(differencesArray[i] < friendScore) {
				//set friend score to the lower number
				friendScore = differencesArray[i];
				//set friend match index to the index of lower number
				friendMatchIndex = i;
			};
		};
		//add the new friend to the friends array
		friends.push(newFriend);
		console.log("Best Match: "+friends[friendMatchIndex].name)
		//respond with the best match found using the loops above
		response.json(friends[friendMatchIndex]);
	});
};


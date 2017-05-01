const friends = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(request, response) {
		response.json(friends);
	});

	app.post("/api/friends", function(request, response) {
		var newFriend = request.body;
		let differencesArray = [];

		for(var x = 0; x < friends.length; x++) {

			var friendToCompare = friends[x];
			var totalDiff = 0;
			
			for(var y = 0; y < friendToCompare.scores.length; y++) {
				var differenceOneScore = Math.abs(friendToCompare.scores[y] - newFriend.scores[y]);
				totalDiff += differenceOneScore;
			};

			differencesArray[x] = totalDiff;
		};

		var bestFriendNum = differencesArray[0];
		var bestFriendIndex = 0;

		for(var i = 1; i < differencesArray.length; i++) {
			if(differencesArray[i] < bestFriendNum) {
				bestFriendNum = differencesArray[i];
				bestFriendIndex = i;
			};
		};

		friends.push(newFriend);

		response.json(friends[bestFriendIndex]);
	});
};


var friendsArr = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArr);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var newFriendScores = newFriend.scores;

    for (var i = 0; i < friendsArr.length; i++) {
      var scoresArr = friendsArr[i].scores;

      var lowestScore = 10;
      var bestMatch;
      for (var j = 0; j < scoresArr.length; j++) {
        var diff = Math.abs(parseInt(newFriendScores[j]) - parseInt(scoresArr[j]));
        console.log(diff);
      }
    }
    friendsArr.push(newFriend);
    res.json(true);
  });
};

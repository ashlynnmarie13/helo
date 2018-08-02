//module.exports need equals sign haha

module.exports = {
  createUser: (req, res) => {
    // getting database
    const db = req.app.get("db");
    // pulling username and password from front end
    const { username, password } = req.body;

    //accessing the users table
    db.users
      //inserting the username and password that we pulled
      .insert({
        username: username,
        password: password
      })
      //I DON'T UNDERSTAND HOW THIS WHERE WORKS
      //why is that a comma instead of an equals sign?
      // AND is because we're dealing with sql
      .then(
        db.users
          .where("username=$1 AND password=$2", [username, password])
          //   //make sure you pass in the user
          .then(user => res.status(200).send(user[0]))
      );
  },
  pullUser: (req, res) => {
    // getting database
    const db = req.app.get("db");
    // pulling username and password from front end
    const { username, password } = req.body;

    //I DON'T UNDERSTAND HOW THIS WHERE WORKS
    //why is that a comma instead of an equals sign?
    // AND is because we're dealing with sql

    db.users
      .where("username=$1 AND password=$2", [username, password])
      //   //make sure you pass in the user
      .then(user => res.status(200).send(user[0]));
  },

  getPosts: (req, res) => {
    const db = req.app.get("db");

    //go over this
    let { userID, userposts } = req.params;
    let { search } = req.query;

    if (userposts == true && search) {
      db.getPostsWithTitle([search]).then(posts => res.status(200).send(posts));
    } else if (userposts == false && search == "") {
      db.getUsersPosts([userID]).then(posts => res.status(200).send(posts));
    } else if (userposts == false && search) {
      db.getUsersPostsWithTitle([userID, search]).then(posts =>
        res.status(200).send(posts)
      );
    } else if (userposts == true && search == "") {
      db.getAllPosts().then(posts => res.status(200).send(posts));
    }
  },

  getPosts: (req, res) => {
    // getting database
    const db = req.app.get("db");
    // postID from server
    const { postID } = req.params;

    db.getPost([postID]).then(post => {
      res.status(200).send(post);
    });
  }
};

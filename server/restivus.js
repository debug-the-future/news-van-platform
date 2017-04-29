Site = new Mongo.Collection('site');

if (Meteor.isServer) {

    Api = new Restivus({
        prettyJson: true
    });


    if(Site.find().count() === 0) {
        Site.insert({
            url: "generalakbar.com",
            who: "General Akbar",
            what: "It's a trap!! The Death Star is fully operational.",
            where: {
                name: "Los Angeles",
                lat: 51.5033640,
                lng: -0.1276250
            },
            why: "The Empire must be stopped."
        })

}

    Api.addCollection(Site);
}

// Maps to: /api/articles/:id
/*Api.addRoute('articles/:id', {authRequired: true}, {
 get: function () {
        return Articles.findOne(this.urlParams.id);
    },
    delete: {
        roleRequired: ['author', 'admin'],
        action: function () {
            if (Articles.remove(this.urlParams.id)) {
                return {status: 'success', data: {message: 'Article removed'}};
            }
            return {
                statusCode: 404,
                body: {status: 'fail', message: 'Article not found'}
            };
        }
    }
});
//

/*
curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://localhost:3000/api/login

curl -v POST http://b2fe1a6c.ngrok.io/api/site -d @site.json --header "Content-Type: application/json"

  console.log("starting up, we have " + Things.find().count() + " things in the db");
  if (Things.find().count() == 0) {
    console.log("inserting some test data");
    Things.insert({name: "William", nickname: 'Bill'});
    Things.insert({name: "Susan", nickname: 'Sue'});
    Things.insert({name: "Maxwell", nickname: 'Max'});
    console.log("now we have " + Things.find().count() + " things in the db");
  }

  // Global API configuration

  // Generates: GET, POST, DELETE on /api/things and GET, PUT, DELETE on
  // /api/things/:id for Things collection
  // 
  // try:
  // /api/things
  // should return:
  //  {
  //  "status": "success",
  //  "data": [
  //    {
  //      "_id": "JGjJKLm5vBaSMBWPT",
  //      "name": "William",
  //      "nickname": "Bill"
  //    },
  //    {
  //      "_id": "uPpybkv2kxgExpYyS",
  //      "name": "Susan",
  //      "nickname": "Sue"
  //    },
  //    {
  //      "_id": "aWyGNhJDKnJ4a7thp",
  //      "name": "Maxwell",
  //      "nickname": "Max"
  //    }
  //  ]
  //}
  //
  // try
  //
  // /api/things/JGjJKLm5vBaSMBWPT
  // 
  // should return:
  // {
  //  "status": "success",
  //  "data": {
  //    "_id": "JGjJKLm5vBaSMBWPT",
  //    "name": "William",
  //    "nickname": "Bill"
  //  }
  //}

  Api.addCollection(Things);


  // try in browser
  // /api/getByParam/?name=Maxwell
  //
  // should return:
  //{
  //  "message": "found the thing with name Maxwell",
  //  "result": {
  //    "_id": "aWyGNhJDKnJ4a7thp",
  //    "name": "Maxwell",
  //    "nickname": "Max"
  //  }
  //}
  Api.addRoute('getByParam', {authRequired: false}, {
    get: function () {
      console.log("getByParam, url params: ", this.urlParams);
      var name = this.urlParams.query.name;
      console.log("getByParam, name param is: ", name);
      var theThing = Things.findOne({name: name});
      if (theThing) {
        console.log("found thing: ", theThing);
        return {
          statusCode: 200,
          body: {message: 'found the thing with name ' + name, result: theThing}
        };
      }
      else {
        console.log("couldn't find thing");
        return {
          statusCode: 404,
          body: {message: "couldn't find the thing with name " + name}
        };
      }
    },
    post: function () {
      console.log("post to customEndpoint");
    }
  });

  // try in browser
  // /api/getByNickname/Sue
  //
  // should return:
  // {
  //  "message": "found the thing with nickname Sue",
  //  "result": {
  //    "_id": "uPpybkv2kxgExpYyS",
  //    "name": "Susan",
  //    "nickname": "Sue"
  //  }
  //}
  Api.addRoute('getByNickname/:nickname', {authRequired: false}, {
    get: function () {
      var nickname = this.urlParams.nickname;
      console.log("finding by nickname " + nickname);
      var theThing = Things.findOne({nickname: nickname});
      if (theThing) {
        console.log("found thing: ", theThing);
        return {
          statusCode: 200,
          body: {message: 'found the thing with nickname ' + nickname, result: theThing}
        };
      }
      else {
        console.log("couldn't find thing");
        return {
          statusCode: 404,
          body: {message: "couldn't find the thing with nickname " + nickname}
        };
      }
    },
    post: function () {
      console.log("post to getByNickname");
    }
  });

  Api.addRoute('getXml/:nickname', {authRequired: false}, {
    get: function () {
      var nickname = this.urlParams.nickname;
      console.log("getXml, finding by nickname " + nickname);
      var theThing = Things.findOne({nickname: nickname});
      if (theThing) {
        console.log("found thing: ", theThing);
        return {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/xml',
            'X-Custom-Header': 'custom value'
          },
          // NOTE: Is there a json to xml converter for meteor?
          body: "<body><message>found the thing with nickname " + nickname + "</message><result><_id>"+theThing._id+"</_id><nickname>"+theThing.nickname+"</nickname><name>"+theThing.name+"</name></result></body>"
        };
      }
      else {
        console.log("getXml, couldn't find thing");
        return {
          statusCode: 404,
          headers: {
            'Content-Type': 'application/xml',
            'X-Custom-Header': 'custom value'
          },
          body: "<body><message>couldn't find the thing with nickname " + nickname + "</message></body>"
        };
      }
    },
    post: function () {
      console.log("post to getByNickname");
    }
  });


}*/

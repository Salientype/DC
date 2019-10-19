// feed Data
var postToFeed = function () {

    console.log("hi");

    var mainContainer = document.getElementById("main-container");

    var editPostContainer = document.getElementById("edit-post-container");
    var postForm = document.getElementById("post-form");

    var editPostUser = document.getElementById("edit-post-user");
    var editPostTitle = document.getElementById("edit-post-title");
    var editPostText = document.getElementById("edit-post-text");
    var editPostImgUrl = document.getElementById("edit-post-img-url");

    var feedContainer = document.getElementById("feed-container");

    var newPost = document.createElement("div");

    var feedObj = {

        user: editPostUser.value,
        title: editPostTitle.value,
        text: editPostText.value,
        imgUrl: editPostImgUrl.value

    };

    console.log(feedObj);

    Object.keys(feedObj).forEach(function (key) {

        console.log(key);

        if (key == user) {

            console.log(key);
            var user = document.createElement("span");
            newPost.appendChild(user);
            user.innerHTML = feedObj.key;

        } else if (key == title) {

            console.log(key);
            var title = document.createElement("h2");
            newPost.appendChild(title);
            title.innerHTML = feedObj.key;

        } else if (key == text) {

            console.log(key);
            var text = document.createElement("p");
            newPost.appendChild(text);
            text.innerHTML = feedObj.key;

        }

    });

    feedContainer.prepend(newPost);

}


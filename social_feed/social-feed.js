// feed Data
var mainContainer = document.getElementById("main-container");

var editPostContainer = document.getElementById("edit-post-container");

var editPostUser = document.getElementById("edit-post-user");
var editPostTitle = document.getElementById("edit-post-title");
var editPostText = document.getElementById("edit-post-text");
var editPostImgUrl = document.getElementById("edit-post-img-url");

var feedContainer = document.getElementById("feed-container");

var checkImgUrl = function(string) {

    var fileTypes = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];

    var valid = false;

    fileTypes.forEach(function(ext) {

        if (string.endsWith(ext) == true) {

            valid = true;

        }

    });

    return valid;

}

var postToFeed = function () {

    var newPost = document.createElement("div");

    var feedObj = {

        user: editPostUser.value,
        title: editPostTitle.value,
        text: editPostText.value,
        imgUrl: editPostImgUrl.value

    };    

    if (feedObj.user != "") {

        console.log(feedObj.user);
        var user = document.createElement("span");
        newPost.appendChild(user);
        user.innerHTML = feedObj.user;

    }

    if (feedObj.title != "") {

        console.log(feedObj.title);
        var title = document.createElement("h2");
        newPost.appendChild(title);
        title.innerHTML = feedObj.title;

    } 
    
    if (feedObj.text != "") {

        console.log(feedObj.text);
        var text = document.createElement("p");
        newPost.appendChild(text);
        text.innerHTML = feedObj.text;

    }

    if (feedObj.imgUrl != "") {

        if (checkImgUrl(feedObj.imgUrl) == true) {
            console.log("works");
        }

    }
    
    if (newPost.childElementCount >= 3) {
        
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.classList.add("btn", "btn-secondary");
        newPost.appendChild(deleteBtn);
        feedContainer.prepend(newPost);

        editPostUser.value = "";
        editPostTitle.value = "";
        editPostText.value = "";
        editPostImgUrl.value = "";

    }

}


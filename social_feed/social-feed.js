var init = function () {

    // save form elements into vars
    var mainContainer = document.getElementById("main-container");

    var editPostContainer = document.getElementById("edit-post-container");
    var postForm = document.getElementById("post-form");

    var editPostUser = document.getElementById("edit-post-user");
    var editPostTitle = document.getElementById("edit-post-title");
    var editPostText = document.getElementById("edit-post-text");
    var editPostImgUrl = document.getElementById("edit-post-img-url");
    var submitBtn = document.getElementById("submit-btn");

    var feedContainer = document.getElementById("feed-container");

    // feed Data
    var postToFeed = function () {

        var feedObj = {
            user: editPostUser.nodeValue,
            title: editPostTitle.nodeValue,
            text: editPostText.nodeValue,
            imgUrl: editPostImgUrl.nodeValue
        };

        var newPost = document.createElement("div");
        
        Object.keys(feedObj).forEach(function(key,index) {
            
            if ( key == user ) {
                
                var user  = document.createElement("span");
                newPost.appendChild(user);
                user.innerHTML = feedObj.key;

            } else if ( key == title ) {
                
                var title  = document.createElement("h2");
                newPost.appendChild(title);
                title.innerHTML = feedObj.key;

            } else if ( key == text ) {
                
                var text = document.createElement("p");
                newPost.appendChild(text);
                text.innerHTML = feedObj.key;

            } else if ( key == imgUrl ) {
                
                var image = document.createElement("img");
                newPost.appendChild(image);
                image.setAttribute("src", feedObj.key);

            }

        });

        feedContainer.prepend(newPost);
    }

    submitBtn.addEventListener("click", postToFeed);

}



document.addEventListener('DOMContentLoaded', (event) => {

    init();

});


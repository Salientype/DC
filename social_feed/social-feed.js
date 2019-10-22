// Variables for Page Elements
var mainContainer = document.getElementById("main-container");

var editPostContainer = document.getElementById("edit-post-container");
var editPostName = document.getElementById("edit-post-name");
var editPostUser = document.getElementById("edit-post-user");
var editPostTitle = document.getElementById("edit-post-title");
var editPostText = document.getElementById("edit-post-text");
var editPostImgUrl = document.getElementById("edit-post-img-url");

var feedContainer = document.getElementById("feed-container");

var validateInputs = function () {

    var inputArray = [editPostName, editPostUser, editPostTitle, editPostText, editPostImgUrl];

    var valid = true;

    if (editPostName.value != "" && editPostUser.value != "" && editPostTitle.value != "" && (editPostText.value != "" || editPostImgUrl.value != "")) {

        inputArray.forEach(function (element) {

            // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
            // https://developer.mozilla.org/en-US/docs/Web/API/ValidityState

            if (element.validity.valid == false) {

                valid = false;

            }

        });

        if (valid == false) {

            editPostContainer.classList.add('was-validated');
            alert("Please check your Inputs!");

        }

    } else {

        alert("Required fields must be filled out");
        valid = false;

    }

    return valid;

}

var findParagraphs = function (string) {

    var paraArray = string.split("\n");

    return paraArray;

}

var postToFeed = function () {

    if (validateInputs() == true) {

        var newPost = document.createElement("div");
        var postCard = document.createElement("div");

        var feedObj = {

            name: editPostName.value,
            user: editPostUser.value,
            title: editPostTitle.value,
            text: editPostText.value,
            imgUrl: editPostImgUrl.value

        };

        if (feedObj.title != "") {

            var title = document.createElement("h3");
            title.classList.add("card-title");
            title.innerHTML = feedObj.title;
            newPost.appendChild(title);

        }
        
        if (feedObj.name != "") {

            var name = document.createElement("h5");
            name.classList.add("card-subtitle");
            name.innerHTML = feedObj.name;
            newPost.appendChild(name);

        }

        if (feedObj.user != "") {

            var user = document.createElement("span");
            user.classList.add("card-text", "text-muted");
            user.innerHTML = feedObj.user;
            newPost.appendChild(user);

        }

        if (feedObj.text != "") {

            var textContainer = document.createElement("div");

            var paraArray = findParagraphs(feedObj.text);

            paraArray.forEach(function (paragraph) {

                var paragraphHtml = document.createElement("p");
                paragraphHtml.classList.add("card-text");
                paragraphHtml.innerHTML = paragraph;
                textContainer.appendChild(paragraphHtml);

            });

            newPost.appendChild(textContainer);

        }

        if (feedObj.imgUrl != "") {

            var image = document.createElement("img");
            image.classList.add("card-img-bottom");
            newPost.appendChild(image);
            image.setAttribute("src", feedObj.imgUrl);

        }

        if (newPost.childElementCount >= 4) {

            var deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete";
            deleteBtn.classList.add("btn", "btn-secondary");
            deleteBtn.setAttribute("onclick", "deletePost(this.parentElement.parentElement);");

            newPost.appendChild(deleteBtn);

            // Add Bootstrap classes
            postCard.classList.add("card", "col-md-7");
            newPost.classList.add("card-body");
            postCard.appendChild(newPost);
            feedContainer.prepend(postCard);

            editPostName.value = "";
            editPostUser.value = "";
            editPostTitle.value = "";
            editPostText.value = "";
            editPostImgUrl.value = "";


            editPostContainer.classList.remove('was-validated');

        }

    }

}

var deletePost = function (post) {

    feedContainer.removeChild(post);

}


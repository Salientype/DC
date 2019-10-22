// feed Data
var mainContainer = document.getElementById("main-container");

var editPostContainer = document.getElementById("edit-post-container");
var editPostName = document.getElementById("edit-post-name");
var editPostUser = document.getElementById("edit-post-user");
var editPostTitle = document.getElementById("edit-post-title");
var editPostText = document.getElementById("edit-post-text");
var editPostImgUrl = document.getElementById("edit-post-img-url");

var feedContainer = document.getElementById("feed-container");

var checkImgUrl = function (string) {

    var fileTypes = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
    var valid = false;

    fileTypes.forEach(function (ext) {

        if (string.endsWith(ext) == true) {

            valid = true;

        }

    });

    return valid;

}

var validateInputs = function () {

    var inputArray = [editPostName, editPostUser, editPostTitle, editPostText, editPostImgUrl];

    var valid = true;

    if (editPostName.value != "" && editPostUser.value != "" && editPostTitle.value != "" && (editPostText.value != "" || editPostImgUrl.value != "")) {

        inputArray.forEach(function (element) {

            // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
            // https://developer.mozilla.org/en-US/docs/Web/API/ValidityState

            if (element.validity.valueMissing == true ||
                element.validity.badInput == true ||
                element.validity.patternMismatch == true ||
                element.validity.tooShort == true ||
                element.validity.tooLong == true ||
                element.validity.typeMismatch == true) {

                valid = false;

            }

        });

        if (valid == false) {

            editPostContainer.classList.add('was-validated');
            alert("Please check your Inputs!");

        }

        /*
        if (editPostImgUrl.value != "" && checkImgUrl(editPostImgUrl.value) == false) {

            alert("Please enter a valid URL to an image!");
            valid = false;

        }
        */

    } else {

        alert("Required fields must be filled out");
        valid = false;

    }

    return valid;

}

// find paragraphs and wrap each one in a P tag
var findParagraphs = function (string) {

    var paraArray = string.split("\n");

    return paraArray;

}

var postToFeed = function () {

    if (validateInputs() == true) {

        var newPost = document.createElement("div");

        var feedObj = {

            name: editPostName.value,
            user: editPostUser.value,
            title: editPostTitle.value,
            text: editPostText.value,
            imgUrl: editPostImgUrl.value

        };

        if (feedObj.name != "") {

            var name = document.createElement("h5");
            name.innerHTML = feedObj.name;
            newPost.appendChild(name);

        }
        
        if (feedObj.user != "") {

            var user = document.createElement("span");
            user.innerHTML = feedObj.user;
            newPost.appendChild(user);

        }

        if (feedObj.title != "") {

            var title = document.createElement("h3");
            title.innerHTML = feedObj.title;
            newPost.appendChild(title);

        }

        if (feedObj.text != "") {

            var textContainer = document.createElement("div");
            
            var paraArray = findParagraphs(feedObj.text);

            paraArray.forEach(function (paragraph) {
                
                var paragraphHtml = document.createElement("p");
                paragraphHtml.innerHTML = paragraph;
                textContainer.appendChild(paragraphHtml);

            });

            newPost.appendChild(textContainer);

        }

        if (feedObj.imgUrl != "") {

            var image = document.createElement("img");
            newPost.appendChild(image);
            image.setAttribute("src", feedObj.imgUrl);

        }

        if (newPost.childElementCount >= 3) {

            var deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete";
            deleteBtn.classList.add("btn", "btn-secondary");
            deleteBtn.setAttribute("onclick", "deletePost(this.parentElement);");

            newPost.appendChild(deleteBtn);
            feedContainer.prepend(newPost);

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


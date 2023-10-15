var modal = document.getElementById("signup-modal");
var signUpButton = document.getElementById("sign-up");
var closeBtn = document.getElementsByClassName("close")[0];

signUpButton.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function signupRedirectButton() {
  modal1.style.display = "none";
  modal.style.display = "block";
};

var modal1 = document.getElementById("signin-modal");
var signInButton = document.getElementById("sign-in");
var closeBtn1 = document.getElementsByClassName("close1")[0];

signInButton.onclick = function () {
  modal1.style.display = "block";
};

closeBtn1.onclick = function () {
  modal1.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};


var posts = [
  {
    id: 1,
    author: "Srishti Gupta",
    title: "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
    content: `Since JavaScript does not have any type-checking, either of these keywords can be used to declare a 
    variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they 
    are different.In the ever-changing landscape of programming, where variables hold the key to store and manipulate 
    data, I yearn to embody the essence of 'const'ancy and steadfastness rather than merely being a 'var'iable that 
    changes with every twist and turn of the code.As a 'let', I possess the flexibility to adapt and change my value 
    throughout the execution of the program. While this malleability may seem advantageous at times, I find myself 
    longing for more stability and predictability in my programming journey.`,
  },
  {
    id: 2,
    author: "Colby Fayock",
    title: "What is linting and how can it save you time?",
    content: `One of the biggest challenges in software development is time. It’s something we can’t easily getmore of, 
    but linting can help us make the most out of the time we have.Linting is a static code analysis process that scans 
    source code for potential errors, bugs, or stylistic inconsistencies based on a predefined set of rules. These rules,
    known as "lint rules," cover a wide range of code quality aspects, including syntax errors, variable naming 
    conventions, formatting standards, and potential bugs. Linting tools automatically identify and flag these issues,
    allowing developers to spot and rectify problems early in the development process.`,
  },
  {
    id: 3,
    author: "Yazeed Bzadough",
    title: "How to Get More Views on Your Tech Blog",
    content: `If you're a developer with a Twitter account, you've already seen everyone and their cat start ablog, 
    YouTube channel, or Patreon. We all want to become stars, or at the very least, arecognizable name in the industry.
    Producing valuable, well-researched, and relevant content is the foundation of attracting and retaining readers. 
    Focus on delivering articles that address popular tech trends, provide insightful analysis, and offer solutions to 
    common tech challenges. Consistency and quality will encourage readers to return and share your posts with others.
    Producing valuable, well-researched, and relevant content is the foundation of attracting and retaining readers. 
    Focus on delivering articles that address popular tech trends, provide insightful analysis, and offer solutions to 
    common tech challenges. Consistency and quality will encourage readers to return and share your posts with others.`,
  },
  {
    id: 4,
    author: "Cedd Burge",
    title: "How to write easily describable code",
    content: `When code is not describable using words, most people have to do some mental mapping to turn itin to 
    words. This wastes mental energy, and you run the risk of getting the mapping wrong.Different people will map to 
    different words, whichleads to confusion when discussing the code.Writing clean and easily describable code is a 
    crucial skill for developers. Code that is easy to understand and maintain is not only beneficial for the original 
    author but also for the entire development team. In this guide, we'll explore some best practices and techniques to 
    help you write code that is clear, concise, and self-explanatory. Choose meaningful and descriptive names for 
    variables and functions. Avoid single-letter or cryptic names that require additional mental effort to decipher. 
    Aim for clarity and express the purpose or role of each element in your code.`,
  },
  {
    id: 5,
    author: "Srishti Gupta",
    title: "Everything you should know about ‘module’ & ‘require’ in Node.js",
    content: `Node.js treats each JavaScript file as a separate module. For instance, if you have a filecontaining some 
    code and this file is named xyz.js, then this file is treated as a module inNode, and you can say that you’ve 
    created a modulenamed xyz.Node.js is a powerful runtime environment that allows developers to build server-side 
    applications using JavaScript. Two fundamental concepts in Node.js are the 'module' and 'require' system. 
    Understanding how modules and 'require' work is essential for building scalable, modular, and maintainable Node.js 
    applications. In this comprehensive guide, we will explore everything you need to know about 'module' and 'require' 
    in Node.js.In Node.js, a module is a self-contained unit of code that encapsulates functionality and exposes certain 
    elements for use in other parts of the application. Modules promote code reusability and maintainability by allowing
    developers to separate different functionalities into discrete units.`,
  },
];

renderPosts();

function renderPosts() {
  posts.forEach(function (value, index) {
    var cardTemplate = ` 
    <div class="card" id="card${value.id}">
    <div class="left">
        <p>${value.author}</p>
    </div>

    <div class="right">
        <div>
            <p class="head">${value.title}</p>
            <span class="trash">
                <i id="trashIcon${value.id}" onclick="trashClicked(${value.id})" class="fa fa-trash"></i>
            </span>
        </div >
        <p class="para">${value.content}</p>
        <br/>
        <span class="elipsis">
            <i id=${value.id} class="fa fa-ellipsis" onclick="viewPost(${value.id})"></i>   
        </span>
    </div>
    </div>
    `
    var allPosts = document.getElementById("allPosts");
    allPosts.innerHTML += cardTemplate;
  });
};

var deleteCardId;
var trashModal = document.getElementById('trashModal');
function trashClicked(id) {
  trashModal.style.display = 'block';
  deleteCardId = id;
};

function deletePost() {
  var remove = document.getElementById(`card${deleteCardId}`);
  trashModal.style.display = 'none';
  remove.remove();
}

function revert() {
  trashModal.style.display = 'none';
};

function viewPost(postId) {
  // Encode the post ID to handle special characters in URLs
  const encodedPostId = encodeURIComponent(postId);
  window.location.href = `post.html?id=${encodedPostId}`;
}

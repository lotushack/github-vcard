// global variables

const basicsInfo = document.getElementById('theBasics');
const url = 'https://api.github.com/users/lotushack';
const picture = document.getElementById('thePhoto');

// fetchdata from github
// name
// githuburl
// email
// comapny
// website
fetch(url).then(function (data) {
  return data.json();
}).then(function (data) {

  // declare variables for templates
  let name = data.name;
  let githuburl = data.html_url;
  let email = data.email;
  let company = data.company;
  let website = data.blog;
  let photo = data.avatar_url;
console.log(name);
  let HTMLinfo = `
<p><span style = "cornflowerblue">Name:</span> ${name}</p></span>
<p><span style = "cornflowerblue">Github URL</span> <p>${githuburl}</p>
<p><span style = "cornflowerblue">Email:</span>${email}</p>
<p><span style = "cornflowerblue">Company:</span>${company}</p>
<p><span style = "cornflowerblue">Website:</span>${website}</p>
`;
console.log(HTMLinfo);
  // add template literal with data to HTML body

  basicsInfo.innerHTML += HTMLinfo;

  // Create and add image template literal to picture
  let imageHTML = `
<img src=${photo}>
 `;
console.log(imageHTML);

  // append imageHTML to page
  picture.innerHTML += imageHTML;
});

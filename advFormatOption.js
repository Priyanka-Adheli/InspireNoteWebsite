// localStorage.clear();

const blogBox = document.getElementById('blogBox');
const title = localStorage.getItem('div1');
const content = localStorage.getItem('div2');
const removeBtn=document.getElementById('imgRemove');
const hashInput = document.getElementById('hash');
const authorInput = document.getElementById('author');
const badgeInput = document.getElementById('badges');
const savBtn = document.getElementById('saveBtn');

// Get Random Colors
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// To get current Date and Time
function DateTime() {
    const now = new Date();

    const date = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
    const time = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });

    return {
        Nowdate: date,
        Nowtime: time
    };
}

// To get Color
function color() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

//To add Date and time
const DateTimeIndia = DateTime();
const span = document.createElement('span');
let color1 = getRandomColor();
let color2 = getRandomColor();
let color3 = getRandomColor();
span.classList.add('dateTimeStyle');
span.innerHTML = `${DateTimeIndia.Nowdate} ${DateTimeIndia.Nowtime}`;
span.style.webkitTextFillColor = '#0000';
span.style.background = `linear-gradient(0deg,${color1},${color2},${color3})`
span.style.webkitBackgroundClip = 'text';
blogBox.append(span);




// to add the blog title and content in blob Box
if (title && content) {
    const heading = document.createElement('h1');
    heading.innerHTML = "Blog Title";

    const titleData = document.createElement('div');
    titleData.innerHTML = title;
    titleData.style.borderRadius = '10px';
    titleData.style.backgroundColor = 'white';
    const heading2 = document.createElement('h1');
    heading2.innerHTML = "Blog content";

    const contentOfBlog = document.createElement('div');
    contentOfBlog.innerHTML = content;
    contentOfBlog.style.borderRadius = '10px';
    contentOfBlog.style.backgroundColor = 'white';
    blogBox.appendChild(heading);
    blogBox.appendChild(titleData);
    blogBox.appendChild(heading2);
    blogBox.appendChild(contentOfBlog);
}

// To change the background color of blog page
const colorBtn = document.getElementById('color');

colorBtn.addEventListener('change', () => {
    const color = colorBtn.value;
    blogBox.style.backgroundColor = color;
});

// to add the background Image to blog box
const bgImg = document.getElementById('imgUpload1');
bgImg.addEventListener('change', (event) => {
    const fileUploaded = event.target.files[0];

    if (fileUploaded) {
        const imgUrl = URL.createObjectURL(fileUploaded);
        blogBox.style.backgroundImage = `url(${imgUrl})`;
    }
});

// To remove the bg image
removeBtn.addEventListener('click',()=>{
    blogBox.style.backgroundImage = 'none';
});

const section = document.getElementById('section');
// To add event Listener to Save button / save the blog 
savBtn.addEventListener('click', () => {
    //To get the section value default is all-blogs-content
    const sectionId = section.value;
    //to store the blogs under particular section                    //Empty if no section is present
    let blogs = JSON.parse(localStorage.getItem(sectionId)) || [];


    //clone the card as per the background image is present or not
    if (bgImg.files.length > 0) {
        //Image is present and accessing the image
        const imgFile = bgImg.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            blogBox.style.backgroundImage = `url(${reader.result})`;

            //now after adding image clone the blog
            const blog = blogBox.cloneNode(true);
            const contentHTML = blog.outerHTML;

            blogs.push(contentHTML);
            localStorage.setItem(sectionId, JSON.stringify(blogs)); //storing array of blogs related to particular section
            window.location.href = "blogs.html";
        }
        reader.readAsDataURL(imgFile);
    }
    else {
        //if bg img is not present style is not added just cloned stored and redirected
        const blog = blogBox.cloneNode(true);
        const contentHTML = blog.outerHTML;

        blogs.push(contentHTML);
        localStorage.setItem(sectionId, JSON.stringify(blogs)); //storing array of blogs related to particular section
        window.location.href = "blogs.html";
    }
});



// to add hash Tag
hashInput.addEventListener('change', (event) => {

    let val = hashInput.value;

    if (val != '') {
        if (val[0] !== '#') {
            val = '#' + val;
        }
        let color1 = getRandomColor();
        let color2 = getRandomColor();
        let color3 = getRandomColor();
        const span = document.createElement('span');
        span.classList.add('hashStyle');
        span.innerHTML = val + " ";
        span.style.webkitTextFillColor = '#0000';
        span.style.background = `linear-gradient(0deg,${color1},${color2},${color3})`;
        span.style.webkitBackgroundClip = 'text';
        blogBox.append(span);
        hashInput.value = '';
    }
});

// To add author
authorInput.addEventListener('change', (event) => {

    const val = authorInput.value;

    if (val != '') {
        let color1 = getRandomColor();
        let color2 = getRandomColor();
        let color3 = getRandomColor();
        const span = document.createElement('span');
        span.innerHTML = "-" + val + " ";
        span.classList.add('authorStyle');
        span.style.webkitTextFillColor = '#0000';
        span.style.background = `linear-gradient(0deg,${color1},${color2},${color3})`;
        span.style.webkitBackgroundClip = 'text';
        blogBox.append(span);
        authorInput.value = '';
    }
});

//To add badge
badgeInput.addEventListener('change', (event) => {

    const value = badgeInput.value;
    if (value != '') {
        const span = document.createElement('span');
        span.className = 'badge rounded-pill';
        span.style.backgroundColor = color();
        span.innerHTML = value;
        span.classList.add('badgeStyle')
        blogBox.appendChild(span);
        badgeInput.value = '';
    }
});
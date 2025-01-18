// localStorage.clear();

// On load add all blogs to particular section and also add all the blogs to all-blogs-content section
document.addEventListener('DOMContentLoaded', () => {
    const sections = ['all-blogs-content', 'tech-tab-content', 'fashion-tab-content', 'spiritual-tab-content'];
    //Iterate over the sectionId 
    sections.forEach((sectionId) => {

        //retrive a blog or array of blogs at particular section
        let blogs = JSON.parse(localStorage.getItem(sectionId)) || [];
        const section = document.getElementById(sectionId);

        //iterate over blogs and create div and append into respective section
        blogs.forEach((blog) => {
            const div = document.createElement('div');
            div.innerHTML = blog;
            const delBtn = document.createElement('button');
            delBtn.classList.add('optionBtn');
            delBtn.innerHTML = "Delete Blog";

            delBtn.addEventListener('click', () => {
                let sectionBlogs = JSON.parse(localStorage.getItem(sectionId)) || [];

                //above retrived all blogs now below filter is applied to get new SectionBlogs after removal of an blog
                let newBlogList = sectionBlogs.filter(blogs => blogs !== blog);
                localStorage.setItem(sectionId, JSON.stringify(newBlogList));
                div.remove();
                delBtn.remove();
            });

            section.append(div);
            section.append(document.createElement('br'));
            section.append(delBtn);
        });
    });

    // To add all the blogs to all-blogs-content
    const allBlogsSection = document.querySelector('#all-blogs-content');

    //Iterate over the sectionId 
    sections.forEach((sectionId) => {
        // if its not present in all blogs add into it
        if (sectionId !== 'all-blogs-content') {
            //retrive a blog or array of blogs at particular section
            let blogs = JSON.parse(localStorage.getItem(sectionId)) || [];

            //iterate over blogs and create div and append into respective section
            blogs.forEach((blog) => {
                const div = document.createElement('div');
                div.innerHTML = blog;
                allBlogsSection.append(div);
                allBlogsSection.append(document.createElement('br'));
            });
        }
    });
});
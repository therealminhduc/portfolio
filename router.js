const pageTitle = "Portfolio";

const routes = {
    404: {
        template: "templates/404.html",
        title: "404 " + pageTitle,
        description: "Page not found"
    },

    "/": {
        template: "templates/index.html",
        title: pageTitle,
        description: "homepage"
    },

    "about": {
        template: "templates/about.html",
        title: "About me " + pageTitle,
        description: "About me"
    },

    "skills": {
        template: "templates/skills.html",
        title: "Skills " + pageTitle,
        description: "Skills"
    },

    "projects": {
        template: "templates/projects.html",
        title: "Projects " + pageTitle,
        description: "Projects"
    },

    "contacts": {
        template: "templates/contacts.html",
        title: "Contacts " + pageTitle,
        description: "Contacts"
    },

};

const locationHandler = async () => {
    let location = window.location.hash.replace("#", "");
    if (location.length == 0) {
        location = "/";
    }

    const route = routes[location] || routes[404];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document.querySelector("meta[name = 'description']").setAttribute('content', route.description);
};

window.addEventListener("hashchange", locationHandler);
locationHandler();


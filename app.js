const recentMemberJoins = [{
    img: "img/member-1.jpg",
    pName: "Kara Ace",
    email: "kara.ace@madeupurl.com",
    lastPost: "1/15/21"
    },

    {img: "img/member-2.jpg",
    pName: "Jeffery Sheridan",
    email: "jeffery.sheridan@madeupurl.com",
    lastPost: "1/10/21"
    },

    {img: "img/member-3.jpg",
    pName: "Eliza Curator",
    email: "eliza.curator@madeupurl.com",
    lastPost: "1/7/21"
    },

    {img: "img/member-4.jpg",
    pName: "Sami Tarsa",
    email: "sami.tarsa@madeupurl.com",
    lastPost: "1/4/21"
    }
];

const recentActivitys = [{
    img: "img/member-1.jpg",
    pName: "Kara Ace",
    comment: "the importance of So Say We All",
    time: "2 hours ago"
    },

    {img: "img/member-2.jpg",
    pName: "Jeffery Sheridan",
    comment: "how awesome Babylon 5 characters are!",
    time: "3 hours ago"
    },

    {img: "img/member-3.jpg",
    pName: "Eliza Curator",
    comment: "how Spike & Angel should join the avengers",
    time: "5 hours ago"
    },

    {img: "img/member-4.jpg",
    pName: "Sami Tarsa",
    comment: "how Castiel faced off against Chuck",
    time: "7 hours ago"
    }
];


const newMembers = () => {
    for (i = 0; i < recentMemberJoins.length; i++) {
        let h3Member = document.getElementsByClassName("newMembers")[0]
        let createDiv = document.createElement("div")
        let createSecondDiv = document.createElement("div")
        let createThirdDiv = document.createElement("div")
        let createImg = document.createElement('img')
        let createP = document.createElement('p')
        let createLink = document.createElement('a')
        const recentMemberJoin = recentMemberJoins[i]

        // creates the elements
        createDiv.classList.add('members-container')
        createImg.classList.add('profile-image')
        createImg.src= recentMemberJoin.img;
        createSecondDiv.classList.add("members-text")
        createP.textContent = recentMemberJoin.pName
        createLink.textContent = recentMemberJoin.email
        createLink.href= '#'
        createThirdDiv.textContent=recentMemberJoin.lastPost

    
        // inserts the elements into the DOM
        createDiv.append(createImg);
        createImg.parentNode.insertBefore(createSecondDiv, createImg.nextSibling);
        createSecondDiv.append(createP)
        createSecondDiv.append(createLink)
        createDiv.append(createThirdDiv)
        // below inserts the first index into the dom
        h3Member.parentNode.insertBefore(createDiv, h3Member.nextSibling);
        // below inserts index > 0 into the DOM positioning
        var referenceNode = document.getElementsByClassName('members-container')
        referenceNode[i].parentNode.insertBefore(createDiv, referenceNode[i].nextSibling);
    }      
}

newMembers();

const newPosts = () => {
    for (i = 0; i < recentActivitys.length; i++) {
        let h3Activity = document.getElementsByClassName("newActivity")[0]
        let createDiv = document.createElement("div")
        let createSecondDiv = document.createElement("div")
        let createImg = document.createElement('img')
        let createP = document.createElement('p')
        let secondP = document.createElement('p')
        const recentActivity = recentActivitys[i]

        // creates the elements
        createDiv.classList.add('recent-container')
        createImg.classList.add('profile-image')
        createImg.src= recentActivity.img;
        createSecondDiv.classList.add("recent-text")
        createP.textContent = recentActivity.pName + " commented on " + recentActivity.comment
        secondP.textContent = recentActivity.time


        // inserts the elements into the DOM
        createDiv.append(createImg);
        createImg.parentNode.insertBefore(createSecondDiv, createImg.nextSibling);
        createSecondDiv.append(createP)
        createSecondDiv.append(secondP)
        // below inserts the first index into the dom
        h3Activity.parentNode.insertBefore(createDiv, h3Activity.nextSibling);
        // below inserts index > 0 into the DOM positioning
        var referenceNode = document.getElementsByClassName('recent-container')
        referenceNode[i].parentNode.insertBefore(createDiv, referenceNode[i].nextSibling);
    }
}

newPosts()


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
        // console.log(recentMemberJoin)
        createDiv.classList.add('members-container')
        createImg.classList.add('profile-image')
        createImg.src= recentMemberJoin.img;
        createSecondDiv.classList.add("members-text")
        createP.textContent = recentMemberJoin.pName
        createLink.textContent = recentMemberJoin.email
        createLink.href= '#'
        createThirdDiv.textContent=recentMemberJoin.lastPost

        h3Member.parentNode.insertBefore(createDiv, h3Member.nextSibling);
        createDiv.appendChild(createImg);
        createImg.parentNode.insertBefore(createSecondDiv, createImg.nextSibling);
        createSecondDiv.appendChild(createP)
        createSecondDiv.appendChild(createLink)
        createDiv.appendChild(createThirdDiv)
    }      

}

newMembers();

// const tryFudge = () => {
//     for (i = 0; i < recentMemberJoins.length; i++) {
//         // console.log(recentMemberJoins[i])
//         createDiv.classList.add("Whatever")
//         createDiv.textContent = recentMemberJoins[i].lastPost
//         let next = document.getElementsByClassName("Whatever")[i]
//         next.parentNode.insertBefore(createDiv, next.nextSibling);
//         h3Member.parentNode.insertBefore(createDiv, h3Member.nextSibling);       

//     }
// }

// tryFudge()
// Below is working, now going to make a for loop to expand beyond first member
// const newMembers = () => {
//     // const recentMemberJoin = recentMemberJoins[i]

//     createDiv.classList.add('members-container')
//     createImg.classList.add('profile-image')
//     createImg.src= recentMemberJoins[0].img;
//     h3Member.parentNode.insertBefore(createDiv, h3Member.nextSibling);
//     createDiv.appendChild(createImg);
//     createSecondDiv.classList.add("members-text")
//     createImg.parentNode.insertBefore(createSecondDiv, createImg.nextSibling);
//     createP.textContent = recentMemberJoins[0].pName
//     createSecondDiv.appendChild(createP)
//     createLink.textContent = recentMemberJoins[0].email
//     createLink.href= '#'
//     createSecondDiv.appendChild(createLink)
//     createThirdDiv.textContent=recentMemberJoins[0].lastPost
//     createDiv.appendChild(createThirdDiv)

// }
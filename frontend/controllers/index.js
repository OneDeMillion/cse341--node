
const index = (req, res) => {
    res.set({"Access-Control-Allow-Origin": "*"})
    res.json({ 
    "professionalName": "Axiomatic",
    "nameLink": {
        "firstName": "Kim",
        "url": "www.google.com"
    },
    "firstName": "Nathan",
    "primaryDescription": "Project Team",
    "workDescription1": "Destroy code",
    "workDescription2": "Eat chocolate and drink soda",
    "linkTitleText": "Click here",
    "linkedInLink": {
        "link": "www.linkedin.com",
        "text": "LinkedIn"
    },
    "githubLink": {
        "link": "www.github.com",
        "text": "Github"    
    },
    "contactText": "Contact us at Kim@contact.com"
    })
}
module.exports = { index };
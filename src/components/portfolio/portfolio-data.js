import { faNodeJs, faAngular, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

var portfolioData = [
    {
        "id": 0,
        "title": "Factory of the future",
        "description": "This project involved numerous different High-Tech companies in and around Eindhoven to develop a futuristic experience where users are connected based on similar business interests in a fun social setting. The website allowed a user to create a profile for  their avatar and answer some questions that would be used to connect them with other profesionals for networking.",
        "img": require("../../images/portfolio-items/factory-of-the-future/fotf-thumbnail.jpg"),
        "client": require("../../images/clients/brainport.png"),
        "siteImages": [
            require("../../images/portfolio-items/factory-of-the-future/fotf1.png"),
            require("../../images/portfolio-items/factory-of-the-future/fotf2.png"),
            require("../../images/portfolio-items/factory-of-the-future/fotf3.png"),
            require("../../images/portfolio-items/factory-of-the-future/fotf4.png"),
            require("../../images/portfolio-items/factory-of-the-future/fotf5.png"),
            require("../../images/portfolio-items/factory-of-the-future/fotf6.png"),
            require("../../images/portfolio-items/factory-of-the-future/fotf7.png"),
            require("../../images/portfolio-items/factory-of-the-future/fotf8.png")
        ],
        "skills": [
            {
                "icon": faPencilAlt,
                "title": "Design"
            },
            {
                "icon": faAngular,
                "title": "Angular"
        }],
        "locked": false
    },
    {
    "id": 1,
    "title": "MultiOne Gen 2",
    "description": "The project had the goal of creating an in depth lighting device configuration solution allowing for configuration of device drivers and exporting a project file for programming the devices. MultiOne Web has the goal of providing Philips Lighting with a cloud-based replacement to their current software solution.",
    "img": require("../../images/portfolio-items/multione-gen2/multione-gen2-thumbnail.jpg"),
    "client": require("../../images/clients/philips.png"),
    "siteImages": [
        require("../../images/portfolio-items/multione-gen2/multione-gen2-1.png"),
        require("../../images/portfolio-items/multione-gen2/multione-gen2-2.png"),
        require("../../images/portfolio-items/multione-gen2/multione-gen2-3.png"),
        require("../../images/portfolio-items/multione-gen2/multione-gen2-4.png"),
        require("../../images/portfolio-items/multione-gen2/multione-gen2-5.png")
    ],
    "skills": [{
            "icon": faPencilAlt,
            "title": "Design"
        },
        {
            "icon": faAngular,
            "title": "Angular"
        },
        {
            "icon": faNodeJs,
            "title": "NodeJS"
        }
    ],
    "locked": true
},
{
    "id": 2,
    "title": "Altran Academy",
    "description": "Users can login and search for internal trainings and request enrollment to all trainings as well as request specific course via the external trainings section. Managers will see different menu items where they can review and accept/reject training requests for users.",
    "img": require("../../images/portfolio-items/altran-academy/altran-academy-thumbnail.jpg"),
    "client": require("../../images/clients/altran.png"),
    "siteImages": [
        require("../../images/portfolio-items/altran-academy/altran-academy1.png"),
        require("../../images/portfolio-items/altran-academy/altran-academy2.png"),
        require("../../images/portfolio-items/altran-academy/altran-academy3.png"),
        require("../../images/portfolio-items/altran-academy/altran-academy4.png"),
        require("../../images/portfolio-items/altran-academy/altran-academy5.png"),
        require("../../images/portfolio-items/altran-academy/altran-academy6.png")
    ],
    "skills": [{
            "icon": faAngular,
            "title": "Angular"
        },
        {
            "icon": faNodeJs,
            "title": "NodeJS"
        }
    ],
    "locked": true
},
{
    "id": 3,
    "title": "Gaia Gemstone Jewelery",
    "description": "A website I made during my university studies that was designed to allow for the advertisement of a bespoke jewelery creator using raw gemstone material, this provided a dicitonary of gemstones and their related zodiac sign.",
    "img": require("../../images/portfolio-items/gaia-gemstone-jewelery/ggj-thumbnail.jpg"),
    "client": require("../../images/clients/ggj.png"),
    "siteImages": [
        require("../../images/portfolio-items/gaia-gemstone-jewelery/ggj1.png"),
        require("../../images/portfolio-items/gaia-gemstone-jewelery/ggj2.png"),
        require("../../images/portfolio-items/gaia-gemstone-jewelery/ggj3.png"),
        require("../../images/portfolio-items/gaia-gemstone-jewelery/ggj4.png"),
        require("../../images/portfolio-items/gaia-gemstone-jewelery/ggj5.png"),
        require("../../images/portfolio-items/gaia-gemstone-jewelery/ggj6.png")
    ],
    "skills": [
        {
            "icon": faPencilAlt,
            "title": "Design"
        },
        {
            "icon": faPhp,
            "title": "PHP"
    }],
    "locked": false
}
]

export default portfolioData;
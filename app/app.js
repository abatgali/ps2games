var games = [
    {
        "title": "Need for Speed: Most Wanted",
        "release": "November 11, 2005",
        "composer": "Paul Linford",
        "desc": "Need for Speed: Most Wanted is a 2005 open-world racing video game, and the ninth installment in the Need for Speed series.",
        "rating": 4,
        "image": "images/nfs.png"
    },

    {
        "title": "Grand Theft Auto: San Andreas",
        "release": "October 26, 2004",
        "composer": "Rockstar North",
        "desc": "Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the fifth main entry in the Grand Theft Auto series, following 2002's Grand Theft Auto: Vice City, and the seventh installment overall.",
        "rating": 4.6,
        "image": "images/sa.jpeg"
    },

    {
        "title": "Lego Batman",
        "release": "September 23, 2008",
        "composer": "Paul Linford",
        "desc": "Take control of the Dynamic Duo, Batman and Robin, as you build, drive, swing, and fight your way through Gotham City capturing escaped villains and putting them back in Arkham Asylum where they belong. ",
        "rating": 3.8,
        "image": "images/legobat.jpg"
    },

    {
        "title": "Resident Evil 4",
        "release": "January 11, 2005",
        "composer": "Shigenori Nishikawa, Kouji Kakae, Hiroshi Shibata",
        "desc": "Resident Evil 4 is a 2005 survival horror third-person shooter game developed by Capcom Production Studio 4 and published by Capcom.",
        "rating": 4.7,
        "image": "images/re.jpeg"
    },

    {
        "title": "God of War II",
        "release": "March 13, 2007",
        "composer": "Cris Velasco, Ron Fish, Gerard Marino, Mike Reagan",
        "desc": "God of War II is an action-adventure hack and slash video game developed by Santa Monica Studio and published by Sony Computer Entertainment.",
        "rating": 4.85,
        "image": "images/God_of_War_II_cover.jpg"
    },

    {
        "title": "Mortal Kombat: Shaolin Monks",
        "release": "September 16, 2005",
        "composer": "Adam Puhl",
        "desc": "Mortal Kombat: Shaolin Monks is a 2005 action-adventure beat 'em up game, a spin-off of the Mortal Kombat fighting game series, it is a retelling of the events of Mortal Kombat II.",
        "rating": 4.6,
        "image": "images/Mortal_Kombat_Shaolin_Monks_cover.webp"
    },

    {
        "title": "Final Fantasy XI",
        "release": "March 16, 2006",
        "composer": "Hitoshi Sakimoto, Hayato Matsuo, Masaharu Iwata",
        "desc": "Final Fantasy XII is a role-playing video game developed and published by Square Enix. The twelfth main installment of the Final Fantasy series",
        "rating": 4.1,
        "image": "images/Final_Fantasy_XII_Box_Art.png"
    },

    {
        "title": "Dragon Ball Z: Budokai 3",
        "release": "November 16, 2004",
        "composer": "Dimps",
        "desc": "Dragon Ball Z: Budokai 3, released as Dragon Ball Z3 in Japan, is a video game based on the popular anime series Dragon Ball Z and was developed by Dimps for the PlayStation 2.",
        "rating": 4.9,
        "image": "images/dball.webp"
    },

    {
        "title": "Tekken 5",
        "release": "2004",
        "composer": "Satoru Kōsaki, Rio Hamamoto, Yū Miyake",
        "desc": "Tekken 5 is a fighting game developed and published by Namco for the arcades in 2004, and for the PlayStation 2 in 2005. It is the fifth main and sixth installment, in the Tekken series, marking the tenth anniversary of the series.",
        "rating": 4.8,
        "image": "images/tekken.jpeg"
    },

    {
        "title": "FIFA 14",
        "release": "September 23, 2013",
        "composer": "EA Vancouver",
        "desc": "FIFA 14 is a football simulation video game developed by EA Canada and published by Electronic Arts worldwide under the EA Sports label.",
        "rating": 4.1,
        "image": "images/FIFA_14.jpeg"
    }
];

function loadJSON() {

    $.each(games, function(i, game) {

        $("#app").append(`
        <div class="game-card">
                <h3>${games[i].title}</h3>
                <img src="${games[i].image}" alt="">
                <p>
                    <b>Release:</b> ${games[i].release}<br>
                    <b>Rating:</b> ${games[i].rating}<br>
                    <b>Composer:</b> ${games[i].composer}<br>

                </p>
            </div>`);
    });
}

$(document).ready(function() {

    loadJSON();
});
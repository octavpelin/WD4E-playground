function pickImage(){
    const options = ['bacon_in_the_woods.png', 'munising.jpg', 'bend_in_the_road.png',
        'hollow_tree.png', 'lake_view.JPG'
    ];
    const randomImg = 'images/' + options[Math.floor(Math.random() * options.length)];
    const img = document.querySelector('#header_img');
    img.setAttribute('src', randomImg);
    img.setAttribute('alt', '');
}

function setImages() {
    const options = ['bacon_in_the_woods.png', 'munising.jpg', 'bend_in_the_road.png',
        'hollow_tree.png', 'lake_view.JPG', 'BaconGallupPark.jpg', 'reflected_tree.JPG',
        "tulips.png", "white_buds_on_tree.png"
    ];

    const currentImages = document.querySelectorAll('.flex-container img');
    for (let i = 0; i < currentImages.length; i++) {
        console.log("Image " + i);

        const randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
        currentImages[i].src = randomImg;
        currentImages[i].setAttribute('tabindex', '0');
    }
}
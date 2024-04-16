// alert("Hello");

// 1st step - Movement animation to happen
const card = $('.card');

// const container = document.querySelector('.container');
const container = $('.container');

// 5th step - all items

const photo = $('.photo img');
const title = $('.title');
const social = $('.social');
const info = $('.info h4');
const profile = $('.profile');

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20;
    card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
});

// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.css('transform', 'none');
    photo.css('transform', 'translateZ(50px)');
    title.css('transform', 'translateZ(50px)');
    social.css('transform', 'translateZ(50px)');
    info.css('transform', 'translateZ(50px)');
    profile.css('transform', 'translateZ(50px)');
});

// 3rd step - Removing animation in
container.on('mouseleave', e => {
    card.css('transform', 'all 0.5s ease');
    card.css('transform', 'rotateY(0deg) rotateX(0deg)');
});
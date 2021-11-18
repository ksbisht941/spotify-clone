const featuredListArr = [
    {
        track: 'Fearless PT. II',
        artist: 'Lost Sky, Chris Linton'
    },
    {
        track: 'Punya Paap',
        artist: 'DIVINE'
    },
    {
        track: 'Satisfya',
        artist: 'Imran Khan'
    },
    {
        track: 'Brown Munde',
        artist: 'Invisible'
    },
]

const topArtistArr = [
    {
        artist: 'B Praak',
        description: 'This is B Praak. The essential tracks, all in one playlist'
    },
    {
        artist: 'Jubin Nautiyal',
        description: 'This is Jubin Nautiyal. The essential tracks, all in one playlist'
    },
    {
        artist: 'Neha Kakkar',
        description: 'This is Neha Kakkar. The essential tracks, all in one playlist'
    },
    {
        artist: 'Arijit Singh',
        description: 'This is Arijit Singh. The essential tracks, all in one playlist'
    },
]

const recentlyPlayedArr = [
    {
        track: 'Fearless PT. II',
        artist: 'Lost Sky, Chris Linton'
    },
    {
        track: 'Sufi/Lofi',
        artist: 'Vishal Singh'
    },
    {
        track: 'B Praak',
        artist: 'This is B Praak. The essential tracks, all in one playlist'
    },
    {
        track: 'Unbreakable',
        artist: 'Madison Beer'
    },
]

const featured = document.querySelectorAll('#featured .featured-item');
const topArtist = document.getElementById('top-artist');
const recentlyPlayed = document.getElementById('recently-played');

console.log(featured);

featured.forEach((el, idx) => {
    // document.querySelector('el img').src = `${featuredListArr[idx].track}.jpg`
    el.innerHTML = `
    <img src="https://picsum.photos/200?random=1" alt="" />
    <div class="playSong"><i class='bx bx-play'></i></div>
    <h6>featured title</h6>
    <span>artist name</span>
    `
})
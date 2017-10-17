require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { User, Movie, Review} = require('./schema')

const americanHistoryXReview1 = new Review({
    title: 'American History X movie review',
    tagline: 'Some Legacies Must End.',
    poster: 'https://i.imgur.com/piCxWTp.jpg',
    purchase: "https://www.amazon.com/American-History-X-Edward-Norton/dp/6305313687/ref=sr_1_4?s=movies-tv&ie=UTF8&qid=1508261961&sr=1-4&keywords=american+history+x",
    screenshot: "https://i.imgur.com/0YqR7Zt.jpg",
    review: "The real kicker to all of the Skinhead talk is that were so used to trusting Norton. He is always the babyfaced good guy who we can believe...and he turns around a gives this amazingly powerful performance, playing a character that we are forced to loathe. Thankfully Dereks life path turns around, and even if we can't completely forget what he has done, we can forgive him somewhat - if only because he is a bright person and he does try to rectify his past mistakes.Tony Kaye's direction is quietly understated. The only overt decision he made is to film the present day scenes in color, and the flashbacks in black and white, providing an eerie contrast (and an odd sense of inevitable downfall to the scenes in the past - nothing says no future like black and white). Around the time of release, he did some bitching and moaning that Norton had re-edited the film to beef up his role. He eventually sued New Line Cinema for a sum in excess of $200 million. If the message of the film gets a bit didatic, or the storyline balance is a little off (Norton's entire time in prison is one long flashback that could have been broken up a bit), it hardly matters in the end. American History X is unrelenting. It rarely takes the easy paths, and once the credits roll, you realize that to do so would have been massive folly, an undercutting of all the movie had worked for. This is, perhaps, one of the most difficult films there is there is to watch. Nobody gets out completely unscathed in this film. Not the white people, not the black people, not the correctional system (Norton's character kills two people and he gets out in three years), and certainly not the viewer. If there's the smallest seed of intolerance in the bowels of your soul, it will be shown to you, and it will not be pleasant. I'm a very tolerant person, and American History X shook me to my core."
})

const titanicReview1 = new Review({
    title: 'Titanic movie review',
    tagline: 'Nothing On Earth Could Come Between Them.',
    poster: 'https://i.imgur.com/Ug53wZq.jpg',
    purchase: "https://www.amazon.com/Titanic-Leonardo-DiCaprio/dp/B007SPPANM/ref=sr_1_2?s=movies-tv&ie=UTF8&qid=1508261932&sr=1-2&keywords=titanic+1997",
    screenshot: "https://i.imgur.com/Nyffr5H.jpg",
    review: "James Cameron's 194-minute, $200 million film of the tragic voyage is in the tradition of the great Hollywood epics. It is flawlessly crafted, intelligently constructed, strongly acted and spellbinding. If its story stays well within the traditional formulas for such pictures, well, you don't choose the most expensive film ever made as your opportunity to reinvent the wheel. We know before the movie begins that certain things must happen. We must see the Titanic sail and sink, and be convinced we are looking at a real ship. There must be a human story--probably a romance--involving a few of the passengers. There must be vignettes involving some of the rest and a subplot involving the arrogance and pride of the ship's builders--and perhaps also their courage and dignity. And there must be a reenactment of the ship's terrible death throes; it took two and a half hours to sink, so that everyone aboard had time to know what was happening, and to consider their actions. Movies like this are not merely difficult to make at all, but almost impossible to make well. The technical difficulties are so daunting that it's a wonder when the filmmakers are also able to bring the drama and history into proportion. I found myself convinced by both the story and the saga. The setup of the love story is fairly routine, but the payoff--how everyone behaves as the ship is sinking--is wonderfully written, as passengers are forced to make impossible choices. Even the villain, played by Zane, reveals a human element at a crucial moment (despite everything, damn it all, he does love the girl). The image from the Titanic that has haunted me, ever since I first read the story of the great ship, involves the moments right after it sank. The night sea was quiet enough so that cries for help carried easily across the water to the lifeboats, which drew prudently away. Still dressed up in the latest fashions, hundreds froze and drowned. What an extraordinary position to find yourself in after spending all that money for a ticket on an unsinkable ship."
})

const theTexasChainsawMassacreReview1 = new Review ({
    title: 'The Texas Chainsaw Massacre',
    tagline: "What you know about fear doesnt come close to this.",
    poster: "https://i.imgur.com/dMeIjLx.jpg",
    purchase: "https://www.amazon.com/Texas-Chainsaw-Massacre-Blu-ray/dp/B0029O0BMC/ref=sr_1_2?s=movies-tv&ie=UTF8&qid=1508261901&sr=1-2&keywords=the+texas+chainsaw+massacre+2003",
    screenshot: "https://i.imgur.com/WDWUsBd.jpg",
    review: "The 2003 TCM is slick. Crafted by big-budget music-video maker Marcus Nispel and produced by blockbuster action director Michael Bay (Armageddon, The Rock), it has every bit of the visual flair those names suggest. The stars, from lead Jessica Biel (best known for TV’s “Seventh Heaven”) on down, are charismatic. Though not a big-budget film by today’s standards, there are plenty of greenbacks to be seen in the effects. And yet, this new TCM captures the spirit of the original, and exceeds it in more ways than just budget. At its best, it is a gritty, dirty, bloody film filled with suspense and its share of scares. At its worst, it is a gritty, dirty, bloody film filled with suspense and its share of scares that isn’t Hooper’s original. This is an outstanding horror movie, one of the best of recent years. Put aside your preconceived notions and appreciate this version of TCM for what it is: a terrific film."

})

const theTownReview1 = new Review({
    title: 'The Town movie review',
    tagline: 'Welcome To The Bank Robbery Capital Of America.',
    poster: 'https://i.imgur.com/Ebu87Lz.jpg',
    purchase: 'https://www.amazon.com/Town-Ben-Affleck/dp/B002ZG99N6/ref=sr_1_2?ie=UTF8&qid=1508257696&sr=8-2&keywords=the+town',
    screenshot: "https://i.imgur.com/5jIkcJK.jpg",
    review: "If a film can bring us to this point and make us feel anxiety, it has done something right. 'The Town', Affleck's second film as a director, wants to do something more, to make a biographical and even philosophical statement about the culture of crime, but it doesn't do that as successfully. Here is a well-made crime procedural, and audiences are likely to enjoy it at that level, but perhaps the mechanics of movie crime got in the way of Affleck's higher ambitions. The most intriguing character is Jem. As played by Renner, he's a twisted confusion of behavior, a loose cannon on a team that requires discipline. He's furious when he finds Doug friendly with the woman who could finger them, and the jumpy way he plays friendly is chilling. There's something interesting going on here: Doug is the central character and all interest should move to him, but at about the halfway point, it becomes clear that his character has been deprived of impulse and committed to an acceptable ending. Jem, however, remains capable of anything. 'The Town' shows, as his first film 'Gone Baby Gone' (2007) did, that Affleck has the stuff of a real director. Everything is here. It's an effective thriller, he works closely with actors, he has a feel for pacing. Yet I persist in finding chases and gun battles curiously boring. I realize the characters have stopped making the decisions, and the stunt and effects artists have taken over."
})

const titanic = new Movie({
  title: 'https://i.imgur.com/Ug53wZq.jpg',
  description: "Two passengers fall in love on the ill fated ship.",
  reviews: [titanicReview1]
})
const americanHistoryX = new Movie({
  title: 'https://i.imgur.com/piCxWTp.jpg',
  description: "An older brother tries to stop his younger brother from following in his footsteps.",
    reviews: [americanHistoryXReview1]
})

const theTexasChainsawMassacre = new Movie ({
    title: 'https://i.imgur.com/dMeIjLx.jpg',
    description: "Five friends run into Leatherface and his deadly clan.",
    reviews: [theTexasChainsawMassacreReview1]
})

const theTown = new Movie({
    title: 'https://i.imgur.com/Ebu87Lz.jpg',
    description: "Doug MacRay leads a gang of bank robbers in Boston.",
    poster: "https://i.imgur.com/Ebu87Lz.jpg",
    reviews: [theTownReview1]
  })

const jasonVoorhees = new User({
  userName: 'jason_voorhees',
})

// Uses promises to make sure remove is run first, then saves new user.
User.remove({})
  .then(() => jasonVoorhees.save())
  .then(() => console.log('User Saved'))
Movie.remove({})
    .then(() => titanic.save())
    .then(() => theTown.save())
    .then(() => americanHistoryX.save())
    .then(() => theTexasChainsawMassacre.save())
    .then(() => console.log('Movie Saved'))
    .then(() => mongoose.connection.close())
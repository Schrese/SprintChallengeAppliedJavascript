// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// axios
//     .get(`https://lambda-times-backend.herokuapp.com/articles`)
//     .then(response => {
//         // console.log(response.data);
//         const cardInfo = response.data.articles;

//     cardInfo.forEach(item => {
//         // const newCard = cardCreator(item);
//         const newCard = item;
//         cardCreator(newCard);
//         cardsContainer.appendChild(cardInfo);
//     });  
//  })
//  .catch(error => {
//     console.log('you have an error', error);
// })
// const cardsContainer = document.createElement('cards-container');

// function cardCreator(item) {
//     const 
//     card = document.createElement('div'),
//     cardHeadline = document.createElement('div'),
//     cardAuthorContain = document.createElement('div'),
//     cardImgContain = document.createElement('div'),
//     cardImage = document.createElement('img'),
//     cardAuthor = document.createElement('span');

//     card.classList.add('card');
//     cardHeadline.classList.add('headline');
//     cardAuthorContain.classList.add('author');
//     cardImgContain.classList.add('img-container');

//     card.appendChild(cardHeadline);
//     card.appendChild(cardAuthorContain);
//     cardAuthorContain.appendChild(cardImgContain);
//     cardImgContain.appendChild(cardImage);
//     cardAuthorContain.appendChild(cardAuthor);

//     return card;
// }
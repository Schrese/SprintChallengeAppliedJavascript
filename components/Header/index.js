// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const headers = document.querySelector('.header-container');


function Header() {
    const
    head = document.createElement('div'),
    headDate = document.createElement('span'),
    headTitle = document.createElement('h1'),
    headTemp = document.createElement('span')

    head.classList.add('header');
    headDate.classList.add('date');
    headTemp.classList.add('temp');

    
    head.appendChild(headDate);
    head.appendChild(headTitle);
    head.appendChild(headTemp);

    headDate.textContent = 'SMARCH 28, 2019';
    headTitle.textContent = 'Lambda Times';
    headTemp.textContent = '98°';

    return head;
}

headers.appendChild(Header())

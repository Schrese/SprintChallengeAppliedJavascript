// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
    .get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        // console.log(response.data);
        // const tabInfo = response.data;
        // // tabsCreator(tabInfo);

        response.data.forEach(e => {
            axios.get(`https://lambda-times-backend.herokuapp.com/topics${e.topics}`)
            .then(response => {
                console.log(response);
                const myVar = response.data;
                tabsCreator(myVar);
                tabs.appendChild(tabsCreator(myVar));
            })
        })
        
    })

const tabs = document.querySelector('.tabs')

function tabsCreator(data) {
    const tabElement = document.createElement('div');

    tabElement.classList.add('tab');

    tabElement.textContent = data.topics;

    return tabElement;

}
// tabs.appendChild(tabsCreator(data))
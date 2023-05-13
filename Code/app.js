const subHeading1 = React.createElement('li',{ style: {color: 'green'}, id:'l1'}, "Item 1");
const subHeading2 = React.createElement('li',{ style: {color: 'green'}, id:'l2'}, 'Item 2');
const subHeading3 = React.createElement('li',{ style: {color: 'green'}, id:'l3'}, 'Item 3');

const mainHeading = React.createElement("ul",{ style: { "color": 'red', "listStyleType": "none"}}, "Namste React!", [subHeading1,subHeading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(mainHeading)
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(mainHeading);
console.log("SCRIPT LOADED SUCCESSFULLY!!!!!!!!");

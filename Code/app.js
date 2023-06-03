import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "./assets/r.png";
import profile from "./assets/profile.png";
import "../Code/index.css"
// import x from './assets/sample'

const root = ReactDOM.createRoot(document.getElementById("root"));

// * using create React.createElement
// const h1 = React.createElement('h1',{className: 'heading1',key:1},"Heading 1");
// const h2 = React.createElement('h2',{className: 'heading2',key:2},"Heading 2");
// const h3 = React.createElement('h3',{className: 'heading2',key:3},"Heading 3");

// const div = React.createElement("div", { className: 'title'},[h1,h2,h3]);
// root.render(div);

// * using JSX
// const nestedHeader = (
//   <div className="title">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div>
// );
// root.render(nestedHeader);

// * using functional component
// const NestedHeader = () => {
//   return (
//     <div className="title">
//       <h1>Heading 1</h1>
//       <h2>Heading 2</h2>
//       <h3>Heading 3</h3>
//     </div>
//   );
// };
// root.render(<NestedHeader />);

// * composition of component
// const NestedHeader = () => {
//   return (
//     <div className="title">
//       <h1>Heading 1</h1>
//       <h2>Heading 2</h2>
//       <SubComponent />
//       {/* {SubComponent()} */}
//       <h3>Heading 3</h3>
//     </div>
//   );
// };

// const SubComponent = () => (
//     <h1>I am sub component which is injected in this.</h1>
// )

// root.render(<NestedHeader />)

// * Header Component using functions


const Logo = () => {
  return (
    <div className="company-logo">
      <img src={reactLogo} alt="react logo" />
    </div>
  );
};

const SearchBar = () => (
  <div className="searchBar">
    <input placeholder="search here..." />
  </div>
);

const UserIcon = () => (
  <div className="user-icon">
    <img src={profile} alt="profile logo"/>
  </div>
);

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <SearchBar />
    <UserIcon />
  </div>
);

root.render(<Header />);

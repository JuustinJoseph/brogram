import React from "react";

const Layout = (props) => {
  //children props
  const { children } = props;

  //header
  const header = (
    <header>
      <h1 className="text-gradient">The Brogram</h1>
      <p>
        <strong>The 30 Simple Workouts Program</strong>
      </p>
    </header>
  );

  //footer
  const footer = (
    <footer>
      <p>
        Built by{" "}
        <a href="https://www.iamjustin.xyz/" target="_blank">
          Justin Joseph
        </a>
        <br /> Styled with{" "}
        <a href="https://fantacss.smoljames.com/" target="_blank">
          FantaCSS
        </a>
      </p>
    </footer>
  );

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
};

export default Layout;

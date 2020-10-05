import React from "react";

const Header = () => {
  const styles = {
    fontSize: "2.1em",
    fontWeight: "400",
  };

  return (
    <div>
      <header id="main-header" class="border-bottom text-white p-3 mb-3">
        <div class="container">
          <div class="font-italic text-center">
            <h1 style={styles}>To Do List!</h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

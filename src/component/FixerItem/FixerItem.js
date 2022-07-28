import React from "react";

export default function FixerItem({ fixer }) {
  return (
    <li className="fixer">
      {/* <Link to={`/fixer/${fixer.id}`}> */}
      <div className="fixer__image"></div>
      <div className="fixer__text">
        <h3 className="fixer__name">{fixer.name}</h3>
        {/* <p className="fixer__channel">{fixer.description}</p> */}
      </div>
      {/* </Link> */}
    </li>
  );
}

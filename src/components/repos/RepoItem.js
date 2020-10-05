import React from "react";
import PropTypes from "prop-types";

export const RepoItem = ({ repo }) => {
  console.log(repo);
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url} target="_blank">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description}</p>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;

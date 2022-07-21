import React from "react";

const NewsItems = ({
  title,
  description,
  imgUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <div>
      <div className="card my-2">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: "100", left: "90%" }}
        >
          {source}
        </span>
        <img
          src={
            !imgUrl
              ? "https://images.cnbctv18.com/wp-content/uploads/2020/10/net-e1657210791668-1019x573.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} On {new Date(date).toLocaleString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-success">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;

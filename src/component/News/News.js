// import NewsItems from "../NewsItems/NewsItems";
// import React, { Component } from "react";
// import Spinner from "../Spinner/Spinner";
// // import PropTypes from "prop-types";

// export class News extends Component {
//   // static defaultProps = {
//   //   country: "in",
//   //   pageSize: 8,
//   //   category: "genarel",
//   // };
//   // static propTypes = {
//   //   country: PropTypes.string,
//   //   pageSize: PropTypes.number,
//   //   category: PropTypes.string,
//   // };
//   // articles = [];
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       page: 1,
//       loading: true,
//     };
//   }
//   async componentDidMount() {
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9694bcd3c01944dbb07381ce709f50d9&page=1&pageSize=${this.props.pageSize}`;

//     let respon = await fetch(url);
//     let parsData = await respon.json();
//     this.setState({
//       articles: parsData.articles,
//       totalResults: parsData.totalResults,
//       loading: false,
//     });
//   }
//   handlePreviousClick = async () => {
//     console.log("prev");
//     this.setState({ loading: true });
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       this.props.country
//     }&category=${
//       this.props.category
//     }&apiKey=9694bcd3c01944dbb07381ce709f50d9&page=${
//       this.state.page - 1
//     }&pageSize=${this.props.pageSize}`;

//     let respon = await fetch(url);
//     let parsData = await respon.json();
//     this.setState({
//       articles: parsData.articles,
//       page: this.state.page - 1,
//       loading: false,
//     });
//   };
//   handleNextClick = async () => {
//     console.log("next");
//     if (
//       !this.state.page + 1 <
//       Math.ceil(this.state.totalResults / this.props.pageSize)
//     ) {
//       this.setState({ loading: true });
//       let url = `https://newsapi.org/v2/top-headlines?country=${
//         this.props.country
//       }&category=${
//         this.props.category
//       }&apiKey=9694bcd3c01944dbb07381ce709f50d9&page=${
//         this.state.page + 1
//       }&pageSize=${this.props.pageSize}`;
//       let respon = await fetch(url);
//       let parsData = await respon.json();
//       this.setState({
//         articles:
//           parsData.articles.length > 0
//             ? parsData.articles
//             : this.state.articles,
//         page:
//           parsData.articles.length > 0 ? this.state.page + 1 : this.state.page,
//         loading: false,
//       });
//     } else {
//     }
//   };
//   render() {
//     // console.log(News.defaultProps);
//     console.log("length", this.state.articles.length);
//     console.log(this.props.pageSize);
//     return (
//       <div className="container my-3">
//         <h1 className="text-center text-success">Hulk Top-Headline</h1>
//         <div style={{ height: "40px" }}>
//           {this.state.loading && <Spinner />}
//         </div>
//         <div className="row">
//           {this.state.articles.map((e, index) => {
//             return (
//               <div className="col-md-3 col-sm-6" key={index}>
//                 <NewsItems
//                   title={e.title.slice(0, 45)}
//                   description={e.description}
//                   imgUrl={e.urlToImage}
//                   newsUrl={e.url}
//                   author={e.author}
//                   date={e.publishedAt}
//                   source={e.source.name}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <div className="d-flex justify-content-between">
//           <button
//             className="btn btn-success"
//             onClick={this.handlePreviousClick}
//             disabled={this.state.page <= 1}
//           >
//             &larr; Previous
//           </button>
//           <button
//             className="btn btn-success"
//             onClick={this.handleNextClick}
//             disabled={this.state.articles.length < this.props.pageSize}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;

// ********* react infinite scroll  *******//
import NewsItems from "../NewsItems/NewsItems";
import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${capitalize(props.category)}`;
  const updateNews = async () => {
    props.setProgress(0);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9694bcd3c01944dbb07381ce709f50d9&page=${page}&pageSize=${props.pageSize}`;

    let respon = await fetch(url);
    let parsData = await respon.json();
    setArticles(parsData.articles);
    setTotalResults(parsData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handlePreviousClick = async () => {
    setPage(page - 1);
    updateNews();
  };
  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };
  const fetchMoreData = async () => {
    setPage(page + 1);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9694bcd3c01944dbb07381ce709f50d9&page=${page}&pageSize=${props.pageSize}`;

    let respon = await fetch(url);
    let parsData = await respon.json();
    setArticles(articles.concat(parsData.articles));
    setTotalResults(parsData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center text-success">Hulk Top-Headline</h1>
      <div style={{ height: "40px" }}>{loading && <Spinner />}</div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((e, index) => {
              return (
                <div className="col-md-3 col-sm-6" key={index}>
                  <NewsItems
                    title={e.title.slice(0, 45)}
                    description={e.description}
                    imgUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      <div className="d-flex justify-content-between container">
        <button
          className="btn btn-success"
          onClick={handlePreviousClick}
          disabled={page <= 1}
        >
          &larr; Previous
        </button>
        <button
          className="btn btn-success"
          onClick={handleNextClick}
          disabled={articles.length < props.pageSize}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
};

export default News;

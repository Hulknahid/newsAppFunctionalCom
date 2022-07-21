//********* react infinite scroll  *******//
// import NewsItems from "../NewsItems/NewsItems";
// import React, { Component } from "react";
// import Spinner from "../Spinner/Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";
// export class News extends Component {
//   // capitalizeFirstLetter = (string) => {
//   //   return string.charAt(0).toUpperCase() + string.slice(1);
//   // };

//   capitalize = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       page: 1,
//       loading: true,
//     };
//     document.title = `${this.capitalize(this.props.category)}`;
//   }
//   async updateNews() {
//     this.setState({ loading: true });
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9694bcd3c01944dbb07381ce709f50d9&page=${this.state.page}&pageSize=${this.props.pageSize}`;

//     let respon = await fetch(url);
//     let parsData = await respon.json();
//     this.setState({
//       articles: parsData.articles,
//       totalResults: parsData.totalResults,
//       loading: false,
//     });
//   }
//   async componentDidMount() {
//     this.updateNews();
//   }
//   handlePreviousClick = async () => {
//     this.setState({
//       page: this.state.page - 1,
//     });
//     this.updateNews();
//   };
//   handleNextClick = async () => {
//     this.setState({
//       page: this.state.page + 1,
//     });
//     this.updateNews();
//   };
//   fetchMoreData = async () => {
//     this.setState({
//       page: this.state.page + 1,
//     });
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9694bcd3c01944dbb07381ce709f50d9&page=${this.state.page}&pageSize=${this.props.pageSize}`;

//     let respon = await fetch(url);
//     let parsData = await respon.json();
//     this.setState({
//       articles: this.state.articles.concat(parsData.articles),
//       totalResults: parsData.totalResults,
//       loading: false,
//     });
//   };
//   render() {
//     // console.log(News.defaultProps);
//     console.log("length", this.state.articles.length);
//     console.log(this.props.pageSize);
//     return (
//       <>
//         <h1 className="text-center text-success">Hulk Top-Headline</h1>
//         <div style={{ height: "40px" }}>
//           {this.state.loading && <Spinner />}
//         </div>

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {this.state.articles.map((e, index) => {
//                 return (
//                   <div className="col-md-3 col-sm-6" key={index}>
//                     <NewsItems
//                       title={e.title.slice(0, 45)}
//                       description={e.description}
//                       imgUrl={e.urlToImage}
//                       newsUrl={e.url}
//                       author={e.author}
//                       date={e.publishedAt}
//                       source={e.source.name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>
//       </>
//     );
//   }
// }

// export default News;

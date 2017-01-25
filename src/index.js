import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

/**
 * YouTube API Key
 * @type {String}
 */
const API_KEY = 'AIzaSyDQS0SXXljYE3XBMLh8UtYqDgZSRXMELfE';

/**
 * Main application component.
 */
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({
            selectedVideo
          })}
          videos={this.state.videos} />
      </div>
    );
  }

};

/**
 * Mount our application to the DOM
 */
ReactDOM.render(
  <App />,
  document.querySelector(".container")
);

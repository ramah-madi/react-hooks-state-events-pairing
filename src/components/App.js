import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";
import VideoFunctionality from "./VideoFunctionality.js";
import { useState } from "react";
import Comments from "./Comments.js";

function App() {
  const [addvote, setAddVote] = useState(video.upvotes)
  const [downVote, setDownVote] = useState(video.downvotes)
  const [onCommentClick, setOnCommentClick] = useState(false)


  return (
    <div className="App">
      <VideoInfo data={video} />
      <VideoFunctionality upVotes={addvote} 
                          setAddVote={setAddVote}
                          downVote={downVote}
                          setDownVote={setDownVote}
                          onCommentClick={onCommentClick}
                          setOnCommentClick={setOnCommentClick}/>
      <Comments data={video} onCommentClick={onCommentClick}/>
    </div>
    
  );
}

export default App;

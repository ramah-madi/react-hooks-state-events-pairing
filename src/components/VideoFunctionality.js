function VideoFunctionality({upVotes, setAddVote, downVote, setDownVote, onCommentClick, setOnCommentClick }) {
 
    function handleOnCommentClick() {
        if(onCommentClick)
        setOnCommentClick(() => false)
        
        else {
          setOnCommentClick(() => true)
        }
    }

   return (
    <div>
        <button className="upVotes" type="button" onClick={() => {setAddVote(() => upVotes +1)}}>{upVotes} 👍</button>
        <button className="downVotes" type="button" onClick={() => {setDownVote(() => downVote +1) }}>{downVote} 👎</button> <br />
        <button className="comments" type="button" onClick={() => handleOnCommentClick()}>{onCommentClick ? "hide comments" : "show comments"}</button>
        <hr />
    </div>
   )
}

export default VideoFunctionality;
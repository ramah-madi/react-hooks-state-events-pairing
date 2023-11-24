import { useState } from "react"

function Comments({ data, onCommentClick }) {
    const [votes, setVotes] = useState({
        firstUpVote: 278,
        firstDownVote: 3,
        secondUpVote: 543,
        secondDownVote: 2
    })
    const [name, setName] = useState("")
    const [filteredNames, setFilteredNames] = useState(data.comments)

    function handleSearchByName(event) {
          const searchName = event.target.value
          setName(searchName)
        
          const filteredItems = data.comments.filter((comment) => 
                comment.user.toLowerCase().includes(searchName.toLowerCase()))
          setFilteredNames(filteredItems);
          
    }

    function handleRemoveComment(id) {

        const removeItems = filteredNames.filter((comment) => {
               return comment.id !== id
            })
        
        setFilteredNames(() => removeItems)   
    }

    const comments = filteredNames.map((comment) => {
        if(comment.id === 1){
            return (
                <div key={comment.id}>
                  <h3>{comment.user}</h3>
                  <p>{comment.comment}</p>
                  <button className="firstUpVotes" 
                          type="button" 
                          onClick={() => setVotes({...votes, firstUpVote: votes.firstUpVote + 1})}>{votes.firstUpVote} 👍</button>
                  <button className="firstDownVotes" 
                          type="button" 
                          onClick={() => setVotes({...votes, firstDownVote: votes.firstDownVote + 1})}>{votes.firstDownVote} 👎</button> <br/>
                  <button className="firstRemove" type="button" onClick={() => handleRemoveComment(comment.id)}>Remove Comment</button>
                </div>
            )
        }
       else{ 
        return (
            <div key={comment.id}>
              <h3>{comment.user}</h3>
              <p>{comment.comment}</p>
              <button className="secondUpVotes" 
                      type="button" 
                      onClick={() => setVotes({...votes , secondUpVote: votes.secondUpVote + 1})}>{votes.secondUpVote} 👍</button>
              <button className="secondDownVotes" 
                      type="button" 
                      onClick={() => setVotes({...votes , secondDownVote: votes.secondDownVote + 1})}>{votes.secondDownVote} 👎</button> <br/> 
              <button className="seconedRemove" type="button" onClick={() => handleRemoveComment(comment.id)}>Remove Comment</button>
            </div>
        )}
       
    }) 

  
   
    return ( 
    <div>
        <h2>{data.comments.length} Comments</h2>
        {onCommentClick && <input className="search" 
                                  type="search" 
                                  placeholder="search by name..." 
                                  onChange={(e) => handleSearchByName(e)}
                                  value={name}/>}
        <br/>
        {onCommentClick && <button className="sort" onClick={() => filteredNames.sort()}>Sort Comments</button>}
        {onCommentClick && comments}
        
    </div>
    )

}

export default Comments
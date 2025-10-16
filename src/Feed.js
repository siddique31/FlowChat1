import React, { useState } from "react";

function Feed() {
  const [posts, setPosts] = useState(["Welcome to FlowChat!"]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if(newPost.trim() !== "") {
      setPosts([newPost, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div>
      <h2>Feed</h2>
      <input
        type="text"
        placeholder="Write something..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button onClick={addPost}>Post</button>
      <ul>
        {posts.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
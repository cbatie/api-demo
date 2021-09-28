import React, { useEffect, useState } from 'react';

const PersonList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = 'http://ec2-52-23-228-96.compute-1.amazonaws.com:7070/ecoms-api/setup/get_industries/';
    fetch(url).then(res => res.json())
    .then(res => setPosts(res))
  },[])
  
  return (
    <div className="container">
      {posts.message}
      {posts.industries.industry_id}

    </div>
  )
}

export default PersonList

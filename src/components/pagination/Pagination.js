import React, {useState, useEffect} from 'react';
import ShaktimaanSpin from '../shaktimaan/ShaktimaanSpin'; 
import './pagination.css';

function Pagination() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(()=>{
        let timerID;
        const fetchPosts = async ()=>{
            setLoading(true);
            
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res=>res.json())
                .then(json=>{
                    console.log(json);
                    setPosts(json)
                    setLoading(false);
                })
        };

        fetchPosts();

        // return function(){
        //     clearTimeout(timerID)
        // }
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); 

    const handlePaginate = pageNumber => setCurrentPage(pageNumber);

    const Post = ({posts, loading}) => {
        if(loading){
            return <ShaktimaanSpin />
        }
    
        return <div>
                <ul>
                    {posts.map(post=>{
                    return <li key={post.id}>
                        {post.title}
                    </li>
                    })}
                </ul>
            </div>;
    };

    const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    
        const pageNumbers = [];
    
        for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
            pageNumbers.push(i);
        }
    
        return (
          <nav>
              <ul className="paginationn">
                  {pageNumbers.map(number=>{
                      return <li key={number} style={{display:'inline-block'}}>
                         <a onClick={()=>paginate(number)} className={currentPage===number ? "active": ""}>
                             {number}
                         </a>
                      </li>
                  })}
              </ul>
          </nav>
        );
    };

    return (
        <div style={{marginTop:"100px"}}>
           <h1 style={{color:'purple', marginBottom:'10px', textAlign:'center'}}>Mytidbit!</h1>
           <Post posts={currentPosts} loading={loading}/>
           <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={handlePaginate}/>
        </div>

    )
}

export default Pagination;

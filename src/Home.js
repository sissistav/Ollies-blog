import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    return (
        <div>
            {error && <h1>{error}</h1>}
            {isPending && <h1>Loading...</h1>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    )
}

export default Home;
import { Link, useParams } from "react-router-dom";
import parse from 'html-react-parser';
import moment from "moment";
import Comments from "../components/Comments";
import useFetch from "../hooks/useFetch";

export default function PostPage() {
    const { id } = useParams();
    const { loading, error, data } = useFetch(null, id);
    if (error) {
        return <div>Something went wrong!</div>
    }

    if (loading) {
        return <div>Loading</div>
    }

    if (data) {
    document.title=data.title;
    return <div>
        <div className="post-title">{data.title}</div>
        <div className="post-metadata">
            {data.url && 
            <Link to={data.url} 
             className="post-link">Visit Website</Link>}
            <span className="post-author">{data.author}</span>
            <span className="post-time">
              {moment(data.created_at).fromNow()}
            </span>
        </div>
        {data.text && 
        <div className="post-text">
​​​​​​​        {parse(data.text)}</div>}
        <div className="post-comments">
            <div className="comments-label">Comments</div>
            <Comments commentsData={data.children} />
        </div>
    </div>
}
}


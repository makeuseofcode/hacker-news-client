import parse from 'html-react-parser';
import moment from "moment";

export default function Comments({ comments }) {
    return <>
        {comments.map(comment => <Node comment={comment} key={comment.id}
        />)}
    </>
}

function Node({ comment }) {
    return <div className="comment">
        {
            comment.text &&
            <>
                <div className='comment-metadata'>
                    <span>{comment.author}</span>
                    <span>{moment(comment.created_at).fromNow()}</span>
                </div>
                <div className='comment-text'>{parse(comment.text)}</div>
            </>
        }
        <div className='comment-replies'>{(comment.children) && comment.children.map(child => <Node comment={child} key={child.id}/>)}</div>
    </div>
}
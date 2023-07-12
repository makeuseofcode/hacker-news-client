import parse from 'html-react-parser';
import moment from "moment";

export default function Comments({ commentsData }) {
    return <>
        {commentsData.map(commentData => <Node commentData={commentData} key={commentData.id}
        />)}
    </>
}

function Node({ commentData }) {
    return <div className="comment">
        {
            commentData.text &&
            <>
                <div className='comment-metadata'>
                    <span>{commentData.author}</span>
                    <span>{moment(commentData.created_at).fromNow()}</span>
                </div>
                <div className='comment-text'>{parse(commentData.text)}</div>
            </>
        }
        <div className='comment-replies'>{(commentData.children) && commentData.children.map(child => <Node commentData={child} key={child.id}/>)}</div>
    </div>
}
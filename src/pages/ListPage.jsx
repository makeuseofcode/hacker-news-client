import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export default function ListPage() {
    let { type } = useParams();
    const navigate = useNavigate();
    if (!type) type = "news";
    const { loading, error, data } = useFetch(type, null);

    if (error) {
        return <div>Something went wrong!</div>
    }

    if (loading) {
        return <div>Loading</div>
    }

    if (data) {
        document.title = type.toUpperCase();
        return <div>
            <div className='list-type'>{type}</div>
            <div>{data.map(item => <div key={item.id} className="item">
                <div className="item-title" onClick={() => navigate(`/item/${item.id}`)}>{item.title}</div>
                {item.domain && <span className="item-link" onClick={() => open(`${item.url}`)}>({item.domain})</span>}
            </div>)}</div>
        </div>
    }


    // return
}
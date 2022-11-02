import { useState } from "react";
const DetailProductView = () => {
    const [detail, setDetail] = useState({ detail: [] })

    // useEffect(() => {
        
    //     const fetchDetail = async () => {
    //         let detail = await getdetail();
    //         console.log("detail",detail)
    //         setDetail({
    //             detail: detail.data,   
    //         })
    //     }
    //     fetchDetail()

    // }, []);


 return (
    <div>
        <div>
            <img src="https://picsum.photos/id/237/200/300"/>
        </div>
        <div> descitption </div>
        <button> ajouter au panier </button>
        <button> ajouter aux favoris</button>
    </div>
 )
}
export default DetailProductView;
import React, {Fragment, useEffect, useState} from 'react';
import './card.css'

type Data = {
    id: number
    title: string
    thumbnailUrl: string
}

function Articles() {
    const [datas, setDatas] = useState<Data[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then(
                (result) => {
                    setDatas(result.slice(0,3));
                }
            )
    }, []);
    return (
        <div id="articles">
            <div className="container">
                <h1 className="sub-title">Articles</h1>
                <div className="articles-container">
                    {datas.map(data => (
                        <Fragment key={data.id}>
                            <div className="articles">
                                <div className="face face1">
                                    <div className="content">
                                        <p>{data.title}</p>
                                    </div>
                                </div>
                                <div className="face face2" style={{backgroundImage:'url('+data.thumbnailUrl+')'}}>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Articles;
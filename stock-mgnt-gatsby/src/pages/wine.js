import * as React from 'react'

export default function Wine() {

    let items = []
    let [wineTitles, setWineTitles] = React.useState([])
    React.useEffect(async () => {

        let res = await fetch('https://api.sampleapis.com/wines/reds')
        let wines = await res.json()
        for (let i = 0; i < wines.length; i++) {

            items.push(<li>
                <div style={{ width: "40rem", overflow: "hidden" }}>
                    <div style={{ width: "11rem", float: "left" }}><img style={{ width: "10rem", height: "20rem"}} src={wines[i].image} /></div>
                    <div>  <b>{wines[i].winery}</b> - {wines[i].wine}</div>

                        <div>Location: {wines[i].location}</div>
                        <div>Ratings: {wines[i].rating.average}</div>
                        <span>Reviews: {wines[i].rating.reviews}</span>

                </div>
            </li>);
        }

        setWineTitles(items)
    }, [])

    return (
        <>
            <h1>Wine</h1>
            <ul>
                {wineTitles}
            </ul>
        </>
    )
}
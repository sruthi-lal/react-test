import React,{useState} from 'react'

const YoutubeList = () => {
    const[youtubeList,setYoutubeList] = useState([
              {
                  title:'Youtube videos',
                  channel:'Developer view',
                  views:'20,000000',
                  time:'May 1, 2019'

              },
              {
                title:'cooking videos',
                channel:'creating',
                views:'22,000000',
                time:'May 1, 2019'

            },

            {
                title:'learning videos',
                channel:'tech',
                views:'20,000000',
                time:'May 1, 2019'

            },
            {
                title:'art and crafts',
                channel:'Developer',
                views:'20,000000',
                time:'May 1, 2019'

            }




    ])
    return (
        <div>
            {youtubeList.map(yt => (
             <li>{yt.time}</li>
            ))}
        </div>
    )
}

export default YoutubeList

import React,{useState} from 'react'
import YtText from './YtText'

const YoutubeList = () => {
    const[youtubeList,setYoutubeList] = useState([
              {
                  title:'Youtube videos',
                  chanel:'Developer view',
                  views:'20,000000',
                  time:'May 1, 2019'

              },
              {
                title:'cooking videos',
                chanel:'creating',
                views:'22,000000',
                time:'May 1, 2019'

            },

            {
                title:'learning videos',
                chanel:'tech',
                views:'20,000000',
                time:'May 1, 2019'

            },
            {
                title:'art and crafts',
                chanel:'Developer',
                views:'20,000000',
                time:'May 1, 2019'

            }
     ])
    return (
        <div>
            {youtubeList.map(yt => (
                <YtText title={yt.title} />
            ))}
        </div>
    )
}

export default YoutubeList

import React,{useState, useContext} from 'react'
import YtText from './YtText'
import { YtContext } from './YtContext'

const YoutubeList = () => {
   const [youtubeList,setYoutubeList] = useContext(YtContext)
    return (
        <div>
            
            {youtubeList.map(yt => (
                <YtText title={yt.title} chanel={yt.chanel}  />
            ))}
        </div>
    )
}

export default YoutubeList

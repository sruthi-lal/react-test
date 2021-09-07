import React,{useState,createContext} from 'react';

  export const YtContext = createContext();



export const YoutubeProvider = props => {

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


    return(
        <YtContext.Provider value={[youtubeList,setYoutubeList]}>
            
            {props.children}

        </YtContext.Provider>

    );

}
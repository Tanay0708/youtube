import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail,setChannelDetail] = useState(null)
  const [videos,setVideos] = useState([])

  console.log(channelDetail)
  console.log(videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) =>setChannelDetail(data?.items[0]))


    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) =>setVideos(data?.items))
  },[id])


  return (
    <Box minHeight="95vh">
        <Box>
          <div style={{background:' linear-gradient(90deg, rgba(36,108,119,1) 6%, rgba(16,71,100,1) 57%, rgba(17,60,71,1) 88%, rgba(22,63,85,0.7400210084033614) 100%)',
        zIndex:10,
        height:'300px'}} />
          <ChannelCard channelDetail={channelDetail} marginTop='-93px' />
        </Box>
        <Box  display="flex" p='2'>
          <Box sx={{mr: {sm: '100px'}}} />
            <Videos videos={videos} />
       
        </Box>
       
    </Box>
    
  )
}

export default ChannelDetail
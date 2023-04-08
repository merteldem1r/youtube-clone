import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setChannelVideos(data?.items));
  }, [id])

  return (
    <Box>
      <Box>
        <div style={{
          background: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
          xIndex: "10",
          height: "300px",
        }}
        ></div>
        {channelDetail &&
          <ChannelCard channelDetail={channelDetail} marginTop="-115px" />
        }
      </Box>

      <Box display="flex" p="2">
        {/*<Box sx={{ mr: { sm: "100px" } }} />*/}
        {channelVideos && <Videos videos={channelVideos} />}
      </Box>
    </Box>
  );
};

export default ChannelDetail;
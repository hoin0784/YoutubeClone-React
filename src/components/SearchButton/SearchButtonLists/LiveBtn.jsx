import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../../VideoCard/VideoCard';
import { useYoutubeApi } from '../../../context/YoutubeApiContext';

export default function LiveBtn() {
  const { NavId } = useParams();
  const { youtube } = useYoutubeApi();

  const { isLoading, error, data: videos, }
    = useQuery(['videos', NavId], () => youtube.Live());

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}

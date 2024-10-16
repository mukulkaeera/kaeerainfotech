import React, { useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import data from '../../../data/page.json';
import { useRouter } from 'next/router';
import Introdiv from '../../../components/Introdiv';
import webd from '../../../images/webDesiging.png';
import slnWeb from '../../../images/slnWeb-Design.png';
import ContentImageSection from '../../../components/contentimage';
import Loader from '../../Loading';
import Company from '../../../components/Company';
import AppDevelopment from '../../../components/Appdevelop';
import WebDevelopment from '../../../components/Web';

function Index() {
  const router = useRouter();
  const { index } = router.query;
  const [videoData, setVideoData] = useState<any>(null);
  const [web, setWeb] = useState<any>(false);
  const [app, setApp] = useState<any>(false);

  useEffect(() => {
    if (index) {
      const foundData = data.find(item => item.permalink === index);
      setVideoData(foundData);

      // Set web state only when videoData is found
      if (foundData && index === 'web-development') {
        setWeb(true);
      } else {
        setWeb(false);
      }

      if (foundData && index === 'app-development') {
        setApp(true);
      } else {
        setApp(false);
      }
    }
  }, [index]);
  if (!videoData) {
    return <div><Loader /></div>; // Show a loading message while waiting for data
  }

  const videoUrl = videoData.video || '';
  const videoTitle = videoData.title || 'Video not found';
  const videoDescription = videoData.description || '';
  const second = videoData.seconfbannerimageurl || '';
  const secondcontent = videoData.secondbannercontent || '';
  const head = videoData.secondbannerhead || '';
  const thirdhead = videoData.thirdhead || '';
  const thirdcontent = videoData.thirdcontent || '';
  const fourthhead = videoData.fourthhead || '';
  const fourthcontent = videoData.fourthcontent || '';

  return (
    <div>
      {/* Use the videoUrl as a key prop to force re-render */}
      <Banner key={videoUrl} src={videoUrl} title={videoTitle} description={videoDescription} />
      {web && <Company />}
      <ContentImageSection imagePosition="right" image={webd} title={thirdhead} description={thirdcontent} />

      {web && <WebDevelopment />}
      {app && <AppDevelopment />}
      <Introdiv image={second} data={secondcontent} head={head} />

      <ContentImageSection imagePosition="left" image={slnWeb} title={fourthhead} description={fourthcontent} />
    </div>
  );
}

export default Index;

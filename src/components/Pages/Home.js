import React from 'react';
import moment from 'moment';
import glamorous from 'glamorous';
import Carousel from '../Widgets/Carousel';
import Ad from '../Widgets/Ad';
import PostSummary from '../Widgets/PostSummary';
import carouselConfig from '../../configs/carousel.json';
import postsConfig from '../../configs/posts.json';

const importAll = r => {
  return r.keys().reduce((acc, curr) => {
    return {
      ...acc,
      [curr.replace('./', '')]: r(curr),
    };
  }, {});
};

const ContentContainer = glamorous.div({ padding: '30px 78px' });

// determine carousel image location here
const carouselImages = importAll(
  require.context('../../assets/carousel', false, /\.(png|jpe?g|svg)$/)
);

const Home = () => {
  const dateSortedPosts = Object.values(postsConfig)
    .map(post => ({ ...post, date: moment(post.date) }))
    .sort((a, b) => {
      if (a.date.isAfter(b.date)) {
        return -1;
      }
      if (a.date.isBefore(b.date)) {
        return 1;
      }
      return 0;
    });

  return (
    <div>
      <Carousel items={Object.values(carouselConfig)} images={carouselImages} />
      <ContentContainer>
        <Ad height="92px" width="732px" style={{ marginBottom: '30px' }} />
        {dateSortedPosts.map((post, i) => {
          const formattedDate = post.date.format('MM/DD/YYYY @ h:mm a');
          return <PostSummary key={i} {...post} date={formattedDate} />;
        })}
      </ContentContainer>
    </div>
  );
};

export default Home;

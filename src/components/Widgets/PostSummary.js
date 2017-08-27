import React from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';
import Tag from './Tag';

const SummaryContainer = glamorous.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  '& + div': { marginTop: '16px' },
});
const SummaryImage = glamorous.img({
  backgroundColor: '#7d7d7d',
  height: '160px',
  width: '160px',
  ':hover': { cursor: 'pointer' },
});
const ImagePlaceholder = glamorous.div({
  backgroundColor: '#7d7d7d',
  height: '160px',
  width: '160px',
});
const ImageContainer = glamorous.div({
  width: '160px',
});
const TextContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  padding: '0px 28px',
  height: '160px',
  justifyContent: 'space-between',
});
const SummaryHeader = glamorous(Link, { rootEl: 'a', forwardProps: ['to'] })({
  display: 'inline-block',
  color: '#58c10b',
  margin: '0px 0px 11px',
  fontSize: '24px',
  fontWeight: 'bold',
  textDecoration: 'none',
});
const SummaryDescription = glamorous.p({
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#000000',
  margin: '0px',
});
const PostDetails = glamorous.span({
  fontSize: '14px',
  color: '#919191',
});
const Green = glamorous.span({
  color: '#58c10b',
});

const PostSummary = ({
  title,
  description,
  type,
  image,
  author,
  date,
  commentCount,
}) => {
  return (
    <SummaryContainer>
      <ImageContainer>
        <Link to={process.env.PUBLIC_URL + '/games'}>
          {image ? <SummaryImage src={image} /> : <ImagePlaceholder />}
        </Link>
        <Tag
          type={type}
          style={{ margin: '0 auto', position: 'relative', top: '-17px' }}
        />
      </ImageContainer>
      <TextContainer>
        <div>
          <SummaryHeader to={process.env.PUBLIC_URL + '/games'}>
            {title}
          </SummaryHeader>
          <SummaryDescription>
            {description}
          </SummaryDescription>
        </div>
        <PostDetails>
          By <Green>{author}</Green> &#8226; {date} &#8226;{' '}
          <Green>{commentCount} Comments</Green>
        </PostDetails>
      </TextContainer>
    </SummaryContainer>
  );
};

export default PostSummary;

import Carousel from 'better-react-carousel';
import React, { useEffect } from 'react';

import { useGetProgramsQuery } from '../../graphql';
import { SlideShowArrow } from './Arrow';
import { Wrapper } from './styles';
import { Thumbnail } from './Thumbnail';
import { SLIDESHOW_GAP, SLIDESHOW_TITLE_HEIGHT } from './Thumbnail/styles';

const SLIDESHOW_THUMBNAIL_WIDTH = 220;
const SLIDESHOW_FIRST_LIMIT = 6 * 3;

export const SLIDESHOW_PADDING_RIGHT = SLIDESHOW_GAP;
export const SLIDESHOW_HEIGHT = 293;
export const SLIDESHOW_NB_ROWS = 6;

export const SlideShow = () => {
  const { data, error, loading } = useGetProgramsQuery({
    variables: {
      limit: SLIDESHOW_FIRST_LIMIT,
      offset: 0,
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    console.log('loading ...', loading);
  }, [loading]);

  return (
    <Wrapper
      maxWidth={
        (SLIDESHOW_GAP + SLIDESHOW_THUMBNAIL_WIDTH) * SLIDESHOW_NB_ROWS +
        SLIDESHOW_GAP * 2
      }
    >
      {data?.program?.length && (
        <Carousel
          arrowLeft={<SlideShowArrow direction="left" />}
          arrowRight={<SlideShowArrow direction="right" />}
          cols={SLIDESHOW_NB_ROWS}
          containerStyle={{
            height: SLIDESHOW_HEIGHT + SLIDESHOW_TITLE_HEIGHT + SLIDESHOW_GAP * 2,
          }}
          rows={1}
          gap={0}
          loop
        >
          {data.program.map(({ id, name, thumnail }) => (
            <Carousel.Item key={id}>
              <Thumbnail {...thumnail} name={name} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Wrapper>
  );
};

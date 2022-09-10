import Carousel from 'better-react-carousel';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Loader from '../../assets/loader.svg';
import type { Program } from '../../graphql';
import { useGetProgramsQuery } from '../../graphql';
import type { SlideShowArrowProps } from './Arrow';
import { SlideShowArrow } from './Arrow';
import { LoadingWrapper, Wrapper } from './styles';
import { Thumbnail } from './Thumbnail';
import { SLIDESHOW_GAP, SLIDESHOW_TITLE_HEIGHT } from './Thumbnail/styles';

export const SLIDESHOW_PADDING_RIGHT = SLIDESHOW_GAP;
export const SLIDESHOW_HEIGHT = 293;
export const SLIDESHOW_NB_ROWS = 6;

const SLIDESHOW_THUMBNAIL_WIDTH = 220;
const SLIDESHOW_FIRST_LIMIT = SLIDESHOW_NB_ROWS * 3;

export const SlideShow = () => {
  const offsetRef = useRef(0);
  const [slideViewIndex, setSlideViewIndex] = useState(0);
  const [programList, setProgramList] = useState<Program[]>([]);

  const { data, loading } = useGetProgramsQuery({
    variables: {
      limit: SLIDESHOW_FIRST_LIMIT,
      offset: offsetRef.current,
    },
  });

  const handleArrowClick = useCallback(
    ({ direction }: Pick<SlideShowArrowProps, 'direction'>) => {
      setSlideViewIndex((currentSlideViewIndex) => {
        // Left direction
        if (direction === 'left') {
          const doesLeftLimitHasBeenReached =
            !programList.length ||
            (!currentSlideViewIndex && programList.length > SLIDESHOW_NB_ROWS);

          const newSlideViewIndex = !doesLeftLimitHasBeenReached
            ? currentSlideViewIndex - 1
            : programList.length / SLIDESHOW_NB_ROWS - 1;

          return newSlideViewIndex;
        }

        // Right direction
        const doesRightLimitHasBeenReached =
          !programList.length ||
          (currentSlideViewIndex + 1) * SLIDESHOW_NB_ROWS === programList.length;

        const newSlideViewIndex = !doesRightLimitHasBeenReached
          ? currentSlideViewIndex + 1
          : 0;

        // Update offset to fetch next programs
        if (
          !doesRightLimitHasBeenReached &&
          (newSlideViewIndex === 1 || newSlideViewIndex % 2 === 0)
        ) {
          offsetRef.current = programList.length;
        }

        return newSlideViewIndex;
      });
    },
    [programList],
  );

  useEffect(() => {
    if (data?.program?.length) {
      setProgramList((currentData) => [...currentData, ...data.program] as Program[]);
    }
  }, [data]);

  return (
    <Wrapper
      maxWidth={
        (SLIDESHOW_GAP + SLIDESHOW_THUMBNAIL_WIDTH) * SLIDESHOW_NB_ROWS +
        SLIDESHOW_GAP * 2
      }
    >
      {loading && !programList.length ? (
        <LoadingWrapper>
          <img src={Loader} alt="Loading icon" />
          <p>Chargement des programmes...</p>
        </LoadingWrapper>
      ) : !programList.length ? (
        <p>Pas de programmes disponible.</p>
      ) : (
        <Carousel
          arrowLeft={<SlideShowArrow direction="left" onArrowClick={handleArrowClick} />}
          arrowRight={
            <SlideShowArrow
              direction="right"
              isLoading={
                loading && slideViewIndex === programList.length / SLIDESHOW_NB_ROWS - 2
              }
              onArrowClick={handleArrowClick}
            />
          }
          cols={SLIDESHOW_NB_ROWS}
          containerStyle={{
            height: SLIDESHOW_HEIGHT + SLIDESHOW_TITLE_HEIGHT + SLIDESHOW_GAP * 2,
          }}
          rows={1}
          gap={0}
        >
          {programList.map(({ id, name, thumnail }) => (
            <Carousel.Item key={id}>
              <Thumbnail {...thumnail} name={name} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Wrapper>
  );
};

import React, { FC, useEffect, useMemo, useState } from 'react';

import ImageBreak from '../../../assets/image-break.svg';
import Loader from '../../../assets/loader.svg';
import More from '../../../assets/more.svg';
import type { Image, Program } from '../../../graphql';
import { capitalizeFirstLetter } from '../../../utils/string';
import { SLIDESHOW_HEIGHT } from '../index';
import { Card, LoadingCard, MoreBtn, Title, Wrapper } from './styles';

interface ThumbnailProps
  extends Pick<Image, 'alt' | 'id' | 'url'>,
    Pick<Program, 'name'> {}

export const Thumbnail: FC<ThumbnailProps> = ({ alt, id, name, url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const capitalizedName = useMemo(() => capitalizeFirstLetter(name), [name]);

  return (
    <Wrapper>
      {isLoading && (
        <LoadingCard height={SLIDESHOW_HEIGHT}>
          <img src={Loader} alt="Loading icon" />
        </LoadingCard>
      )}

      <div>
        <Card
          height={SLIDESHOW_HEIGHT}
          onClick={() => {
            alert(`Show the program page :\n\n- Id: ${id}\n- Name: "${name}"`);
          }}
        >
          <MoreBtn
            onClick={(event) => {
              event.stopPropagation();
              alert(`Show details of program ${id}`);
            }}
          >
            <img alt="Show details icon" src={More} width="100%" />
          </MoreBtn>
          <img
            alt={alt}
            id={id}
            src={url}
            width="100%"
            onLoad={() => {
              setIsLoading(false);
            }}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = ImageBreak;
              currentTarget.width = 96;
            }}
          />
        </Card>

        <Title>{capitalizedName}</Title>
      </div>
    </Wrapper>
  );
};

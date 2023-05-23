/* eslint-disable @typescript-eslint/indent */
import styled from '@emotion/styled';
import { Title } from '@mantine/core';
import { HEADING_ORDER } from '@/constants';
import { HeadingProps } from '.';

export const StyledHeading = styled(Title)<Pick<HeadingProps, 'order'>>`
  ${({ order }) => {
    switch (order) {
      case HEADING_ORDER.H1:
        return 'font-size:28px; line-height: 34px;';
      case HEADING_ORDER.H2:
        return 'font-size:20px; line-height: 24px;';
    }
  }}

  @media(max-width:950px) {
    ${({ order }) => {
      switch (order) {
        case HEADING_ORDER.H1:
          return 'font-size:26px; line-height: 32px';
        case HEADING_ORDER.H2:
          return 'font-size:18px; line-height: 22px;';
      }
    }}
  }

  @media (max-width: 700px) {
    ${({ order }) => {
      switch (order) {
        case HEADING_ORDER.H1:
          return 'font-size:23px; line-height: 28px';
      }
    }}
  }

  @media (max-width: 550px) {
    ${({ order }) => {
      switch (order) {
        case HEADING_ORDER.H1:
          return 'font-size:21px; line-height: 28px';
      }
    }}
  }
`;

import styled from 'styled-components';
import { Container as DefaultContainer } from '@/styles/pages/dashboard/styles';

export const Container = styled(DefaultContainer)`
  margin-bottom: 1.5rem;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-template-areas: "position user challenges xp";
  grid-template-columns: 72px 1fr 189px 189px;
  grid-template-rows: 1fr;

  margin-bottom: .5rem;

  font-weight: 500;
  font-size: 1rem;
  color: var(--text);

  .position{
    grid-area: position;
  }

  .user{
    grid-area: user;
    padding-left: 1.5rem;
  }

  .challenges{
    grid-area: challenges;
  }

  .xp{
    grid-area: xp;
  }

  .header-list{
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;

    color: var(--text);
    opacity: 0.5;
  }

  .item{
    display: flex;
    background: var(--white);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    align-items: center;

    span{
      color: var(--blue);
      padding-right: .4rem;
    }

    > div {
      display: flex;
      flex-direction: row;

      > img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-right: 1rem;
      }

      .data{
        display: flex;
        flex-direction: column;
        align-self: center;

        .name{
          color: var(--title);
          font-size: 1.25rem;
          margin-bottom: .45rem;
        }

        .level{
          font-weight: 400;

          img{
            height: 14px;
            width: 14px;
            margin-right: .5rem;
          }
        }
      }
    }

    &.position{
      flex-direction: column;
      align-items: center;

      padding: 2.125rem 0;
      margin-right: 4px;

      font-size: 1.5rem;
    }
  }
`;

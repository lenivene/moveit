import styled from "@emotion/styled";

export const Container = styled.div`
  display:flex;
  flex-direction: row;

  align-items:center;
`;

export const PictureProfile = styled.img`
  width:5.5rem;
  height:5.5rem;

  border-radius: 50%;
`;

export const DetailsContainer = styled.div`
  margin-left: 1.5rem;
`;

export const NameText = styled.strong`
  font-size: 1.5rem;
  font-weight: 600;

  color:var(--title);
`;

export const LevelValue = styled.p`
  font-size:1rem;
  margin-top: 0.5rem;

  img{
    margin-right: 0.5rem;
  }
`;
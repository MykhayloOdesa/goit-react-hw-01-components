import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 300px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 30px 5px rgba(161, 90, 90, 0.75);
  border-radius: 5px;
`;

export const UserThumb = styled.div`
  width: 150px;
  overflow: hidden;
`;

export const UserAvatar = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-weight: 900;
  text-align: center;
`;

export const UserTag = styled.p`
  text-align: center;
`;

export const UserLocation = styled.p`
  text-align: center;
`;

export const UserStats = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & li {
    border: 1px solid tomato;
    width: 100%;
    border-radius: 10px;
  }
`;

export const StatsLabel = styled.span`
  display: block;
  text-align: center;
`;

export const StatsQuantity = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
`;

import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding-left: 100px;
  gap: 20px;
`;

export const FriendStatus = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ typeName }) => {
    return typeName ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`
  width: 100px;
  height: 100px;
`;

export const FriendName = styled.p`
  font-weight: 900;
`;

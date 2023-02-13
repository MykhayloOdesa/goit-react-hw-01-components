import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: 400px;
  margin: 50px auto;
  padding: 5px;

  box-shadow: 0px 0px 30px 5px rgba(161, 90, 90, 0.75);
  border-radius: 5px;
`;

export const StatisticsTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  border: 1px solid tomato;
  width: 100%;
  border-radius: 10px;
  background-color: ${() => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }};
`;

export const StatisticsLabel = styled.span`
  display: block;
  text-align: center;
`;

export const StatisticsPercentage = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
`;

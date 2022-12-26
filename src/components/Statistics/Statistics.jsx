import StyledItem from './StatisticItem.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <StyledItem className="Feedback__item">God : {good}</StyledItem>
      <StyledItem className="Feedback__item">Neutral : {neutral}</StyledItem>
      <StyledItem className="Feedback__item">Bad : {bad}</StyledItem>
      <StyledItem className="Feedback__item">Total : {total}</StyledItem>
      <StyledItem className="Feedback__item">
        Positive Feedback : {positivePercentage}
      </StyledItem>
    </>
  );
}

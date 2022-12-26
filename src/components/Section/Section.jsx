import StyledTitle from './Title.styled';

export default function Section({ title, children }) {
  return (
    <section>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </section>
  );
}

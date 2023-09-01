interface IFormTitleProps {
  title: string;
}

export const Form = (props: IFormTitleProps): JSX.Element => {
  const { title } = props;
  return <h1>{title}</h1>;
};

type Props = {
  children: React.ReactNode;
};
export const Container = ({ children }: Props) => {
  return <div className="max-w-[1160px] px-[15px] mx-auto">{children}</div>;
};

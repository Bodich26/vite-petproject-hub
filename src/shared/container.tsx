type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Container = ({ children, className }: Props) => {
  return (
    <div className={`max-w-[1160px] px-[15px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

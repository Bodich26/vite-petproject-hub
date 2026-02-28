type Props = {
  tech: string;
};

export const TechItem = ({ tech }: Props) => {
  return (
    <span className="cursor-pointer px-5 py-3 border border-purple-700 rounded-lg hover:bg-purple-700/20 transition-colors duration-200">
      {tech}
    </span>
  );
};

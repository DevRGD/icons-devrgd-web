import { parseIconClasses } from '../lib/parser';

interface AlphabetProps {
  letter: string;
  className?: string;
}

export function Alphabet({ letter, className }: AlphabetProps) {
  const chars = letter ? letter.toUpperCase() : '';
  const { containerClasses, svgClasses: textClasses } = parseIconClasses(className);

  return (
    <span className={`inline-flex items-center justify-center ${containerClasses}`}>
      <span className={`font-semibold leading-none ${textClasses}`}>{chars}</span>
    </span>
  );
}

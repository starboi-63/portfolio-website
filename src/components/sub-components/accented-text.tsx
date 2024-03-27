interface accentedTextProps {
  text: string;
  className?: string; // all text
  accentClassName: string; // accented text
  defaultClassName?: string; // non-accented text
}

// text enclosed in curly braces will be styled with accentClassName
export default function AccentedText(props: accentedTextProps) {
  return (
    <div className={props.className}>
      {props.text.split(/({|})/).map((substring, index, array) => {
        if (index > 0 && array[index - 1] === "{") {
          return (
            <span key={index} className={props.accentClassName}>
              {substring}
            </span>
          );
        } else if (substring === "{" || substring === "}") {
          return null;
        } else {
          return (
            <span key={index} className={props.defaultClassName}>
              {substring}
            </span>
          );
        }
      })}
    </div>
  );
}

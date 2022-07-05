import { TitleType } from '../types/TitleType';

export default function renderTitle(
  title: string | TitleType | JSX.Element,
  Template?: React.ComponentType<any>
) {
  if (!title) return null;
  if (typeof title === 'string') {
    return (
      <>
        {Template ? (
          <Template>{title}</Template>
        ) : (
          <>
            <h2 className={`${'text-base md:text-2xl lg:text-3xl '}`}>
              {title}
            </h2>
          </>
        )}
      </>
    );
  }
  if ((title as TitleType).text) {
    return (
      <>
        {Template ? (
          <Template>{(title as TitleType).text}</Template>
        ) : (
          <>
            <h2
              className={`${
                (title as TitleType).className ??
                'text-base md:text-2xl lg:text-3xl '
              }`}
            >
              {(title as TitleType).text}
            </h2>
          </>
        )}
      </>
    );
  }
  return <>{title}</>;
}

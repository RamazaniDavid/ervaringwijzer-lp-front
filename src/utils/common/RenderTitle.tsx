export default function renderTitle(
  title: string | JSX.Element,
  Template?: React.ComponentType<any>
) {
  return (
    <>
      {typeof title === 'string' ? (
        <>
          {Template ? (
            <Template>{title}</Template>
          ) : (
            <>
              <h2 className="text-base md:text-2xl">{title}</h2>
            </>
          )}
        </>
      ) : (
        title
      )}
    </>
  );
}

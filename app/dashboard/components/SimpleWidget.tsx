export const SimpleWidget = ({
  title,
  Icon,
  number,
  subtitle,
}: {
  title: string;
  Icon?: any;
  number?: number;
  subtitle?: string;
}) => {
  return (
    <div className="h-full rounded-2xl bg-blue-950 pt-4 px-6 bg-opacity-50 flex flex-col w-full">
      <div className="flex pb-2 pt-1 text-2xl">
        {Icon && (
          <div className="p-1 pr-3">
            <Icon color="#FFF" />
          </div>
        )}
        <div>
          {title}
          {subtitle && (
            <span className="text-sm relative -left-36 top-5 ">{subtitle}</span>
          )}
        </div>
      </div>
      <div className="w-100  pb-4  pt-6 text-4xl text-center">{number} %</div>
    </div>
  );
};

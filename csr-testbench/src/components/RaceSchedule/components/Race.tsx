export const Race = ({ date, name, subtitle }: Props) => {
  const renderDetails = () => (
    <div className="flex flex-col justify-center items-end">
      <div className="flex justify-center items-center gap-2">
        <img
          alt="Calendar icon"
          src="/icons/calendar-icon.svg"
          className="pb-[0.1rem]"
        />
        <span className="text-3xl font-bold text-[#91BFA3]">{date}</span>
      </div>
      <a className="flex justify-center items-center gap-1 cursor-pointer">
        <span className="text-lg text-[#91BFA3]">See more</span>
        <img alt="External Link icon" src="/icons/external-link-icon.svg" />
      </a>
    </div>
  );

  const renderDivider = () => (
    <div className="flex justify-center items-center w-full">
      <div className="w-[70%] h-1 bg-[#91BFA3] rounded-full" />
    </div>
  );

  const renderName = () => (
    <div className="flex flex-col justify-center items-start">
      <h2 className="text-5xl font-bold text-[#D12219]">{name}</h2>
      <h3 className="text-xl text-[#91BFA3]">{subtitle}</h3>
    </div>
  );

  return (
    <div className="grid grid-cols-[35%_15%_60%] w-full justify-center items-center my-3">
      {renderDetails()}
      {renderDivider()}
      {renderName()}
    </div>
  );
};

type Props = {
  date: string;
  name: string;
  subtitle: string;
};

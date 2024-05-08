import { Tab, Tabs } from "@nextui-org/react";

export const ForecastsBar = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        variant={"light"}
        radius={"full"}
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0  border-divider",
          cursor:
            "w-full bg-blue-500 text-[#FFFFFF] group-data-[selected=true]:bg-[#FFFFFF]",
          tab: "max-w-fit px-5 h-12",
          tabContent:
            "group-data-[selected=true]:text-[#000000]  text-xl text-[#FFFFFF]",
        }}
        aria-label="Tabs variants"
      >
        <Tab key="photos" title="Aujourd'hui" />
        <Tab key="music" title="Demain" />
        <Tab key="videos" title="Prévisions 5 jours" />
      </Tabs>
    </div>
  );
};

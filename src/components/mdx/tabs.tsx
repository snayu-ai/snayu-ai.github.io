"use client";
import React from "react";

const TabButton = ({ activeTab, label, onClick }: { activeTab: string; label: string; onClick: (label: string) => void; }) => {
  const handleClick = () => onClick(label);

  return (
    <li onClick={handleClick} className="">
      <div
        className={`inline-block list-none py-2 px-2 cursor-pointer border-b-[1.5px] font-semibold transition-all duration-150  text-sm ${
          activeTab === label
            ? "border-blue-500 text-blue-500"
            : "border-transparent text-muted-foreground hover:text-primary"
        }`}
      >
        {label}
      </div>
    </li>
  );
};

/**
 * Dummy element, needed for `<Tabs/>` component to work properly
 */
export const Tab = ({ children }: {children: any}) => children;

/**
 * @example
 * <Tabs>
 *   <Tab label="Tab1">Tab 1 content...</Tab>
 *   <Tab label="Tab2">Tab 2 content...</Tab>
 * </Tabs>
 */
export const Tabs = ({ children }: {children: any}) => {
  const [activeTab, setActiveTab] = React.useState(children[0].props.label);

  return (
    <div className="flex flex-col gap-0 mt-4 tab-container rounded-lg border border-border overflow-hidden">
      <div className="">
        <ol className="flex bg-gray-200 dark:bg-muted px-2 pb-0">
          {children.map((child: any) => {
            const { label } = child.props;
            return (
              <TabButton
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={setActiveTab}
              />
            );
          })}
        </ol>
        <div className="overflow-hidden">
          {children.map((child: any) => {
            if (child.props.label !== activeTab) {
              return;
            }
            return child.props.children;
          })}
        </div>
      </div>
    </div>
  );
};

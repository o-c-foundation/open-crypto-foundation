import React, { ReactNode } from 'react';

interface Tab {
  id: string;
  name: string;
  icon?: ReactNode;
}

interface TabLayoutProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  children: ReactNode;
  tabPosition?: 'side' | 'top';
}

export default function TabLayout({
  tabs,
  activeTab,
  onTabChange,
  children,
  tabPosition = 'side'
}: TabLayoutProps) {
  // Side tabs (vertical) layout
  if (tabPosition === 'side') {
    return (
      <div className="flex flex-col md:flex-row gap-6">
        {/* Tab navigation sidebar */}
        <div className="w-full md:w-1/4 bg-gray-900 rounded-lg overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`w-full text-left py-4 px-5 border-l-4 transition-all duration-200 ease-in-out flex items-center ${
                activeTab === tab.id
                  ? 'bg-gray-800 border-purple-500 text-white'
                  : 'border-transparent text-gray-400 hover:bg-gray-800 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              {tab.icon && <span className="mr-3">{tab.icon}</span>}
              <span className="font-medium">{tab.name}</span>
            </button>
          ))}
        </div>
        
        {/* Content area */}
        <div className="w-full md:w-3/4">
          {children}
        </div>
      </div>
    );
  }
  
  // Top tabs (horizontal) layout
  return (
    <div className="space-y-6">
      {/* Tab navigation bar */}
      <div className="border-b border-gray-700">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`inline-flex items-center py-4 px-4 text-sm font-medium text-center border-b-2 ${
                activeTab === tab.id
                  ? 'text-white border-purple-500'
                  : 'text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content area */}
      <div>
        {children}
      </div>
    </div>
  );
} 
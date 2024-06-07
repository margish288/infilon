import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import TabContent1 from "./Tab1";
import TabContent2 from "./Tab2";
import TabContent3 from "./Tab3";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <Box>
        {activeTab === 0 && <TabContent1 />}
        {activeTab === 1 && (
          <TabContent2 onNavigateToTab3={() => setActiveTab(2)} />
        )}
        {activeTab === 2 && <TabContent3 />}
      </Box>
    </Box>
  );
};

export default TabsComponent;

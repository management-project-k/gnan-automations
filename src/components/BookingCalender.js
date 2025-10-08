'use client';

import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function BookingCalendar() {
  const { theme } = useTheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "gnan-automations",
        embedLibUrl: "https://cal.id/embed-link/embed.js"
      });
      
      cal("ui", {
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#146EF5",
            "cal-bg": "#FFFFFF",
            "cal-text": "#000000",
            "cal-border": "#CCCCCC",
            "cal-bg-emphasis": "#F5F5F5",
          },
          dark: {
            "cal-brand": "#60A5FA",
            "cal-bg": "#1E1E1E",
            "cal-text": "#FFFFFF",
            "cal-border": "#444444",
            "cal-bg-emphasis": "#2A2A2A",
          }
        },
        theme: theme === 'black' ? 'dark' : 'light',
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, [theme]);

  return (
    <div style={{
      background: theme === 'black' ? '#1E1E1E' : '#FFFFFF',
      border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
      borderRadius: '12px',
      overflow: 'hidden',
      minHeight: '600px',
    }}>
      <Cal
        namespace="gnan-automations"
        calLink="gnan-automations/lab-visit-slot"  // Replace with your actual Cal.com link
        style={{
          width: "100%",
          height: "100%",
          minHeight: "600px",
          overflow: "scroll"
        }}
        config={{
          layout: "month_view",
          theme: theme === 'black' ? 'dark' : 'light'
        }}
        calOrigin="https://cal.com"
        embedJsUrl="https://cal.id/embed-link/embed.js"
      />
    </div>
  );
}

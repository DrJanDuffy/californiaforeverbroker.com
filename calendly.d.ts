declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (opts: {
        url: string;
        text?: string;
        color?: string;
        textColor?: string;
        branding?: boolean;
      }) => void;
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export {};

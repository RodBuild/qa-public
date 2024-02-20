declare const browserResizeWindow: (view?: 'desktop' | 'tablet' | 'mobile', size?: {
    width?: number;
    height?: number;
}) => Promise<void>;
declare const browserGetTitle: () => Promise<string>;
declare const browserGetDescription: () => Promise<string>;
export { browserResizeWindow, browserGetTitle, browserGetDescription };

export type Audience = "engineering" | "founder";

type PlausiblePayload = {
  props?: Record<string, string>;
};

declare global {
  interface Window {
    plausible?: (eventName: string, payload?: PlausiblePayload) => void;
  }
}

function track(eventName: string, props?: Record<string, string>) {
  if (typeof window === "undefined" || !window.plausible) {
    return;
  }

  window.plausible(eventName, props ? { props } : undefined);
}

export function trackAudienceSelect(audience: Audience) {
  track("audience_select", { audience });
}

export function trackApplyClick(location: string) {
  track("apply_click", { location });
}

export function trackFormSubmit(audience: string) {
  track("form_submit", { audience });
}

import { EndpointCard } from "./onboarding-link-setup-endpoint-card";
import { onboardingEndpointCards } from "./onboarding-link-setup-endpoint-data";

export function OnboardingEndpointCards() {
  return (
    <div className="space-y-4">
      {onboardingEndpointCards.map((endpoint) => (
        <EndpointCard key={`${endpoint.path}-${endpoint.method}`} {...endpoint} />
      ))}
    </div>
  );
}

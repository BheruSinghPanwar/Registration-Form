import { useState } from "react";

interface TransitionState {
  isTransitioning: boolean;
  startTransition: () => void;
  endTransition: () => void;
}

const usePageTransition = (): TransitionState => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = () => setIsTransitioning(true);
  const endTransition = () => setIsTransitioning(false);

  return { isTransitioning, startTransition, endTransition };
};

export default usePageTransition;

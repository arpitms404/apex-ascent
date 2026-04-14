import { useEffect, useState } from "react";

export function useCountUp(target: number, trigger: boolean, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    }
    requestAnimationFrame(tick);
  }, [trigger, target, duration]);

  return value;
}

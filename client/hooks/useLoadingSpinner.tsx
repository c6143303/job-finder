import Portal from "components/custom/Portal";
import LoadingSpinner from "components/loadingSpinner/LoadingSpinner";
import { useState } from "react";

export default function useFetching() {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const html = isFetching && (
    <Portal>
      <div style={{ position: "fixed", right: "10px", top: "10px" }}>
        <LoadingSpinner />
      </div>
    </Portal>
  );

  return {
    html,
    isFetching,
    setIsFetching,
  };
}

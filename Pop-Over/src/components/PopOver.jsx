import { useEffect, useRef, useState } from "react";

function PopOver({
  isOpen,
  onClose,
  anchorRef,
  placement = "bottom-left",
  children,
}) {
  const popoverRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isOpen || !anchorRef?.current) return;

    const rect = anchorRef.current.getBoundingClientRect();
    const gap = 4; // small offset between anchor and popover

    let top, left;

    switch (placement) {
      case "bottom-left":
        top = rect.bottom + window.scrollY + gap;
        left = rect.left + window.scrollX;
        break;
      case "bottom-right":
        top = rect.bottom + window.scrollY + gap;
        left = rect.right + window.scrollX; // will offset from right edge below via transform
        break;
      case "top-left":
        top = rect.top + window.scrollY - gap;
        left = rect.left + window.scrollX;
        break;
      case "top-right":
        top = rect.top + window.scrollY - gap;
        left = rect.right + window.scrollX;
        break;
      case "left":
        top = rect.top + window.scrollY;
        left = rect.left + window.scrollX - gap;
        break;
      case "right":
        top = rect.top + window.scrollY;
        left = rect.right + window.scrollX + gap;
        break;
      default:
        top = rect.bottom + window.scrollY + gap;
        left = rect.left + window.scrollX;
    }

    setCoords({ top, left });
  }, [isOpen, anchorRef, placement]);

  // For placements that should hang off the right/top edge instead of the left/bottom,
  // we shift the popover backwards by its own width/height using a transform.
  const getTransform = () => {
    switch (placement) {
      case "bottom-right":
      case "top-right":
        return "translateX(-100%)";
      case "top-left":
        return "translateY(-100%)";
      case "left":
        return "translateX(-100%)";
      default:
        return "none";
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        anchorRef?.current &&
        !anchorRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef]);

  return (
    <>
      {isOpen && (
        <div
          ref={popoverRef}
          style={{
            position: "absolute",
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            transform: getTransform(),
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default PopOver;

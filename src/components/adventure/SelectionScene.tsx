export const SelectionScene = () => {
  return (
    <div className="selection-scene absolute inset-0 overflow-hidden">
      <div className="selection-stage-grid absolute inset-0" />
      <div className="selection-sun" />
      <div className="selection-cloud left-[6%] top-[14%] h-8 w-20 animate-float" />
      <div className="selection-cloud right-[8%] top-[19%] h-7 w-16 animate-float [animation-delay:1.2s]" />
      <div className="selection-cloud left-[24%] top-[26%] h-6 w-14 animate-float [animation-delay:2s]" />
      <div className="selection-hill selection-hill-back left-[-6%] bottom-[34%] h-36 w-48" />
      <div className="selection-hill selection-hill-back right-[-8%] bottom-[33%] h-32 w-52" />
      <div className="selection-hill selection-hill-front left-[-10%] bottom-[20%] h-32 w-52" />
      <div className="selection-hill selection-hill-front right-[-10%] bottom-[18%] h-32 w-56" />
      <div className="selection-ground" />
      <div className="stage-path stage-path-left" />
      <div className="stage-path stage-path-center" />
      <div className="stage-path stage-path-right" />
      <div className="question-island left-[8%] top-[36%]">
        <span className="question-island-block">?</span>
      </div>
      <div className="question-island right-[7%] top-[34%]">
        <span className="question-island-block">?</span>
      </div>
      <div className="question-island left-1/2 top-[20%] -translate-x-1/2">
        <span className="question-island-block">!</span>
      </div>
    </div>
  );
};

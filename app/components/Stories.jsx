import { useRef, useEffect, useCallback, useState } from "react";
import Story from "./Story";
import StoryThumbnail from "./StoryThumbnail";

import { AnimatePresence, motion } from "framer-motion";

const Stories = ({ stories }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const activeStory = stories[activeStoryIndex];
  const isModalOpenRef = useRef(false);

  const handleKeyPress = useCallback((e) => {
    if (e.key === "Escape") {
      handleModalClose();
    }
  }, []);

  const handleModalOpen = (index) => {
    isModalOpenRef.current = true;
    setActiveStoryIndex(index);
    window.addEventListener("keyup", handleKeyPress);
  };

  const handleModalClose = () => {
    setActiveStoryIndex(null);
  };

  useEffect(() => {
    // Close the modal when reaching the beginning or end of the list
    if (activeStoryIndex < 0 || activeStoryIndex >= stories.length) {
      handleModalClose();
    }
  }, [activeStoryIndex, stories.length]);

  useEffect(() => {
    if (!activeStory && isModalOpenRef.current) {
      isModalOpenRef.current = false;
      window.removeEventListener("keyup", handleKeyPress);
    }
  }, [activeStory, handleKeyPress]);

  useEffect(() => {
    // Remove event on unmount
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="flex ">
      {!activeStory ? (
        stories.map((story, index) => (
          <StoryThumbnail
            key={index}
            setActiveStory={handleModalOpen}
            index={index}
            thumbnail={story.thumbnail}
            user={story.username}
          />
        ))
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                stiffness: "7000",
                type: "spring",
                damping: "3000",
              },
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 left-0 bottom-0 backdrop-blur-lg h-full flex justify-center items-center z-50 bg-black/70 p-3 overflow-hidden"
          >
            <div className="h-full lg:w-1/4  w-96 border border-neutral-700 rounded-lg">
              <Story
                story={activeStory}
                goToPrevStory={() => setActiveStoryIndex(activeStoryIndex - 1)}
                goToNextStory={() => setActiveStoryIndex(activeStoryIndex + 1)}
                handleCloseClick={handleModalClose}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Stories;

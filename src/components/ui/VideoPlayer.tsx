import { Play } from "lucide-react";
import { useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  showOverlay?: boolean;
}

export default function VideoPlayer({
  src,
  autoPlay = true,
  showOverlay = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  return (
    <div className="aspect-video relative">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover rounded-2xl"
        autoPlay={autoPlay}
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      {showOverlay && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div
            onClick={handlePlay}
            className="w-20 h-20 bg-[#1e40af] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform"
          >
            <Play className="text-white ml-1" size={52} fill="white" />
          </div>
        </div>
      )}
    </div>
  );
}
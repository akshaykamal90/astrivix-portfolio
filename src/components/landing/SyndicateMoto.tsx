import { useState, useRef, useEffect } from "react";
import { Play, X, Sparkles, Info, Film, Volume2, VolumeX, Eye, Calendar, Tag } from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow";

interface VideoItem {
  id: string;
  title: string;
  carModel: string;
  category: string;
  description: string;
  videoUrl: string;
  duration: string;
  date: string;
}

const PRESET_VIDEOS: VideoItem[] = [
  {
    id: "sm-1",
    title: "Volkswagen Virtus GT – Cinematic Performance Review",
    carModel: "Virtus GT",
    category: "Cinematic Showcase",
    description: "Capturing the premium aesthetics, turbocharged performance, and sporty character of the Virtus GT in custom lighting.",
    videoUrl: "/virtus-gt.mp4",
    duration: "0:45",
    date: "May 2026",
  },
  {
    id: "sm-2",
    title: "Mitsubishi Lancer – The OG Street Legacy",
    carModel: "OG Lancer",
    category: "Performance Reel",
    description: "An evocative tribute to the timeless street-styled Mitsubishi Lancer. Showcasing pristine curves and raw athletic agility.",
    videoUrl: "/og-lancer.mp4",
    duration: "0:52",
    date: "May 2026",
  },
  {
    id: "sm-3",
    title: "Toyota Fortuner – Mafia Edition Campaign",
    carModel: "Fortuner Mafia",
    category: "Premium Highlight",
    description: "High-impact visual promotion highlighting the raw dominance, bold custom mods, and powerful road presence of the Fortuner.",
    videoUrl: "/fortuner-mafia.mp4",
    duration: "0:38",
    date: "April 2026",
  },
  {
    id: "sm-4",
    title: "Toyota Urban Cruiser – Modern City Explorer",
    carModel: "Urban Cruiser",
    category: "Event Coverage",
    description: "A compact urban cruiser highlighted in contemporary styling, smart technology, and dynamic city driving comfort.",
    videoUrl: "/urban-cruiser.mp4",
    duration: "0:31",
    date: "April 2026",
  },
  {
    id: "sm-5",
    title: "Suzuki Swift – Classic Heritage Shoot",
    carModel: "Swift Old Edition",
    category: "Performance Reel",
    description: "A nostalgic look at the iconic Swift, capturing its custom hot hatch vibes, compact agility, and enthusiast modifications.",
    videoUrl: "/swift-old.mp4",
    duration: "0:41",
    date: "March 2026",
  },
  {
    id: "sm-6",
    title: "Honda Jazz – Spacious & Dynamic Hatch",
    carModel: "Honda Jazz",
    category: "Creative Reel",
    description: "Highlighting the practical space layout, smooth fuel-efficiency, and daily drivability of the reliable Honda Jazz.",
    videoUrl: "/jazz.mp4",
    duration: "0:28",
    date: "March 2026",
  },
  {
    id: "sm-7",
    title: "Honda City – Classic Sedan Showcase",
    carModel: "City Old Edition",
    category: "Cinematic Showcase",
    description: "Capturing the premium ride quality, timeless sedan contours, and legendary reliability of the classic Honda City.",
    videoUrl: "/city-old.mp4",
    duration: "0:36",
    date: "February 2026",
  },
  {
    id: "sm-8",
    title: "Fortuner Mal Edition – Audio Soundcheck Spotlight",
    carModel: "Fortuner Mal",
    category: "Premium Highlight",
    description: "Focusing on engine audio sound dynamics, throatiness of customized exhaust notes, and dynamic bass tuning profiles.",
    videoUrl: "/fortuner-mal.mp4",
    duration: "0:45",
    date: "January 2026",
  },
];

function encodeUrlPath(url: string) {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  // URL encode spaces and special characters, e.g., "/Virtus gt.MOV" -> "/Virtus%20gt.MOV"
  return encodeURI(url);
}

export function SyndicateMoto() {
  const [videos] = useState<VideoItem[]>(PRESET_VIDEOS);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [lightboxMuted, setLightboxMuted] = useState(false);

  // Spotlight States
  const [spotlightVideo, setSpotlightVideo] = useState<VideoItem>(PRESET_VIDEOS[0]);
  const [isSpotlightMuted, setIsSpotlightMuted] = useState(true);
  const spotlightVideoRef = useRef<HTMLVideoElement | null>(null);
  const spotlightSectionRef = useRef<HTMLDivElement | null>(null);

  // Refs for video hover play in the grid below
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // Escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Intersection Observer for Spotlight Autoplay when scrolled into viewport
  useEffect(() => {
    if (!spotlightSectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = spotlightVideoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          // Play the video silently when section scrolls into view
          video.play().catch(() => {});
        } else {
          // Pause when offscreen to conserve power/resources
          video.pause();
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the spotlight section is visible
    );

    observer.observe(spotlightSectionRef.current);
    return () => observer.disconnect();
  }, [spotlightVideo]); // Re-observe if the video asset itself changes

  // Force HTML5 video element reload when the spotlight video source changes
  useEffect(() => {
    const video = spotlightVideoRef.current;
    if (video) {
      video.load(); // Force reload the direct src attribute when the source changes
      video.muted = isSpotlightMuted;
      video.play().catch(() => {});
    }
  }, [spotlightVideo]);

  // Synchronize DOM volume state directly without reloading the video file (fixes the loop/restart glitch on unmute)
  useEffect(() => {
    const video = spotlightVideoRef.current;
    if (video) {
      video.muted = isSpotlightMuted;
    }
  }, [isSpotlightMuted]);

  const handleCardMouseEnter = (id: string) => {
    setHoveredCardId(id);
    const videoEl = videoRefs.current[id];
    if (videoEl) {
      videoEl.muted = true;
      videoEl.play().catch(() => {});
    }
  };

  const handleCardMouseLeave = (id: string) => {
    setHoveredCardId(null);
    const videoEl = videoRefs.current[id];
    if (videoEl) {
      videoEl.pause();
      videoEl.currentTime = 0;
    }
  };

  const handleSelectSpotlight = (video: VideoItem) => {
    setSpotlightVideo(video);
    setIsSpotlightMuted(true); // Default to muted on swap for smooth autoplay transition
    
    // Smoothly scroll spotlight card back into view
    spotlightSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="syndicate-moto" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* High-octane ambient background overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-primary/5 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase backdrop-blur-sm mb-4">
            <Film className="h-3.5 w-3.5" />
            Client Showcase
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Syndicate Moto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Premium automotive media production and video campaigns crafted for the ultimate luxury car dealership experience. High-velocity visual storytelling built to turn horsepower into sales.
          </p>
        </div>

        {/* FEATURED SPOTLIGHT CINEMA BANNER - AUTOPLAYS ON VIEWPORT SCROLL */}
        <div ref={spotlightSectionRef} className="mb-16">
          <BorderGlow
            edgeSensitivity={25}
            glowColor="295 100 68"
            backgroundColor="rgba(15, 11, 22, 0.6)"
            borderRadius={32}
            glowRadius={60}
            glowIntensity={1.5}
            colors={["#a855f7", "#ec4899", "#3b82f6"]}
            className="w-full"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-card p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center shadow-elegant">
              {/* Cinema screen player container - Vertical 9:16 Phone Mockup Frame */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-elegant group shrink-0 mx-auto lg:mx-0">
                {/* Dynamic Island phone speaker mockup detail at top for high-end aesthetic */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black/80 z-30 border border-white/5 backdrop-blur-md flex items-center justify-center pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2" />
                  <div className="w-8 h-1 rounded-full bg-white/20" />
                </div>

                <video
                  ref={spotlightVideoRef}
                  src={encodeUrlPath(spotlightVideo.videoUrl)}
                  loop
                  playsInline
                  muted
                  className="h-full w-full object-cover"
                />

                {/* Animated Dark Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Circular Glassmorphic Volume Toggle Button */}
                <button
                  onClick={() => setIsSpotlightMuted(!isSpotlightMuted)}
                  className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-white border border-white/15 backdrop-blur-md transition-spring hover:scale-110 active:scale-95 shadow-glow hover:border-primary/50 cursor-pointer"
                  aria-label={isSpotlightMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isSpotlightMuted ? (
                    <VolumeX className="h-5 w-5 text-primary-glow animate-pulse" />
                  ) : (
                    <Volume2 className="h-5 w-5 text-emerald-400 animate-bounce" />
                  )}
                </button>

                {/* Floating "Spotlight Now Playing" Badge */}
                <div className="absolute top-12 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/95 text-primary-foreground px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider backdrop-blur-md shadow-glow">
                    <Sparkles className="h-3.5 w-3.5" />
                    Spotlight Reel
                  </span>
                </div>
              </div>

              {/* Spotlight campaign details */}
              <div className="flex-1 w-full text-left flex flex-col justify-between h-full py-2">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold text-primary-glow uppercase tracking-widest mb-3">
                    <span>{spotlightVideo.carModel}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    <span className="text-white/50">{spotlightVideo.category}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight text-white mb-4 sm:text-3xl md:text-4xl">
                    {spotlightVideo.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
                    {spotlightVideo.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-white/70">
                      📅 Released: {spotlightVideo.date}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-white/70">
                      ⏱ Duration: {spotlightVideo.duration}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveVideo(spotlightVideo)}
                    className="text-sm font-bold text-primary hover:text-primary-glow transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    View Fullscreen Cinema
                    <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </button>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>

        {/* Main Header for Secondary Gallery */}
        <div className="mb-10 text-left">
          <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Film className="h-4 w-4 text-primary" />
            Client Video Library
          </h3>
          <p className="text-sm text-muted-foreground mt-1">Select any campaign to load into the interactive cinema player above</p>
        </div>

        {/* Video Grid - 4 Column Layout for Vertical 9:16 Reels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {videos.map((video) => (
            <BorderGlow
              key={video.id}
              edgeSensitivity={35}
              glowColor="295 100 68"
              backgroundColor="rgba(22, 18, 30, 0.4)"
              borderRadius={28}
              glowRadius={45}
              glowIntensity={hoveredCardId === video.id || spotlightVideo.id === video.id ? 1.2 : 0.4}
              colors={spotlightVideo.id === video.id ? ["#3b82f6", "#a855f7", "#ec4899"] : ["#a855f7", "#c084fc", "#ec4899"]}
              className={`w-full h-full cursor-pointer group transition-all duration-300 ${spotlightVideo.id === video.id ? 'ring-2 ring-primary/40' : ''}`}
            >
              <div
                className="relative flex flex-col h-full overflow-hidden p-2 sm:p-4 rounded-2xl sm:rounded-3xl"
                onMouseEnter={() => handleCardMouseEnter(video.id)}
                onMouseLeave={() => handleCardMouseLeave(video.id)}
                onClick={() => handleSelectSpotlight(video)}
              >
                {/* Video Playback / Thumbnail Container - Portrait 9:16 Aspect */}
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black/60 border border-white/5">
                  <video
                    ref={(el) => {
                      videoRefs.current[video.id] = el;
                    }}
                    src={encodeUrlPath(video.videoUrl)}
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ pointerEvents: "none" }}
                  />

                  {/* Dark Vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-40" />

                  {/* Spotlight focus outline banner */}
                  {spotlightVideo.id === video.id && (
                    <div className="absolute inset-0 bg-primary/5 border-2 border-primary/50 rounded-2xl pointer-events-none" />
                  )}

                  {/* Play Indicator Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow border border-white/10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-spring">
                      {spotlightVideo.id === video.id ? (
                        <Volume2 className="h-6 w-6 animate-pulse" />
                      ) : (
                        <Play className="h-6 w-6 fill-current translate-x-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Category & Duration badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md border border-primary/20">
                      <Tag className="h-3 w-3" />
                      {video.category}
                    </span>
                    <span className="rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/5">
                      {video.duration}
                    </span>
                  </div>
                </div>

                {/* Details Content */}
                <div className="flex flex-1 flex-col justify-between pt-3 sm:pt-5 px-1 sm:px-2 pb-1 sm:pb-2">
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-primary-glow font-bold uppercase tracking-wider mb-1 sm:mb-2">
                      <span>{video.carModel}</span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="flex items-center gap-1 text-white/50">
                        <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        {video.date}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300 line-clamp-1 sm:line-clamp-none">
                      {video.title}
                    </h3>
                    <p className="mt-1 sm:mt-3 text-[11px] sm:text-sm text-muted-foreground line-clamp-1 sm:line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="hidden sm:flex mt-5 items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs font-semibold text-white/40 flex items-center gap-1.5">
                      <Info className="h-3.5 w-3.5" />
                      {spotlightVideo.id === video.id ? "Playing in Cinema Screen above" : "Click to load into Spotlight Player"}
                    </span>
                    <span className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                      {spotlightVideo.id === video.id ? "Spotlight Loaded ✓" : "Load Spotlight Video →"}
                    </span>
                  </div>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX CINEMA MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg animate-fade-in">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 hover:text-white hover:bg-black/60 transition-smooth"
            aria-label="Close video player"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-[420px] aspect-[9/16] px-4">
            <div className="relative h-full w-full rounded-[2.5rem] border-4 border-white/10 overflow-hidden shadow-elegant bg-black">
              <video
                src={encodeUrlPath(activeVideo.videoUrl)}
                autoPlay
                controls
                loop
                muted={lightboxMuted}
                className="h-full w-full object-contain"
              />

              {/* Custom volume controls embedded on top */}
              <div className="absolute bottom-16 right-6 flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 border border-white/5 backdrop-blur-md z-40">
                <button
                  onClick={() => setLightboxMuted(!lightboxMuted)}
                  className="text-white hover:text-primary transition-colors"
                >
                  {lightboxMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
                <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider">
                  {lightboxMuted ? "Muted" : "Audio On"}
                </span>
              </div>
            </div>

            {/* Cinematic details underneath the player */}
            <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2 text-left">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{activeVideo.carModel} • Client Reel</span>
                <h4 className="text-2xl font-bold text-white mt-1">{activeVideo.title}</h4>
              </div>
              <div className="text-xs text-white/50 max-w-md md:text-right">
                {activeVideo.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

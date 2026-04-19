import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, Maximize2, Minimize2, AlertCircle } from 'lucide-react';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

export const LofiPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [loadError, setLoadError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const playerRef = useRef<any>(null);

    // Stream de Lofi Girl
    const videoId = "jfKfPfyJRdk";

    useEffect(() => {
        // Load YouTube API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        window.onYouTubeIframeAPIReady = () => initPlayer();

        if (window.YT && window.YT.Player) {
            initPlayer();
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, [videoId]);

    const initPlayer = () => {
        if (playerRef.current) playerRef.current.destroy();

        playerRef.current = new window.YT.Player('youtube-player', {
            videoId: videoId,
            playerVars: {
                autoplay: isPlaying ? 1 : 0,
                mute: isMuted ? 1 : 0,
                controls: 0,
                showinfo: 0,
                rel: 0,
                enablejsapi: 1,
                iv_load_policy: 3
            },
            events: {
                onReady: onPlayerReady,
                onError: onPlayerError,
                onStateChange: onPlayerStateChange
            }
        });
    };

    const onPlayerReady = (event: any) => {
        setIsLoading(false);
        if (isPlaying) event.target.playVideo();
    };

    const onPlayerError = (event: any) => {
        // Error constants from YT: 100 (not found), 101/150 (not allowed in embedded)
        if ([100, 101, 150].includes(event.data)) {
            setLoadError(true);
            setIsLoading(false);
        }
    };

    const onPlayerStateChange = (event: any) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
        } else if (event.data === window.YT.PlayerState.PAUSED) {
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        if (!playerRef.current || !playerRef.current.playVideo) return;

        if (isPlaying) {
            playerRef.current.playVideo();
        } else {
            playerRef.current.pauseVideo();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (!playerRef.current || !playerRef.current.mute) return;

        if (isMuted) {
            playerRef.current.mute();
        } else {
            playerRef.current.unMute();
        }
    }, [isMuted]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-6 right-6 z-50 pointer-events-none"
        >
            <div className="flex flex-col items-end pointer-events-auto relative">
                
                {/* ÁREA DEL REPRODUCTOR */}
                <div className={`overflow-hidden transition-all duration-700 ease-in-out border border-white/5 shadow-2xl rounded-2xl bg-slate-950/80 backdrop-blur-xl mb-4 ${isExpanded ? 'w-72 aspect-video opacity-100' : isPlaying ? 'w-0 h-0 opacity-0' : 'w-0 h-0 opacity-0 pointer-events-none'}`}>
                    <div className="relative w-full h-full">
                        {/* Status Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 text-gray-400 p-4 text-center z-0 bg-slate-950/40">
                            {loadError ? (
                                <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className="p-3 bg-red-500/10 rounded-full mb-1">
                                        <AlertCircle size={28} className="text-red-500" />
                                    </div>
                                    <span className="text-xs font-bold text-red-100 italic tracking-wide">Error en Sintonía</span>
                                    <p className="text-[10px] text-red-400/80 max-w-[200px] leading-relaxed">
                                        El video no existe o no permite reproducción externa.
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <Music size={24} className={`opacity-20 ${isPlaying ? 'animate-bounce text-pink-500' : ''}`} />
                                    <span className="text-[10px] font-medium tracking-tight text-gray-400">
                                        {isLoading && isPlaying ? 'Sintonizando...' : isPlaying ? 'Canal Activo' : 'Pausado'}
                                    </span>
                                </>
                            )}
                        </div>
                        
                        {/* YouTube Player Container */}
                        <div 
                            id="youtube-player"
                            className={`absolute inset-0 transition-opacity duration-700 z-10 ${isExpanded && !loadError ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                        />
                    </div>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mb-4 overflow-hidden rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl w-72 p-4"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-bold text-sm truncate w-32">Lofi Girl</span>
                                        {!loadError && isPlaying && (
                                            <div className="flex gap-0.5">
                                                {[1, 2, 3].map(i => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ height: [4, 12, 4] }}
                                                        transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.15 }}
                                                        className="w-0.5 bg-pink-500 rounded-full"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <span className={`text-[10px] font-black tracking-[0.2em] flex items-center gap-1.5 ${loadError ? 'text-red-500' : 'text-pink-500/80'}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${loadError ? 'bg-red-500' : 'bg-pink-500 animate-pulse shadow-[0_0_8px_rgba(236,72,153,0.5)]'}`}></span>
                                        {loadError ? 'OFFLINE' : 'LIVE'}
                                    </span>
                                </div>
                                <button 
                                    onClick={() => setIsMuted(!isMuted)}
                                    className={`p-2 rounded-full transition-all ${isMuted ? 'bg-pink-500/20 text-pink-400' : 'hover:bg-white/10 text-gray-400'}`}
                                >
                                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mini Controller Bar */}
                <motion.div 
                    layout
                    className={`flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-2xl border shadow-xl transition-all duration-500 ${loadError ? 'bg-red-950/40 border-red-500/30' : 'bg-slate-900/90 border-white/5'}`}
                >
                    <button 
                        onClick={togglePlay}
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all shadow-lg active:scale-95 ${
                            loadError 
                                ? 'bg-red-500/20 text-red-400 border border-red-500/20' 
                                : 'bg-linear-to-br from-pink-500 to-purple-600 text-white shadow-pink-500/20'
                        }`}
                    >
                        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                    </button>
                    
                    <div className="hidden sm:block">
                        <div className={`text-xs font-black tracking-tighter mb-0.5 transition-colors ${loadError ? 'text-red-400' : 'text-white'}`}>
                            {loadError ? 'ERROR' : 'LOFI RADIO'}
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className={`h-1 rounded-full transition-all duration-500 ${loadError ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]' : 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.4)]'} ${isPlaying ? 'w-16' : 'w-4 opacity-30'}`}></div>
                            <div className={`h-1 w-1 rounded-full ${loadError ? 'bg-red-500' : 'bg-pink-500'} ${isPlaying ? 'animate-bounce' : 'opacity-30'}`}></div>
                        </div>
                    </div>

                    <div className="w-px h-6 bg-white/10 mx-1"></div>

                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`p-2 rounded-full transition-colors ${isExpanded ? 'bg-white/10 text-white' : 'hover:bg-white/10 text-gray-400'}`}
                    >
                        {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

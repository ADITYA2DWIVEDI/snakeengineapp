import React from 'react';
import {
    ImageEditAutoIcon, AudioSparkIcon, MovieIcon, GoogleGIcon, MapIcon,
    ImageIcon, SparkIcon, VoiceChatIcon, VideoSparkIcon, AspectRatioIcon,
    DocumentScannerIcon, BoltIcon, VideoLibraryIcon, SpeechToTextIcon,
    NetworkIntelligenceIcon
} from '../components/Icons';

interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const features: Feature[] = [
    {
        id: 'image_edit_auto',
        title: 'Image Editing',
        description: "Add objects, remove backgrounds, or change a photo's style just by typing.",
        icon: <ImageEditAutoIcon />
    },
    {
        id: 'audio_spark_conversation',
        title: 'Conversational Voice Apps',
        description: 'Use the Gemini Live API to give your app a voice and make your own conversational experiences.',
        icon: <AudioSparkIcon />
    },
    {
        id: 'movie',
        title: 'Animate Images with Veo',
        description: "Bring images to life with Veo 3. Let users upload a product photo and turn it into a dynamic video ad.",
        icon: <MovieIcon />
    },
    {
        id: 'google',
        title: 'Google Search Data',
        description: 'Connect your app to real-time Google Search results to discuss current events or fact-check information.',
        icon: <GoogleGIcon />
    },
    {
        id: 'maps',
        title: 'Google Maps Data',
        description: 'Connect your app to real-time Google Maps data to pull information about places, routes, or directions.',
        icon: <MapIcon />
    },
    {
        id: 'image',
        title: 'Generate Images',
        description: 'Generate high-quality images from a text prompt. Create blog post heroes, concept art, or unique assets.',
        icon: <ImageIcon />
    },
    {
        id: 'spark',
        title: 'Gemini Intelligence',
        description: 'Embed Gemini in your app to complete all sorts of tasks - analyze content, make edits, and more.',
        icon: <SparkIcon />
    },
    {
        id: 'voice_chat',
        title: 'AI Powered Chatbot',
        description: 'Add a context-aware chatbot to your app that remembers the conversation, perfect for multi-step tasks.',
        icon: <VoiceChatIcon />
    },
    {
        id: 'video_spark',
        title: 'Prompt-Based Video',
        description: 'Add video generation to your creative app. Turn blog posts, scripts, or descriptions into short video clips.',
        icon: <VideoSparkIcon />
    },
    {
        id: 'aspect_ratio',
        title: 'Control Image Aspect Ratios',
        description: 'Control the exact shape of your generated images for perfect-fit wallpapers or web banners.',
        icon: <AspectRatioIcon />
    },
    {
        id: 'document_scanner',
        title: 'Analyze Images',
        description: 'Enable your app to see and understand images. Extract data, translate, or summarize receipts, menus, or charts.',
        icon: <DocumentScannerIcon />
    },
    {
        id: 'bolt',
        title: 'Fast AI Responses',
        description: 'Add lightning-fast, real-time responses to your app using 2.5 Flash-Lite for instant auto-completes.',
        icon: <BoltIcon />
    },
    {
        id: 'video_library',
        title: 'Video Understanding',
        description: 'Help users find key moments in long videos. Instantly generate summaries, flashcards, or marketing highlights.',
        icon: <VideoLibraryIcon />
    },
    {
        id: 'speech_to_text',
        title: 'Transcribe Audio',
        description: 'Add a feature to provide live, real-time transcription of any audio feed for your users.',
        icon: <SpeechToTextIcon />
    },
    {
        id: 'network_intelligence',
        title: 'Think More When Needed',
        description: "Enable 'Thinking Mode' to handle your users' most complex queries.",
        icon: <NetworkIntelligenceIcon />
    },
    {
        id: 'audio_spark_speech',
        title: 'Generate Speech',
        description: 'Give your app a voice. Add text-to-speech to read articles aloud or create voice-based assistants.',
        icon: <AudioSparkIcon />
    }
];


const FeatureCard: React.FC<Feature> = ({ title, description, icon }) => (
    <div className="p-6 rounded-2xl glass-pane shadow-lg hover:border-brand-purple/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-slate-100 text-brand-purple">
            {React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7' })}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-text-primary mb-1">{title}</h3>
            <p className="text-sm text-text-secondary">{description}</p>
        </div>
    </div>
);


export const AiFeaturesView: React.FC = () => {
    return (
        <div className="h-full w-full p-4 md:p-8 overflow-y-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-text-primary gradient-text">Explore AI Features</h1>
                <p className="text-text-secondary mt-1">Discover the powerful Gemini capabilities you can build into your app.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        {...feature}
                    />
                ))}
            </div>
        </div>
    );
};
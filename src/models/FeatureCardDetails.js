import { CiGlobe } from "react-icons/ci";
import { FiMonitor } from "react-icons/fi";
import { IoCodeSlashOutline, IoColorPaletteSharp } from "react-icons/io5";
import { LuBot, LuWebhook } from "react-icons/lu";
import { MdBarChart, MdOutlineVideocam } from "react-icons/md";
import { PiTimerBold } from "react-icons/pi";

const FeatureCardDetails = [
    {
        icon: LuBot,
        heading: 'AI-Powered Interviews',
        subHeading: 'Advanced AI generates contextual questions based on candidate responses, creating a natural interview flow.'
    },
    {
        icon: IoCodeSlashOutline,
        heading: 'DSA Coding Challenges',
        subHeading: 'Real-time code execution with support for 6+ languages. Test candidates with algorithmic problems.'
    },
    {
        icon: MdOutlineVideocam,
        heading: 'Smart Proctoring',
        subHeading: 'Camera-based monitoring with attention tracking and cheating detection for authentic interviews.'
    },

    {
        icon: FiMonitor,
        heading: 'Screen + Audio Recording',
        subHeading: 'Complete interview recording with screen capture and audio for comprehensive review..'
    },
    {
        icon: IoColorPaletteSharp,
        heading: 'White Label Solution',
        subHeading: 'Fully customizable branding, email templates, and domain to match your company identity.'
    },
    {
        icon: LuWebhook,
        heading: 'Webhook Integration',
        subHeading: 'Real-time notifications and seamless integration with your existing HR systems and workflows.'
    },
    {
        icon: MdBarChart,
        heading: 'Detailed Analytics',
        subHeading: 'Comprehensive reports with parameter-based scoring, code quality analysis, and performance insights.'
    },
    {
        icon: PiTimerBold,
        heading: 'Flexible Timing',
        subHeading: 'Customizable interview duration with auto-finish. Set expiry times for interview links.'
    },
    {
        icon: CiGlobe,
        heading: 'Multi-language Support',
        subHeading: 'Conduct interviews in multiple languages to reach a global talent pool.'
    }
]

export default FeatureCardDetails;
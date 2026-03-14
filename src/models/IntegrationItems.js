import { LuMessageSquare, LuWebhook } from "react-icons/lu";
import { MdOutlineElectricBolt, MdOutlineEmail } from "react-icons/md";

const IntegrationItems = [
    {
        icon: LuMessageSquare,
        heading: 'Slack',
        subHeading: 'Get instant notifications'
    },
    {
        icon: LuWebhook,
        heading: 'Webhooks',
        subHeading: 'Custom integrations'
    },
    {
        icon: MdOutlineEmail,
        heading: 'Email',
        subHeading: 'Automated invites & reports'
    },
    {
        icon: MdOutlineElectricBolt,
        heading: 'API',
        subHeading: 'Full API access'
    }
]

export default IntegrationItems;
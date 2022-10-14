import {
	CogIcon,
	CommentsIcon,
	DownIcon,
	DownloadIcon,
	EditIcon,
	LockIcon,
	MoreIcon,
	PlusIcon,
	ShareIcon,
	SurveyIcon,
	ThumbsDownFilledIcon,
	ThumbsDownIcon,
	ThumbsUpFilledIcon,
	ThumbsUpIcon,
	TimerIcon,
	DotsIcon,
	CloseIcon,
} from './Icons';

const IconMappings = {
	plus: PlusIcon,
	share: ShareIcon,
	cog: CogIcon,
	comments: CommentsIcon,
	down: DownIcon,
	download: DownloadIcon,
	edit: EditIcon,
	lock: LockIcon,
	more: MoreIcon,
	survey: SurveyIcon,
	thumbsDownFilled: ThumbsDownFilledIcon,
	thumbsDown: ThumbsDownIcon,
	thumbsUpFilled: ThumbsUpFilledIcon,
	thumbsUp: ThumbsUpIcon,
	timer: TimerIcon,
	dots: DotsIcon,
	close: CloseIcon,
};

export type IconType = keyof typeof IconMappings;

type IconProps = { type: IconType; className?: string };

export const Icon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = ({
	type,
	className,
	...props
}) => {
	const IconComponent = IconMappings[type];
	return <IconComponent className={className} {...props} />;
};

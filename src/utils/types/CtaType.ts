import ContactButton from '@/components/misc/ctaButtons/ContactButton';
import ScheduleMeeting from '@/components/misc/ctaButtons/ScheduleMeeting';
import TryButton from '@/components/misc/TryButton';

export type SimpleCtaType = { title: string; className?: string; link: string };

export type CtaType =
  | SimpleCtaType
  | typeof TryButton
  | typeof ScheduleMeeting
  | typeof ContactButton;

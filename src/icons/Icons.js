import React from 'react';
import combineClasses from 'classnames';
import fa from '@fortawesome/fontawesome-free/css/all.css';
import far from '@fortawesome/fontawesome-free/css/regular.css';
import sunsetIcon from './compositeIcons/SunsetIcon';
import sunriseIcon from './compositeIcons/SunriseIcon';

export const createRegularIconComponent = (...classes) => createIconComponent(far.far, ...classes);
export const createIconComponent = (...classes) => createIcon(fa.fa, ...classes);

const createIcon = (cssClass, ...otherClasses) => (props) => {
  const { className, ...otherProps } = props;
  const combinedClasses = combineClasses(cssClass, className, ...otherClasses);
  return <i className={combinedClasses} {...otherProps} />;
};

export const OpenDrawer = createIconComponent(fa['fa-chevron-down']);
export const CloseDrawer = createIconComponent(fa['fa-chevron-up']);
export const AddIcon = createIconComponent(fa['fa-plus']);
export const HomeIcon = createIconComponent(fa['fa-home']);
export const HeatingIcon = createIconComponent(fa['fa-thermometer-half']);
export const DeleteIcon = createIconComponent(fa['fa-trash']);
export const MusicIcon = createIconComponent(fa['fa-music']);
export const PlaylistIcon = createIconComponent(fa['fa-list']);
export const KareokeIcon = createIconComponent(fa['fa-microphone']);
export const GamesIcon = createIconComponent(fa['fa-gamepad']);
export const TVIcon = createIconComponent(fa['fa-tv']);
export const SecurityIcon = createIconComponent(fa['fa-key']);
export const WeatherIcon = createIconComponent(fa['fa-cloud-sun']);
export const MoveUpIcon = createIconComponent(fa['fa-caret-up']);
export const MoveDownIcon = createIconComponent(fa['fa-caret-down']);

export const ArrowIcon = createIconComponent(fa['fa-long-arrow-alt-up']);

export const PowerIcon = createIconComponent(fa['fa-power-off']);
export const MuteIcon = createIconComponent(fa['fa-volume-mute']);
export const CloseIcon = createIconComponent(fa['fa-times']);
export const RefreshIcon = createIconComponent(fa['fa-sync']);
export const SunsetIcon = sunsetIcon;
export const SunriseIcon = sunriseIcon;

export const BackspaceIcon = createIconComponent(fa['fa-backspace'], fa.fa);
export const CapsIcon = createRegularIconComponent(fa['fa-arrow-alt-circle-up'], fa.far);
export const CapsLockIcon = createIconComponent(fa['fa-arrow-alt-circle-up'], fa.fas);

export const MoreIcon = createIconComponent(fa['fa-ellipsis-h']);
export const GardenIcon = createIconComponent(fa['fa-leaf']);
export const ToDoIcon = createIconComponent(fa['fa-list-ol']);
export const BackIcon = createIconComponent(fa['fa-arrow-alt-circle-left']);

export const WaterIcon = createIconComponent(fa['fa-hand-holding-water']);
export const NotesIcon = createIconComponent(fa['fa-edit']);
export const ZoneIcon = createIconComponent(fa['fa-grip-horizontal']);
export const AlertIcon = createIconComponent(fa['fa-exclamation-triangle']);
export const PlantIcon = createIconComponent(fa['fa-seedling']);

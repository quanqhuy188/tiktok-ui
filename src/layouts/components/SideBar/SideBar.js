import config from '~/config';
import Menu, { MenuItem } from './Menu';
import classNames from 'classnames/bind';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.root} icon={<HomeIcon />} />
        <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
      </Menu>
      <SuggestedAccounts label={'Suggested accounts'} />
      <SuggestedAccounts label={'Following accounts'} />
    </aside>
  );
}

export default Sidebar;

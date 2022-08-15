import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f0ddf05770a5b5a0b8a0d98fc17b27ee~c5_300x300.webp?x-expires=1658995200&x-signature=SPM9oovZ3pZnzbBuljr3cyhaR0w%3D"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Dao Le Hoa</span>
          <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
        </h4>
        <p className={cx('username')}>daolehoa</p>
      </div>
    </div>
  );
}

export default AccountItem;

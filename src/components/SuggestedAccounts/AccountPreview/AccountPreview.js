import React from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountPreview = () => {
  return (
    <>
      <div className={cx('prof-header')}>
        <Link to={`/@hoaaa`} className={cx('prof-link')}>
          <Image
            className={cx('prof-avatar')}
            src={
              'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660986000&x-signature=MD2ewayiHAcvaN3gWFpKLpUD6F8%3D'
            }
            alt={'quang huy'}
          />
        </Link>
        <Button primary>Follow</Button>
      </div>
      <Link to={`/@hoaaa`} className={cx('prof-nickname')}>
        <span>{'huydev188'}</span>
        <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
      </Link>
      <Link to={`/@hoaaa`} className={cx('prof-name')}>
        <span>{'Huy Nguyen'}</span>
      </Link>
      <div className={cx('prof-info')}>
        <div className={cx('prof-followers')}>
          <strong>200M</strong>
          <span>Followers</span>
        </div>
        <div className={cx('prof-likes')}>
          <strong>300M</strong>
          <span>Likes</span>
        </div>
      </div>
    </>
  );
};

export default AccountPreview;

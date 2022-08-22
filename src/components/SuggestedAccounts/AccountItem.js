import React from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const AccountItem = ({}) => {
  const renderResult = (attrs) => (
    <div className={cx('prof-container')} tabIndex="-1" {...attrs}>
      <AccountPreview />
    </div>
  );

  return (
    //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <Tippy delay={[700, 200]} offset={[0, 0]} placement="bottom" interactive={true} render={renderResult}>
        <Link to={`/@hoaaa`} className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src={
              'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660986000&x-signature=MD2ewayiHAcvaN3gWFpKLpUD6F8%3D'
            }
            alt={'quang huy'}
          />
          <div className={cx('item-info')}>
            <h4 className={cx('nickname')}>
              <span>{'huydev188'}</span>

              <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
            </h4>
            <p className={cx('name')}>Huy Nguyen</p>
          </div>
        </Link>
      </Tippy>
    </div>
  );
};

AccountItem.propTypes = {};

export default AccountItem;

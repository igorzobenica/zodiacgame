import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const backgroundColor = '#000000a1';

const getPortalContainer = () => {
  const el = document.getElementById('app-overlay');
  if (el) {
    return el;
  } else {
    const container = document.createElement('div');
    container.setAttribute('id', 'app-overlay');
    document.body.appendChild(container);
    return container;
  }
};

const OverlayWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: ${backgroundColor};
  overflow-x: hidden;
  z-index: 3000;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 26em) {
    padding: 2rem;
  }

  * {
  }

  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 150ms cubic-bezier(0.25, 0.55, 0.3, 1);
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0.01;
    transition: opacity 150ms cubic-bezier(0.25, 0.55, 0.3, 1);
  }

  &.fade-enter > *:first-child {
    transform: translate3d(0, -2rem, 0);
  }

  &.fade-enter-active > *:first-child {
    transform: translate3d(0, 0, 0);
    transition: transform 200ms cubic-bezier(0.25, 0.55, 0.3, 1);
  }

  &.fade-exit > *:first-child {
    transform: translate3d(0, 0, 0);
  }

  &.fade-exit-active > *:first-child {
    transform: translate3d(0, -2rem, 0);
    transition: transform 200ms cubic-bezier(0.25, 0.55, 0.3, 1);
  }
`;

const ContentWrapper = styled.div`
  box-shadow: '0px 12px 16px rgba(49, 73, 164, 0.08), 0px 0px 3px rgba(49, 73, 164, 0.1), 0px 0px 2px rgba(49, 73, 164, 0.14)';
  margin: auto;
  pointer-events: none;
  max-width: 100%;
  box-sizing: border-box;
  /* FocusLock */
  & > * {
    box-sizing: border-box;
    pointer-events: auto;
    max-width: 100%;
  }
  /* FocusLock children */
  & > * > * {
    box-sizing: border-box;
    max-width: 100%;
  }
`;

const Overlay = props => {
  const { clickOutsideToDismiss, escapeToDismiss, onDismiss, onExited, shadow, show } = props;
  const [cachedChildren, setCachedChildren] = useState(props.children);
  const [interactive, setInteractive] = useState(show);
  const contentEl = useRef(null);

  if (show && cachedChildren !== props.children) {
    // cache children so we dont update
    // when we are transitioning out.
    setCachedChildren(props.children);
  }

  const handleEntered = React.useCallback(() => {
    // wait until overlay has animated in before enabling click and esc because
    // in some cases ( IE11 ) the overlay will catch the same click event as
    // the event used to display the overlay and immediately close.
    setInteractive(true);
  }, [setInteractive]);

  const handleExit = React.useCallback(() => {
    setInteractive(false);
  }, [setInteractive]);

  const handleClickOutside = React.useCallback(
    ({ target }) => {
      if (onDismiss) {
        const node = ReactDOM.findDOMNode(contentEl.current);
        if (node && !node.contains(target)) {
          onDismiss();
        }
      }
    },
    [onDismiss, contentEl],
  );

  const handleKeyDown = React.useCallback(
    ({ key, keyCode, which }) => {
      if (onDismiss && (key === 'Escape' || key === 'Esc' || keyCode === 27 || which === 27)) {
        onDismiss();
      }
    },
    [onDismiss],
  );

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  useEffect(() => {
    if (interactive) {
      if (clickOutsideToDismiss) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      if (escapeToDismiss) {
        document.addEventListener('keydown', handleKeyDown);
      }
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [interactive, clickOutsideToDismiss, escapeToDismiss, handleClickOutside, handleKeyDown]);

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      timeout={200}
      classNames={'fade'}
      mountOnEnter={true}
      unmountOnExit={true}
      onExited={onExited}
      onEntered={handleEntered}
      onExit={handleExit}
    >
      <OverlayWrapper>
        <ContentWrapper ref={contentEl} shadow={shadow}>
          {show && (
            <FocusLock returnFocus={true} className="FocusLock">
              {cachedChildren}
            </FocusLock>
          )}
          {!show && cachedChildren}
        </ContentWrapper>
      </OverlayWrapper>
    </CSSTransition>,
    getPortalContainer(),
  );
};

Overlay.defaultProps = {
  escapeToDismiss: true,
  clickOutsideToDismiss: true,
  shadow: true,
  theme: {
    Overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    tokens: {
      NEUTRAL_100: '#444',
    },
  },
};

Overlay.propTypes = {
  clickOutsideToDismiss: PropTypes.bool,
  escapeToDismiss: PropTypes.bool,
  onExited: PropTypes.func,
  shadow: PropTypes.bool,
  show: PropTypes.bool,
  onDismiss: PropTypes.func,
};

export default Overlay;

import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items:stretch;
    background: rgba(0,0,0,0.4);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow: hidden;
    z-index:1000;
    transition: all 0.4s;

    ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
        opacity: 0;
        pointer-events: none;
    `;
  }}
`;

const variantsContainer = {
  open: {
    x: 0,
  },
  closed: {
    x: '100%',
  },
};

export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      <motion.div
        variants={variantsContainer}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          flex: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {children({ 'data-modal-safe-area': 'true' })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    //*  console.log('Modal componentDidMount');
    /*window.addEventListener('keydown', e => {
      //console.log(e.code);
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');
        this.props.onClose();
      }
    });*/
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    //*  console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');
      this.props.onClose();
    }
  };

  hendleBackdropClick = event => {
    // console.log('Кликнули в бекдроп');
    //console.log('на чем сработал: ', event.currentTarget);
    //console.log('куда буквально кликнули: ', event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose(); //по серому
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.hendleBackdropClick}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

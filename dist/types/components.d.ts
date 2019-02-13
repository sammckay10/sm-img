/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface SmImg {
    'alt': string;
    'src': string;
  }
  interface SmImgAttributes extends StencilHTMLAttributes {
    'alt'?: string;
    'src'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SmImg': Components.SmImg;
  }

  interface StencilIntrinsicElements {
    'sm-img': Components.SmImgAttributes;
  }


  interface HTMLSmImgElement extends Components.SmImg, HTMLStencilElement {}
  var HTMLSmImgElement: {
    prototype: HTMLSmImgElement;
    new (): HTMLSmImgElement;
  };

  interface HTMLElementTagNameMap {
    'sm-img': HTMLSmImgElement
  }

  interface ElementTagNameMap {
    'sm-img': HTMLSmImgElement;
  }


}

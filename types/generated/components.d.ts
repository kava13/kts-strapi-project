import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksSsylka extends Schema.Component {
  collectionName: 'components_blocks_ssylka';
  info: {
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface BlocksKnopka extends Schema.Component {
  collectionName: 'components_blocks_knopka';
  info: {
    displayName: '\u041A\u043D\u043E\u043F\u043A\u0430';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface BlocksKartochka extends Schema.Component {
  collectionName: 'components_blocks_kartochka';
  info: {
    displayName: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.ssylka': BlocksSsylka;
      'blocks.knopka': BlocksKnopka;
      'blocks.kartochka': BlocksKartochka;
    }
  }
}
